import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
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

  res.status(200).json({
    message: "Details has been successfully Approved",
    data: {
      accomodationStatus,
      rentAmount,
      monthlyEarning,
      monthlyPlan,
      monthlyPayment,
    },
  });
}
