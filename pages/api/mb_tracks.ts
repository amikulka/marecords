import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const headers = {
  Accept: "application/json",
  "User-Agent": "MBRecords/0.1.0 (mikujen@yahoo.com)",
};

interface disk {
  tracks: any;
}

function getTracks(mbid: string) {
  let endpoint = `http://musicbrainz.org/ws/2/release/${mbid}`;
  return axios({
    method: "get",
    url: endpoint,
    headers: headers,
    params: {
      inc: "recordings",
    },
  }).then((results) => {
    return results.data.media.map((disk: disk) => {
      return disk.tracks.map((track: any) => {
        return {
          title: track.title,
          position: track.position,
          length: track.length,
          track_number: track.number,
        };
      });
    });
  });
}
type Data = {
  title: String;
  position: Number;
  length: Number;
  track_number: String;
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[][]>
) {
  const mbid = req.body.mbid;
  getTracks(mbid)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
}
