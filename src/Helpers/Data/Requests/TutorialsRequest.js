import axios from 'axios';
import apiKeys from '../../apiKeys';


const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getTutorialData = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/tutorials.json`)
    .then((res) => {
      const tutorials = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          tutorials.push(res.data[key]);
        });
      }
      resolve(tutorials);
    })
    .catch(error => reject(error));
});

export default {
  getTutorialData,
};
