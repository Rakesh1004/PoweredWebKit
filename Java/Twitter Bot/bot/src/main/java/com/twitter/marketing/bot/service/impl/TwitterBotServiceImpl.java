package com.twitter.marketing.bot.service.impl;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import com.twitter.marketing.bot.component.TwitterOAuth1;
import com.twitter.marketing.bot.service.TwitterBotService;
import com.twitter.marketing.bot.util.Constants;

@Service
public class TwitterBotServiceImpl implements TwitterBotService {

	private static final Logger LOGGER = LogManager.getLogger(TwitterBotServiceImpl.class);
	
	@Autowired
	private TwitterOAuth1 twitterOAuth1;
	
	@Override
	public void postTweet() throws URISyntaxException {
		LOGGER.info("Post Tweet");
		String tweetStatus = this.computeTweetContent();
		LOGGER.info("Tweet Status => " + tweetStatus);
		this.computeTweetRequest(tweetStatus);
	}
	
	private String computeTweetContent() {
		int tweetSize = 0;
		
		StringBuilder tweetStatus = new StringBuilder("");
		
		// get a random course link
		int courseListSize = Constants.courseList.size();
		String courseURL = Constants.courseList.get(this.getRandomNumberUsingNextInt(courseListSize));
		
		// add to 'tweetSize'
		tweetSize = tweetSize + courseURL.length() + 1;// added 1 for an empty space
		
		// get a random promotional message/additional info
		int courseMessagesSize = Constants.courseMessagesList.size();
		String courseMessage = Constants.courseMessagesList.get(this.getRandomNumberUsingNextInt(courseMessagesSize));
		
		// add to 'tweetSize'
		tweetSize = tweetSize + courseMessage.length() + 1;// added 1 for an empty space
		
		List<String> validHashtagsList = new ArrayList<>();
		while(tweetSize < Constants.MAX_TWEET_LENGTH - 10) {
			int hashtagsListSize = Constants.commonHashtagsList.size();
			String hashtag = Constants.commonHashtagsList.get(this.getRandomNumberUsingNextInt(hashtagsListSize));
			
			if(validHashtagsList.contains(hashtag)) {
				continue;
			}
			
			validHashtagsList.add(hashtag);
			tweetSize = tweetSize + hashtag.length() + 1; // for a empty space
			
			tweetStatus.append(hashtag);
			tweetStatus.append(" ");
		}
		
		tweetStatus.append("\n\n");
		tweetStatus.append(courseMessage);
		tweetStatus.append("\n\n");
		tweetStatus.append(courseURL);
		
		return tweetStatus.toString();
	}
	
	private int getRandomNumberUsingNextInt(int max) {
		Random random = new Random();
		return random.nextInt(max);
	}
	
	private void computeTweetRequest(String tweetStatus) throws URISyntaxException {
		// get the request URL
		URI resource = new URI(Constants.POST_TWEET_URL);
		
		// create an instance of RestTemplate
		RestTemplate restTemplate = new RestTemplate();
		
		// request body parameters
		MultiValueMap<String, String> map = new LinkedMultiValueMap<>();
		map.add(Constants.STATUS, tweetStatus);
		
		// create headers
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		headers.set(Constants.AUTHORIZATION, twitterOAuth1.generateOauth1Header(resource, HttpMethod.POST, map));
		
		// build the request
		HttpEntity<MultiValueMap<String, String>> entity = new HttpEntity<>(map, headers);
		
		// send POST request to Twitter
		ResponseEntity<String> response = restTemplate.postForEntity(resource.toString(), entity, String.class);
		
		// check response
		if (response.getStatusCode() == HttpStatus.OK) {
			LOGGER.info("Tweet posted with success.");
		} else {
			LOGGER.info("Error on posting tweet. StatusCode: " + response.getStatusCode());
		}
				
	}
	
	
	
	
}
