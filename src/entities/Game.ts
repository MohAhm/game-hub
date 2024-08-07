import Developer from "./Developer";
import Genre from "./Genre";
import Platform from "./Platform";


export default interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[]
  developers: Developer[]
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
}
