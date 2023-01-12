import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const headers = {
  Accept: 'application/json',
  'User-Agent': 'MBRecords/0.1.0 (mikujen@yahoo.com)',
}

interface disk {
  tracks: any
}

function getAlbumArt(mbid: string) {
  let endpoint = `http://coverartarchive.org/release/${mbid}`
  return axios({
    method: 'get',
    url: endpoint,
    headers: headers,
  }).then((results) => {
    for (let index = 0; index < results.data.images.length; index++) {
      const image = results.data.images[index]
      if (image.front && image.approved) {
        return image.image
      }
    }
  })
}
type Data = String

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const mbid = req.query.mbid as string
  getAlbumArt(mbid)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      console.log(err)
      res.status(400).send(err)
    })
}
