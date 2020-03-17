import axios from "axios";

// Build a module that "creates" a new "instance" of the axios object
// - baseURL
// - headers object -> authorization header with the token

/*to display data w/o login authentication */

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    // baseURL: "http://localhost:5000/api",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};

export default axiosWithAuth;