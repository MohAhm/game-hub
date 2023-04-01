import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'e04567fa71d44f23ab6901f8d374975a'
  }
})