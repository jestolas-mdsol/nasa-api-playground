import express from 'express';
import axios from 'axios';

import { TestUsers } from '../models';

const router = express.Router();
const apiVersion = '/v1';

router.get('/', (req, res) => {
  console.log('in home api route');
  res.json({ message: 'response from the home route' });
});

router.post('/get-epic-image', (req, res) => {
  console.log('/get-epic-image route -- data: ', req.body);

  return axios.get(`https://epic.gsfc.nasa.gov/archive/enhanced/${req.body.formattedDate}/png/${req.body.fileName}.png`)
    .then((axiosResponse) => {
      console.log('request response: ', axiosResponse.data);
      res.json({ data: axiosResponse.data });
    })
    .catch(err => ({
      error: true,
      content: err,
    }));
});

export default router;
