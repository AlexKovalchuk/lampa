import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {GoodsItem} from "./GoodsComponents/GoodsItem";
import {addItemToCard} from '../Cart/store/cart.actions';
import './Goods.scss';
import './store/greeter';

const GoodsComponent = props => {
  const {goods, addItemToCard, cart} = props;
  useEffect(() => {

  });

  const buyItemHandler = id => {
    const {goodsList} = goods;
    const item = goodsList.find(item => item.id === id);
    const itemForCart = cart.cartData.find(item => item.id === id);
    if (!itemForCart) addItemToCard(item)
  };

  const renderGoodsItems = () => {
    const {goodsList} = goods;
    return goodsList.map((item, index) => {
      return (
        <div key={`goods-item-key-${index}`} className='goods-item__container'>
          <GoodsItem item={item} handler={buyItemHandler}/>
        </div>
      )
    })
  };
  console.log('Goods RENDER')
  return (
    <div className='goods-page__container'>
      <h1 className='goods-page__title'>GOODS</h1>
      <div className='goods-page__goods-container'>
        {renderGoodsItems()}
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  const {goods, cart} = state;
  return {
    goods,
    cart,
  };
};

const mapDispatchToProps = {
  addItemToCard,
};

export const Goods = connect(mapStateToProps, mapDispatchToProps)(GoodsComponent);
export default Goods;