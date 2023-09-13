import axios from "axios";

function search(command) {
  return axios.post("http://localhost:5000/search", command);
}

function postDataRegister(command) {
  return axios.post("http://localhost:5000/register", command);
}

// function postDataLogin(command) {
//   return axios.post("http://localhost:5000/login", command);
// }

function postValidationEmail(userId, command) {
  return axios.post(`http://localhost:5000/validationEmail/${userId}`, command);
}

function userInfo(userId, command) {
  return axios.post(`http://localhost:5000/userInfo/${userId}`, command);
}

const post = {
  search,
  postDataRegister,
  // postDataLogin,
  postValidationEmail,
  userInfo,
};

export default post;
