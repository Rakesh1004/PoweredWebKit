package com.twitter.marketing.bot.component;

import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;
import org.springframework.util.MultiValueMap;
import org.springframework.web.util.UriUtils;

import com.twitter.joauth.Normalizer;
import com.twitter.joauth.OAuthParams;
import com.twitter.joauth.Request;
import com.twitter.joauth.Request.Pair;
import com.twitter.joauth.Signer;

@Component
public class TwitterOAuth1 {

	public static final String OAUTH = "OAuth ";
	public static final String TOKEN = "oauth_token";
	public static final String CONSUMER_KEY = "oauth_consumer_key";
	public static final String SIGNATURE = "oauth_signature";
	public static final String NONCE = "oauth_nonce";
	public static final String TIMESTAMP = "oauth_timestamp";
	public static final String SIGNATURE_METHOD = "oauth_signature_method";
	public static final String VERSION = "oauth_version";
	public static final String HMAC_SHA1 = "HMAC-SHA1";
	public static final String VERSION_VALUE = "1.0";

	@Value("${CONSUMER_KEY}")
	private String consumerKey;
	@Value("${CONSUMER_SECRET}")
	private String consumerSecret;
	@Value("${TOKEN}")
	private String token;
	@Value("${TOKEN_SECRET}")
	private String tokenSecret;
	
	private final Normalizer normalizer;
	private final Signer signer;
	private final SecureRandom secureRandom;

	@Autowired
	public TwitterOAuth1() {
		this.normalizer = Normalizer.getStandardNormalizer();
		this.signer = Signer.getStandardSigner();
		this.secureRandom = new SecureRandom();
	}

	public String generateOauth1Header(URI requestUri, HttpMethod httpMethod, 
			MultiValueMap<String, String> bodyParams) {
		List<Request.Pair> requestParams = new ArrayList<Pair>(bodyParams.size());
		for (Entry<String, List<String>> entry : bodyParams.entrySet()) {
			for (String val : entry.getValue()) {
				requestParams.add(new Request.Pair(encodeURL(entry.getKey()), encodeURL(val)));
			}
		}

		long currentTimestamp = this.generateCurrentTimestamp();
		
		String nonce = this.generateNonce();
		OAuthParams.OAuth1Params oAuth1Params = new OAuthParams.OAuth1Params(this.token,
				this.consumerKey,
				nonce,
				Long.valueOf(currentTimestamp),
				Long.toString(currentTimestamp),
				"",
				HMAC_SHA1,
				VERSION_VALUE);

		int port = 443;

		String normalizer = this.normalizer.normalize(requestUri.getScheme(),
				requestUri.getHost(),
				port,
				httpMethod.name().toUpperCase(),
				requestUri.getPath(),
				requestParams,
				oAuth1Params);

		String signature;
		
		try {
			signature = this.signer.getString(normalizer, this.tokenSecret, this.consumerSecret);
		} catch (Exception invalidKeyEx) {
			throw new RuntimeException(invalidKeyEx);
		}

		Map<String, String> headers = new HashMap<String, String>();
		headers.put(CONSUMER_KEY, this.quoteString(this.consumerKey));
		headers.put(TOKEN, this.quoteString(this.token));
		headers.put(SIGNATURE, this.quoteString(signature));
		headers.put(SIGNATURE_METHOD, this.quoteString(HMAC_SHA1));
		headers.put(TIMESTAMP, this.quoteString(Long.toString(currentTimestamp)));
		headers.put(NONCE, this.quoteString(nonce));
		headers.put(VERSION, this.quoteString(VERSION_VALUE));

		return OAUTH + headers.entrySet().stream().map(Map.Entry::toString).collect(Collectors.joining(", "));
	}

	private String quoteString(String str) {
		return "\"" + str + "\"";
	}

	private long generateCurrentTimestamp() {
		return System.currentTimeMillis() / 1000L;
	}

	private String generateNonce() {
		return Long.toString(Math.abs(this.secureRandom.nextLong())) + System.currentTimeMillis();
	}

	public String encodeURL(String source) {
		return UriUtils.encode(source, StandardCharsets.UTF_8);
	}
}
