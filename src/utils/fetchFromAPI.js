import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';

const options = {
  url: BASE_URL,
  params: {
    q: 'music',
    part: 'snippet,id',
    regionCode: 'US',
    maxResults: '50',
    order: 'date'
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async () => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
}