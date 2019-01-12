import axios from 'axios';
import apiKeys from '../../apiKeys';


const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getResourceData = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/resources.json`)
    .then((res) => {
      const resources = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          resources.push(res.data[key]);
        });
      }
      resolve(resources);
    })
    .catch(error => reject(error));
});

const deleteResource = resourceId => axios.delete(`${firebaseUrl}/resources/${resourceId}.json`);

const updateResource = (blogId, isCompleted) => axios.patch(`${firebaseUrl}/blogs/${blogId}.json`, { isCompleted });

const postResource = blog => axios.post(`${firebaseUrl}/blogs.json`, blog);

export default {
  getResourceData,
  deleteResource,
  updateResource,
  postResource,
};
