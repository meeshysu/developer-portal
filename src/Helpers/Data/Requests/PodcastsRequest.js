import axios from 'axios';
import apiKeys from '../../apiKeys';


const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getPodcastData = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/podcasts.json`)
    .then((res) => {
      const podcasts = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          podcasts.push(res.data[key]);
        });
      }
      resolve(podcasts);
    })
    .catch(error => reject(error));
});

const deletePodcast = podcastId => axios.delete(`${firebaseUrl}/podcasts/${podcastId}.json`);

export default {
  getPodcastData,
  deletePodcast,
};
