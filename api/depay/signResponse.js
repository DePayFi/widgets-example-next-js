import { Buffer } from "node:buffer";
import crypto from 'node:crypto';

// MAKE SURE YOU PROVIDE YOUR PROVIDE KEY!
// Used to sign & authenticate communication from your integration to DePay APIs
// Create and provide as documented here: https://depay.com/docs/payments/integrate/widget#create-privatepublic-key
const privateKey = process.env.MY_PRIVATE_KEY ? crypto.createPrivateKey(process.env.MY_PRIVATE_KEY.replace(/\\n/g, '\n')) : undefined;

export default (responseDataAsString)=> {

  const signature = crypto.sign('sha256', Buffer.from(responseDataAsString), {
    key: privateKey,
    padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
    saltLength: 64,
  });

  const urlSafeBase64Signature = signature.toString('base64')
    .replace('+', '-')
    .replace('/', '_')
    .replace(/=+$/, '');

  return urlSafeBase64Signature;
  
}
