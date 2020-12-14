import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    {
      baseURL:'https://empdirr-default-rtdb.firebaseio.com/'
    }
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};
