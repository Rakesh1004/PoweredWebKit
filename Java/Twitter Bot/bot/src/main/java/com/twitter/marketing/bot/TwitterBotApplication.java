package com.twitter.marketing.bot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class TwitterBotApplication {

	public static void main(String[] args) {
		SpringApplication.run(TwitterBotApplication.class, args);
	}
}
