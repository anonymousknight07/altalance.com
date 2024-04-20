import type { NextApiRequest,NextApiResponse } from "next";
import { groq } from "next-sanity";
import {sanityClient} from"../../sanity";
import {  Team } from "../../typings";

const query = groq`
    *[_type == "team"]
`;

type Data = {
    team: Team[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {

    const team: Team[] = await sanityClient.fetch(query);

    res.status(200).json({ team})
  }