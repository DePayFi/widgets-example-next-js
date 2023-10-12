import verifyRequest from "../../../api/depay/verifyRequest"
import signResponse from "../../../api/depay/signResponse"

export default async(req, res)=> {
  
  if(!await verifyRequest(req)){
    return res.status(401).json({ error: "UNAUTHORIZED" });
  }

  const price = 1.00;

  const configuration = {
    accept: [
      { blockchain: 'ethereum', token: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', amount: price*req.body.quantity }
    ]
  };

  // If you need to dynamically set a redirect location after a successfull payment, set forward_to
  //
  // configuration.forward_to = "https://mydomain.com/payment/confirmation/SOMEID"
  //

  res.setHeader('x-signature', signResponse(JSON.stringify(configuration)));
  res.status(200).json(configuration);
}
