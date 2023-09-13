import axios from "axios";

function userInfo(userId) {
  return axios.get(`http://localhost:5000/userInfo/${userId}`);
}

function userInfoSearch(idUser, userId) {
  return axios.get(`http://localhost:5000/userInfo/${idUser}/${userId}`);
}

function comments(postId, userId) {
  return axios.get(`http://localhost:5000/detailPost/${postId}/${userId}`);
}

function userInfoSetting(userId) {
  return axios.get(`http://localhost:5000/settings/${userId}`);
}

function checkSession(userId) {
  return axios.get(`http://localhost:5000/session/${userId}`);
}

const get = {
  userInfo,
  userInfoSearch,
  comments,
  userInfoSetting,
  checkSession,
};

export default get;
