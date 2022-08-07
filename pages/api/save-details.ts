import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../utils/connectDB";
import PreApprovalRequest from "../../models/preApprovalRequest";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    accomodationStatus,
    rentAmount,
    monthlyEarning,
    monthlyPlan,
    monthlyPayment,
  } = req.body;

  if (
    !accomodationStatus ||
    !rentAmount ||
    !monthlyEarning ||
    !monthlyPlan ||
    !monthlyPayment
  ) {
    res.status(400).json({ error: "Some fields are missing" });
    return;
  }

  await connectDB();

  const request = await PreApprovalRequest.create(req.body);

  res.status(200).json({
    message: "Pre-Approval Request Saved",
    data: {
      _id: request._id,
      accomodationStatus,
      rentAmount,
      monthlyEarning,
      monthlyPlan,
      monthlyPayment,
    },
  });
}
