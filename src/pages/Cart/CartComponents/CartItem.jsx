import React from 'react';
import {Button} from 'react-bootstrap';
import './CartItem.scss';

export const CartItem = props => {
  const {item, handler} = props;
  const {id, title, price, img, shortDescription, count} = item;

  const onClickHandler = isIncrease => {
    let newCount = isIncrease ? count + 1 : count - 1;
    handler(id, newCount);
  };

  return (
    <div className='cart-item-container'>
      <div className='cart-item-img-container'>
        <img className='cart-item-img' src={img} alt='React'/>
      </div>

      <div className='cart-item-description-container'>
        <div>
          {title}
        </div>
        <div>
          {shortDescription}
        </div>
        <div>
          Price: {price}$
        </div>
      </div>

      <div className='cart-item-change-amount-container'>
        <Button onClick={() => onClickHandler(false)} variant="light">
          <span>-</span>
        </Button>
        <span className='item-count-value'>{count}</span>
        <Button onClick={() => onClickHandler(true)} variant="light">
          <span>+</span>
        </Button>
      </div>
    </div>
  )
};
