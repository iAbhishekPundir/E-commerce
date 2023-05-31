import {useContext} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { ProductDataContext } from '../../contexts/Data/ProductDataContext';

export const ProductCard = ({ product }) => {
  const {
    _id,
    trending,
    title,
    size,
    reviews,
    rating,
    price,
    original_price,
    in_stock,
    image,
    id,
    description,
    delivery_time,
    category,
  } = product;
  const { dispatch } = useContext(ProductDataContext);
  return (
    <>
     <Card sx={{ maxWidth: 200 }} key={id}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           $ {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="outlined" 
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
    </>
  );
};
