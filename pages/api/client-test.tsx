import { NextApiRequest, NextApiResponse } from 'next';
import client from '@libs/server/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.user.create({
    data: { email: 'hi', name: 'hi' },
  });
  res.status(200).end();
}
