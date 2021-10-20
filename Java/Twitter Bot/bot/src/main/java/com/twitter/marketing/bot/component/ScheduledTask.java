package com.twitter.marketing.bot.component;

import java.net.URISyntaxException;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.twitter.marketing.bot.service.TwitterBotService;
import com.twitter.marketing.bot.util.Constants;

@Component
public class ScheduledTask {

	private static final Logger LOGGER = LogManager.getLogger(ScheduledTask.class);
	
	@Autowired
	private TwitterBotService twitterBotService;
	
	@Scheduled(fixedRate = 1800000L)
	public void runScheduledTask() throws URISyntaxException {
		LOGGER.info("Executing scheduler...");
		this.twitterBotService.postTweet();
	}
	
	@Scheduled(fixedRate = 1500000L)
	public void herokuNotIdle() {
		LOGGER.info("Keep Heroku instance awake...Executing ping request");
		try {
			RestTemplate restTemplate = new RestTemplate();
			restTemplate.getForObject(Constants.HEROKU_INSTANCE, Object.class);
		} catch (Exception e) {
			LOGGER.info("Heroku instance running...");
		}
	}
}
