export const config = {
  nodeEnv: process.env.NODE_ENV,

  /**
   * Passport stuff
   */
  passport: {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET
  },

  /**
   * Mongo connection URI
   */
  mongoURI: process.env.MONGO_URI,

  /**
   * Cookie key
   */
  cookieKey: process.env.COOKIE_KEY,

  /**
   * Domain
   */
  domain: process.env.DOMAIN,

  /**
   * Winston stuff
   */
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  /**
   * Feed
   */
  dataFeeds: {
    youtubeApikey: process.env.YOUTUBE_API_KEY,
    youtubeAccessToken: process.env.GOOGLE_CLIENT_ID
  }
}
