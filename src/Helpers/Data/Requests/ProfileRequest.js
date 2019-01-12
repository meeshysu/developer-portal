import axios from 'axios';
// import { getUserName } from '../../../components/Auth/Auth';
// import apiKeys from '../apiKeys';

// const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getProfile = () => new Promise((resolve, reject) => {
  axios
    .get('https://github.com/meeshysu')
    .then((result) => {
      console.log(result.data);
      resolve(result.data);
    })
    .catch(err => reject(err));
});

export default {
  getProfile,
};
