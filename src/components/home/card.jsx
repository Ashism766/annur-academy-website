import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import style from "./home.module.css";

const ImgMediaCard = (props) => {
  return (
    <div className={style.card}>
      <Card className={style.mainCard} sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="Card image"
          height="140"
          image={"./Interactive.jpg"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title || "Card Title"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.text ||
              "Card content text"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ImgMediaCard;
