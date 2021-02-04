import React from 'react'  
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'


function News ({article}) {

    const {
        NewsID,
        TimeAgo,
        Title,
        Content,
        URL,
        OriginalSourceUrl
    } = article


    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 140,
        },
      });

    const classes = useStyles();

  return (
      <div>
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="https://blog.logomyway.com/wp-content/uploads/2017/01/nba-logo-design.jpg"
            title={Title}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {Title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {Content}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Share
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
        </Card>
    </div>
  );

}


export default News