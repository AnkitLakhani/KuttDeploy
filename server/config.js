module.exports = {
  PORT: process.env.PORT,

  /* The domain that this website is on */
  DEFAULT_DOMAIN: 'http://kuttpractice-env-1.xg4g9mtpu7.us-east-2.elasticbeanstalk.com/',

  /* Neo4j database credential details */
  DB_URI: 'bolt://hobby-hljjgcdlapbogbkekgjfppcl.dbs.graphenedb.com:24787',
  DB_USERNAME: 'ankitlakhani',
  DB_PASSWORD: 'b.6OXWz3vP4drO.FhYvVF7uhjsTPkNI',

  /* Redis host and port */
  REDIS_HOST: 'redis-10512.c98.us-east-1-4.ec2.cloud.redislabs.com',
  REDIS_PORT: 10512,
  REDIS_PASSWORD: 'qi9Vjk3rGycH66jqErC477VpqYjlfpDJ',

  /* The daily limit for each user */
  USER_LIMIT_PER_DAY: 50,

  /* A passphrase to encrypt JWT. Use a long and secure key. */
  JWT_SECRET: 'ankit',

  /*
    Admin emails so they can access admin actions on settings page
    Array of strings
  */
  ADMIN_EMAILS: [`ankitlakhani52@gmail.com`],
  /*
    Invisible reCaptcha secret key
    Create one in https://www.google.com/recaptcha/intro/
  */
  RECAPTCHA_SECRET_KEY: '6LeCQJoUAAAAAN0auP7lB_r1-IWaoCWyr97wHnND',

  /* 
    Google Cloud API to prevent from users from submitting malware URLs.
    Get it from https://developers.google.com/safe-browsing/v4/get-started
  */
  GOOGLE_SAFE_BROWSING_KEY: 'AIzaSyBNAvH6YeCWs9w0OuJH3qn8bsE9ssPH6EA',

  /* 
    Google Analytics tracking ID for universal analytics.
    Example: UA-XXXX-XX
  */
  GOOGLE_ANALYTICS: 'UA-136764701-1',

  /*
    Your email host details to use to send verification emails.
    More info on http://nodemailer.com/
  */
  MAIL_HOST: 'smtp.zoho.eu',
  MAIL_PORT: '',
  MAIL_SECURE: false,
  MAIL_USER: 'JekitLakhani',
  MAIL_FROM: '', // Example: "Kutt <support@kutt.it>". Leave empty to use MAIL_USER
  MAIL_PASSWORD: '@Ankit0768',

  /*
    The email address that will receive submitted reports.
  */
  REPORT_MAIL: 'ankitlakhani52@gmail.com',
};
