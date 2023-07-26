import React from "react";
import InfoHeader from "./InfoHeader";
import FlixEpisodes from "./FlixEpisodes";
import { useParams } from "react-router-dom";
import axios from "axios";

const FlixPageTV = () => {
  interface dataTypes {
    title: string;
    description: string;
    episodes: Object[];
    image: string;
  }

  const [tvInfo, setTvInfo] = React.useState<dataTypes[] | any>([]);

  //getting the id from the params
  let params = useParams();

  let INFOPAGE_STRING = `https://api.consumet.org/movies/flixhq/info?id=tv/${params.id}
  `;

  const fetchInfodata = async () => {
    await axios
      .get(INFOPAGE_STRING)
      .then((response) => {
        setTvInfo(response.data);
      })
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    fetchInfodata();
  }, []);

  return (
    <div className="infopage-body">
      <InfoHeader
        title={tvInfo.title}
        description={tvInfo.description}
        image={tvInfo.image}
      />
      <FlixEpisodes episodes={tvInfo.episodes} />
    </div>
  );
};

export default FlixPageTV;
