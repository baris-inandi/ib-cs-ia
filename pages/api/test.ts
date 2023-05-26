import { NextApiRequest, NextApiResponse } from "next";
import michael from "../../lib/libmichael/michael";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    res.status(200).json(michael("Do this that  shit   yes tomorrow"));
}
