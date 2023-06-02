import { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { ProductDataContext } from "../../contexts/Data/ProductDataContext";
import { Favorite, Star, FavoriteBorderOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import "./ProductCard.css"

export const ProductCard = ({ product }) => {
  const { dispatch, state } = useContext(ProductDataContext);
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
  console.log(id);
  return (
    <>
      <Card sx={{ maxWidth: 200, margin:"1rem" }} key={id} elevation={2} id="card" >
        <CardActionArea >
          <NavLink style={{textDecoration:"none"}} to={`/productDetail/${id}`}>
          <div className="card-header image-container">
            {trending && <span className="trending">Trending</span>}
            <CardMedia component="img" height="140" image={image} alt={title}/>
            <div>
            <span class="prod-rating">{rating}</span>
            </div>
            <div>
            <p class="prod-size">{size}</p>
            </div>
          </div>
          </NavLink>
          </CardActionArea>
            <CardContent id="card-content">
            <Typography gutterBottom variant="p" component="div" id="title-align">
              <span  className="title-span">
                {title}
              </span>
              {state?.wishlist.some((product) => product.id === id) ? (
            <span
              id="wishlisted-btn"
              onClick={() => console.log("In wishlist")}
            >
              <Favorite />
            </span>
          ) : (
            <span
              id="wishlist-btn"
              onClick={() => dispatch({ type: "ADD_TO_WISHLIST", payload: id })}
            >
              <Favorite />
            </span>
          )}
          </Typography>
              
              <Typography gutterBottom variant="p" component="div" className="price-div">
               <span className="new-price">₹{price}</span>
               <span className="old-price">₹{ original_price}</span>
               <span className='product-card-discount'>
              {Math.floor(((original_price - price) / original_price) * 100)}%
              OFF
            </span>
              </Typography>
            </CardContent>
        
        <CardActions id="card-actions">
          {state?.cart.some((product) => product.id === id) ? (
            <NavLink to="/cart">
              <Button
                size="small"
                color="primary"
                variant="outlined"
                onClick={() => console.log("In cart")}
                id="btn-cart-added"
              >
                Go to Cart
              </Button>
            </NavLink>
          ) : (
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={() => dispatch({ type: "ADD_TO_CART", payload: id })}
              id="cart-btn"
            >
              Add to cart
            </Button>
          )}

          
        </CardActions>
      </Card>
    </>
  );
};
