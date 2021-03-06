import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating}) {
        
    const [{ basket }, dispatch] = useStateValue();
    //console.log('This is the basket >>>', basket); 
        const addToBasket = () => {
            // Action dispatch item to the daat layer
            dispatch({
                type: 'ADD_TO_BASKET',  
                item: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating,
                },
            });
            };


    return (
        <div className='product'>
            <div className='product_info'>
                <p className='product_title'>{title}</p>
                <p className='product_price'>
                    <small> Rs </small>
                    <strong> {price} </strong>
                </p>
                <div className='product_rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                        <p> &#x1F31F; </p>
                        ))}
                    
                </div>
            </div>
                <img src={image} alt='no img'/>
                <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
