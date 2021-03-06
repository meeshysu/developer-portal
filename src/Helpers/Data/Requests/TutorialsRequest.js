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

const deleteTutorial = tutorialId => axios.delete(`${firebaseUrl}/tutorials/${tutorialId}.json`);

const updateTutorial = (blogId, isCompleted) => axios.patch(`${firebaseUrl}/blogs/${blogId}.json`, { isCompleted });

const postTutorial = blog => axios.post(`${firebaseUrl}/blogs.json`, blog);

export default {
  getTutorialData,
  deleteTutorial,
  postTutorial,
  updateTutorial,
};
