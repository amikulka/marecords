import { NextApiRequest, NextApiResponse } from 'next'
import addAlbum from '../../utils/addAlbum'
import addTracks from '../../utils/addTracks'

import { connect } from '../../utils/dbConnect'
import removeAlbum from '../../utils/removeAlbum'
import removeTracks from '../../utils/removeTracks'
import { ResponseFuncs } from '../../utils/types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs

  const catcher = (error: Error) => res.status(400).json({ error })

  const handleCase: ResponseFuncs = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Album } = await connect() // connect to database
      res.json(await Album.find({}).catch(catcher))
    },
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      addAlbum(req.body)
        .then(() => {
          return addTracks(req.body.mbid)
        })
        .then(() => {
          res.json('Success')
        })
        .catch(catcher)
    },
    DELETE: async (req: NextApiRequest, res: NextApiResponse) => {
      const mbid = req.query.mbid as string
      removeAlbum(mbid)
        .then(() => {
          return removeTracks(mbid)
        })
        .then(() => {
          res.json('Successfully Removed')
        })
        .catch(catcher)
    },
  }

  const response = handleCase[method]
  if (response) {
    response(req, res)
  } else res.status(400).json({ error: 'No Response for This Request' })
}
