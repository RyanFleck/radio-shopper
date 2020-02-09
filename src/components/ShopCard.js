import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import messaging from "../Messaging";

import Paho from "paho-mqtt";

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

var itemDesc = "Apple"
var storeName = ""

function requestShopperAtStore() {
  let message = new Paho.Message(JSON.stringify({ text: itemDesc }));
  message.destinationName = "debug";
  messaging.send(message);
}

export default function ShopCard(props) {
  const classes = useStyles();
  storeName = props.title;

  return (
    <React.Fragment>

      <Grid item key={props.card} xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image="https://source.unsplash.com/random"
            title={props.title ? props.title : "Store Name"}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title ? props.title : "Store Name"}
            </Typography>
            <Typography>
              {props.content ? props.content : "This is a store supported by Shop N' Buy. Enjoy shopping here."}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={requestShopperAtStore} size="small" key="0" color="primary">
              Enter
                      </Button>
            <Button onClick={requestShopperAtStore} size="small" key="1" color="primary">
              Add favourite
                      </Button>
          </CardActions>
        </Card>
      </Grid>

    </React.Fragment>
  );
}