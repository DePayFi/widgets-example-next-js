import { verify } from '@depay/js-verify-signature';

// ENTER YOUR PUBLIC KEY HERE, FORMAT: "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5P24ZAKJRkINGTroqKTD\nDLOIXtL1SK9uz6rTFjHBcQdD4zZIlrCIDqxvn1kUelbfR22iEj5RnoN1LRqil3zc\nQDWD03SLxEYHdrJ3zBwN9qJ9mBeEURdmcZOvVLoXug6yRapAqS457AXhAWsacX6j\n06cpN/wLazAZe31uZOb/3xphfe7+C+6NNFzZPi6a2Dt2eSOrRtK/JD6b04RomJKk\n21ptGCxG78kMZMv5m4qqMIP8slBxTzAiTCYNUXimNzAlI793aT2X2NOEaxAKhohT\nbSGJP2xJDvwB2ZuW+WkVPs5Q+uVo0imhlHpH/h7dP1J7JFZQY50HNjhutu3xY5Xm\niQIDAQAB\n-----END PUBLIC KEY-----"
// const publicKey =  undefined;
const publicKey = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5aTSTyOeUyf6cAPUwm6D\nTV228lL74W/EEcOThUQGxg7xvtSNZcN8F6//fpx88OCxNm+bnCK9bcx7ypw9Ubbg\nBAsZdAo5CNwAsUEVP6BUJONlizLJpkGslrsUlpJChF7Wa0bQYcGIG3qVgI+h64pr\ndEFf5Nj78xBuA4zuhGS+fRCySSsuOcdA/bd3/UOBc1uLoAwP++q8Pr+KsSIoEHhV\nqpmbqspbO6rCdIvHWnw6UwudQ5QckMdVYqkz37hR266MN1r3D8vkHDQxHwiJZ/Lq\n7Pxwwoxu+MaU/4q3RiGLsfcyHqEO8y/qic/9oaTBDhkv2n1NM3ljJ5sw8OLjhJDY\n/wIDAQAB\n-----END PUBLIC KEY-----\n"

export default async(req)=> {
  
  return await verify({
    signature: req.headers['x-signature'],
    data: JSON.stringify(req.body),
    publicKey,
  });  
}
