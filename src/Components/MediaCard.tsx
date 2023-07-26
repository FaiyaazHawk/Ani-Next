interface Proptypes {
  animeId: string;
  title: string;
  image: string;
}

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ animeId, title, image }: Proptypes) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardMedia
        sx={{ minHeight: 345, objectFit: "contain", padding: "1em 1em 0 1em" }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={animeId} size="small">
          Watch
        </Button>
      </CardActions>
    </Card>
  );
}
