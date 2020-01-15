import React, { useEffect } from 'react';
import { connect } from "react-redux";

const GoodsComponent = props => {
  const { form } = props;
  useEffect(() => {
    console.log('form', form);
  });

  return (
    <div className='lampa-page-container'>
      <h1>GOODS</h1>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    form: state.form
  };
};

const mapDispatchToProps = {};

export const Goods = connect(mapStateToProps, mapDispatchToProps)(GoodsComponent);
