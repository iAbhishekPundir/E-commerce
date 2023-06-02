import {useContext} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { ProductDataContext } from '../../contexts/Data/ProductDataContext';
import {FavoriteBorderOutlined} from "@mui/icons-material";
import { useParams } from 'react-router';

export const ProductDetail = () => {
  const { state, dispatch } = useContext(ProductDataContext);
  const {productId} = useParams();
  const filteredProduct = state?.products?.find(({id})=> id === productId);
  console.log(filteredProduct);
  const {
    id,
    trending,
    title,
    size,
    reviews,
    rating,
    price,
    original_price,
    in_stock,
    image,
    description,
    delivery_time,
    category,
  } = filteredProduct;

  return (
    <>
    <Card sx={{ maxWidth: 200, m: '0.5rem' }} key={id}>
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
      onClick={()=> dispatch({ type: "ADD_TO_CART", payload: id }) } >
        Add to cart
      </Button>
      <Button size="small" color="primary" variant="outlined" 
      onClick={()=> dispatch({ type: "ADD_TO_WISHLIST", payload: id }) } >
        <FavoriteBorderOutlined />
      </Button>
    </CardActions>
  </Card>
  Product Detail
  </>
  )
}
