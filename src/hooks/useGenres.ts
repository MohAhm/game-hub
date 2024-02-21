import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ApiClient from "../services/api-client";
// When need types only during development not for production, 
// add -D to the install command
// npm install -D @types/ms
import ms from "ms";


const apiClient = new ApiClient<Genre>('/genres')

export interface Genre { 
  id: number
  name: string
  image_background: string
}

const useGenres = () => useQuery({
  queryKey: ["genres"],
  queryFn: apiClient.getAll,
  staleTime: ms('24h'),
  initialData: genres
})

export default useGenres