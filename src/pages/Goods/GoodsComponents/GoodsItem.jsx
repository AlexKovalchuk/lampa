import React from 'react';
import {Card, Button} from 'react-bootstrap'
import './GoodsItem.scss';

export const GoodsItem = props => {
  const {item, handler} = props;
  const { id, title, price, img, shortDescription } = item;

  const onClickHandler = () => {
    handler(id);
  };

  return (
      <Card>
        <Card.Img className='card-item-img' variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {shortDescription}
          </Card.Text>
          <Card.Text className='card-item-price-container'>
            Price: <span className='card-item-price-value'>{price}$</span>
          </Card.Text>
          <div className='card-button-container'>
            <Button className='card-button' onClick={onClickHandler} variant="primary">Buy</Button>
          </div>
        </Card.Body>
      </Card>
  )
};
