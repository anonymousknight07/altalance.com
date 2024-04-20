import type { NextApiRequest,NextApiResponse } from "next";
import { groq } from "next-sanity";
import {sanityClient} from"../../sanity";
import {  Services} from "../../typings";

const query = groq`
    *[_type == "services"]
`;

type Data = {
    service: Services[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {

    const service: Services[] = await sanityClient.fetch(query);

    res.status(200).json({ service})
  }