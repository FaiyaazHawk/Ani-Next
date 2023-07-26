import React from "react";
import MediaCard from "./MediaCard";
import axios from "axios";
import { Grid } from "@mui/material";

const Cards = () => {
  const [topTen, setTopTen] = React.useState<any[]>([]);

  //fetch top 10 results from top-airing
  const fetchMostPopular = async () => {
    await axios
      .get("https://c.delusionz.xyz/anime/gogoanime/top-airing")
      .then((response) => {
        let array = Object.values(response.data.results);
        setTopTen(array);
      })
      .catch((error) => console.log(error));
  };

  interface animeTypes {
    id: string;
    title: string;
    image: string;
  }

  const cardElements = topTen.map((anime: animeTypes) => {
    return (
      <MediaCard
        key={anime.id}
        animeId={anime.id}
        title={anime.title}
        image={anime.image}
      />
    );
  });

  React.useEffect(() => {
    void fetchMostPopular();
  }, []);

  return (
    <Grid container padding={2} gap={2} spacing={1} justifyContent={"center"}>
      {cardElements}
    </Grid>
  );
};

export default Cards;
