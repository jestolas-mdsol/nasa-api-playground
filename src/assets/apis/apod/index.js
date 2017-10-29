import axios from 'axios';

const API_KEY = process.env.API_KEY;

const getAPOD = () => {
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
};

export  {
  getAPOD,
}
