import axios, { Axios, AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number
  next: string | null
  results: T[]
}

const axiosInstance =  axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'e04567fa71d44f23ab6901f8d374975a'
  }
})

class ApiClient<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((response) => response.data)
  }

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((response) => response.data)  
  }
}

export default ApiClient