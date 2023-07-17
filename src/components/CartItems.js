
import { useStateValue } from "./StateProvider"
import './CartItems.css'

function CartItems() {
    const [{ basket }] = useStateValue();

    const sum = basket.reduce((amount, item) => {
        return amount + item.price;
    }, 0);

    return (
        <div className='ShoppingList'>

            {
                basket.length === 0 ?
                    <h3>Your are cart is empty</h3> :
                    <h3>Shopping Cart</h3>

            }
            <hr />
            {basket.map(st => (

                <div key={st.id}>
                    <Product item={st} />
                    <hr />
                </div>))}
                <h5 style={{float: "right"}}>Subtotal({basket.length} items):  {sum}</h5>
        </div>

    )
}



function Product({ item }) {

    const [{basket}, dispatch] = useStateValue();

    const deleteItem = () =>{
        dispatch({
            type: 'DELETE_FROM_BASKET',
            id: item.id
        })
    }

    return (
        <div className="itemInCart">
            <div style={{ display: "flex", alignItems: "center" }}>
                <img src={item.image} alt="..." />
            </div>
            <div className="productDesc">
                <h5>{item.name}</h5>

                <div class="cartOptions">
                    <h5><strong>₹  {item.price}</strong></h5>
                    <p>Reviews  {item.rating}</p>


                    <div className="options" style={{ display: "flex" }}>
                        <div></div>
                        <div style={{ display: "flex" }}>
                            <p className="hovering" onClick={deleteItem}><small>Delete</small></p>
                            <p>|</p>
                            <p className="hovering"><small>Save for later</small></p>
                            <p>|</p>
                            <p className="hovering"><small>See more like this</small></p>
                            <p>|</p>
                            <p className="hovering"> <small>Share</small></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}
export default CartItems