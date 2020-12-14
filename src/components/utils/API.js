import axios from "axios";

export default axios.create(
  {
    baseURL:'https://empdirr-default-rtdb.firebaseio.com/'
  }
)


export default {
  // Gets all users
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};
