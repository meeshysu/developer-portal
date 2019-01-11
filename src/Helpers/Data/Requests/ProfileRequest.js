import axios from 'axios';
// import { getUserName } from '../../../components/Auth/Auth';
// import apiKeys from '../apiKeys';

// const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getProfile = () => new Promise((resolve, reject) => {
  const user = getUserName();
  axios
    .get(`https://github.com/${user}`)
    .then((result) => {
      console.log(result.data);
      resolve(result.data);
    })
    .catch(err => reject(err));
});

export default {
  getProfile,
};
