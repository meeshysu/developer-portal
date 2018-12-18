import axios from 'axios';
// import apiKeys from '../apiKeys';


const getProfileFromGitHub = gitHubUser => new Promise((resolve, reject) => {
  axios.get('https://api.github.com/user/meeshysu')
    .then((res) => {
      console.log(res.data);
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    });
});

export default {
  getProfileFromGitHub,
};
