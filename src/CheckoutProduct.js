import React from 'react';
import './CheckoutProduct.css'
import {useStateValue} from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating}) {
    const [  { basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,

        })
    }

    return (
        <div className="checkoutProduct">
            <img className='checkoutProduct_image' src={image} alt=''/>
            
            <div className="checkoutProduct_info">
                <p className='checkoutProduct_title'>
                    {title}
                </p>
                <p className='checkoutProduct_price'>
                    <small> Rs <strong> {price}</strong></small>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) =>(
                    // .map((_,i) =>(
                        <p> &#x1F31F; </p>
                    ))}

                </div>
                <button onClick={removeFromBasket}> Remove From Basket</button>
            </div>
        </div>

    )
}

export default CheckoutProduct
