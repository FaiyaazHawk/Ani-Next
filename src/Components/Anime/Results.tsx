import React, { FC } from "react";
import MediaCard from "../Common/MediaCard";
import { Grid } from "@mui/material";

interface Props {
  results: any[];
}
const Results: FC<Props> = ({ results }) => {
  const resultElements = results.map((result) => {
    return (
      <MediaCard
        key={result.id}
        animeId={result.id}
        title={result.title}
        image={result.image}
      />
    );
  });

  return (
    <Grid container padding={2} gap={2} spacing={1} justifyContent={"center"}>
      {resultElements}
    </Grid>
  );
};

export default Results;
