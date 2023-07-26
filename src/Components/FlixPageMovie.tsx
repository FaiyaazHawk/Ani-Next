import React from "react";
import InfoHeader from "./InfoHeader";
import FlixEpisodes from "./FlixEpisodes";
import { useParams } from "react-router-dom";
import axios from "axios";

const FlixPageMovie = () => {
  interface dataTypes {
    title: string;
    description: string;
    episodes: Object[];
    image: string;
  }

  const [movieInfo, setMovieInfo] = React.useState<dataTypes[] | any>([]);

  //getting the id from the params
  let params = useParams();

  let INFOPAGE_STRING = `https://api.consumet.org/movies/flixhq/info?id=movie/${params.id}
  `;

  const fetchInfodata = async () => {
    await axios
      .get(INFOPAGE_STRING)
      .then((response) => {
        setMovieInfo(response.data);
      })
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    fetchInfodata();
  }, []);

  return (
    <div className="infopage-body">
      <InfoHeader
        title={movieInfo.title}
        description={movieInfo.description}
        image={movieInfo.image}
      />
      <FlixEpisodes episodes={movieInfo.episodes} />
    </div>
  );
};

export default FlixPageMovie;
