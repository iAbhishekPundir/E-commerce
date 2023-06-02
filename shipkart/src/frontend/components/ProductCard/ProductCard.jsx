import { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { ProductDataContext } from "../../contexts/Data/ProductDataContext";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
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
      <Card sx={{ maxWidth: 200, margin:"1rem" }} key={id} elevation={3} >
        <CardActionArea>
          <NavLink style={{textDecoration:"none"}} to={`/productDetail/${id}`}>
          <div className="card-header image-container">
            {trending && <span className="trending">Trending</span>}
            <CardMedia component="img" height="140" image={image} alt={title}/>
            <div>
            <p class="prod-size">{size}</p>
            </div>
          </div>
          </NavLink>
            <CardContent id="card-content">
              <Typography gutterBottom variant="p" component="div" className="title-div">
                {title}
              </Typography>
              {state?.wishlist.some((product) => product.id === id) ? (
            <Button
              size="small"
              color="primary"
              id="wishlisted-btn"
              onClick={() => console.log("In wishlist")}
            >
              <Favorite />
            </Button>
          ) : (
            <Button
              size="small"
              color="secondary"
              id="wishlist-btn"
              onClick={() => dispatch({ type: "ADD_TO_WISHLIST", payload: id })}
            >
              <Favorite />
            </Button>
          )}
              <Typography gutterBottom variant="p" component="div" className="price-div">
               <span className="new-price">₹{price}</span>
               <span className="old-price">₹{ original_price}</span>
              </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
          {state?.cart.some((product) => product.id === id) ? (
            <NavLink to="/cart">
              <Button
                size="small"
                color="primary"
                variant="outlined"
                onClick={() => console.log("In cart")}
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
            >
              Add to cart
            </Button>
          )}
          
        </CardActions>
      </Card>
    </>
  );
};
