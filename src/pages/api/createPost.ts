import db from '@/modules/db'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    // Parse the incoming JSON body
    const data = req.body
    console.log(req.body)

    await db.contentItem.createMany({
      data: JSON.parse(data),
    })

    // Return the result
    res
      .status(201)
      .json({ message: 'Post created successfully', data: { data } })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
