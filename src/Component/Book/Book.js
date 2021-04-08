import React from 'react';
import './Book.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

const Book = (props) => {
    const { bookName, price, imageURL, authorName, _id } = props.book;
    const classes = useStyles();

    const history = useHistory()
    const handleBuyNow = (_id) => {
        history.push(`/book/${_id}`);
    }

    return (
        <div className="col-md-4 col-sm-12 mt-5">
            <Card className={classes.root} id="cardStyle">
                <CardActionArea>
                    <CardMedia id="cardMedia"
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={imageURL}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h5">
                            {bookName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {authorName}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <h4><span>$</span>{price}</h4>
                    <Button onClick={()=>handleBuyNow(_id)} style={{width:'100px', marginLeft: '40%'}} variant="contained" size="small" color="secondary">
                        Buy Now
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Book;