import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {status, monthly, request, plan} = req.body;
  const monthlyPayment = request/parseInt(plan.split(' ')[0]) +  request * 0.02;

  if(!status|| !monthly || !request || !plan) {
     res.status(400).json({error: 'Some fields are missing'});
     return; 
  }

  res.status(200).json({
    message: 'Details was sent for pre-Approval',
    data: {
      accomodationStatus: status,
      rentAmount: request,
      monthlyEarning: monthly,
      monthlyPlan: plan,
      monthlyPayment,
    }

  });
}
