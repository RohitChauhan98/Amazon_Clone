import './ProductCard.css'
import { useStateValue } from './StateProvider';


function ProductCard(props) {
    const stars = [];

    for (let i = 0; i < props.star; i++) {
        stars.push(<span key={i}>⭐</span>);
    }

    const [ ,dispatch] = useStateValue();
    
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id: id++,
                name: props.name,
                image: props.images,
                rating: props.ratings,
                price: props.price
            },

        });
    }

    return (
        <div className='ProductCard'>
            <img src={props.images} alt="..." style={{ maxHeight: "250px", maxWidth: "300px", display: 'block', margin: '0 auto' }} />

            <div className='ProductDetail' >
                <p ><strong>{props.name}</strong></p>
                <div style={{ display: "flex", margin: "5px", justifyContent: "center" }}>{stars} <p style={{ marginLeft: "10px" }}>{props.ratings}</p></div>
                <div style={{display: "flex", justifyContent: "center"}}><h6>₹  {props.price}</h6></div>
                <p>Get it by Monday, July 17, FREE Delivery</p>
                <button className='addToCart' onClick={addToBasket}>Add to Cart</button>
            </div>
        </div>
    )
}

let id = 0;

export default ProductCard