import axios from "axios";

export default axios.create(
  {
    baseURL:'https://empdirr-default-rtdb.firebaseio.com/'
  }
)