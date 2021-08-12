export default {
  port: 5000,
  host: 'localhost',
  dbUri: 'mongodb://localhost:27017/rest-api',
  saltWorkFactor: 15,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
	your rsa key goes here
-----END RSA PRIVATE KEY-----`,
}