import twilio from 'twilio';
import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { prisma } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if (!user)
    return res.status(400).json({
      ok: false,
    });
  const payload = Math.floor(100000 + Math.random() * 900000) + '';
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: 'Anonymous',
            ...user,
          },
        },
      },
    },
  });
  if (phone) {
    const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      to: process.env.PHONE!, //phone,
      body: `Your login token is ${payload}`,
    });
    console.log(message);
  }

  /*
  if (email) {
    user = await client.user.findUnique({
      where: {
        email,
      },
    });
    if (user) {
      console.log('found it');
    }
    if (!user) {
      console.log('Dis not find. WIll Create.');
      user = await client.user.create({
        data: {
          name: 'Anonymous',
          email,
        },
      });
    }
    console.log(user);
  }
  if (phone) {
    user = await client.user.findUnique({
      where: {
        phone: +phone,
      },
    });
    if (user) {
      console.log('found it');
    }
    if (!user) {
      console.log('Dis not find. WIll Create.');
      user = await client.user.create({
        data: {
          name: 'Anonymous',
          phone: +phone,
        },
      });
    }
    console.log(user);
  }
  */
  return res.json({
    ok: true,
  });
}

export default withHandler('POST', handler);
