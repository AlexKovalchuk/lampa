export const INITIAL_STATE = {
  cartData: [
    {
      id: 1,
      title: 'Title-1',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzclPcXpALD_uI17yxf_vJ_sWqlVz88Za7lNAxq9N-NS-E2H2W&s',
      shortDescription: 'Short description One',
      price: 100,
      count: 1
    },
    {
      id: 2,
      title: 'Title-2',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzclPcXpALD_uI17yxf_vJ_sWqlVz88Za7lNAxq9N-NS-E2H2W&s',
      shortDescription: 'Short description One',
      price: 200,
      count: 1
    },
  ],
  totalPrice: 300,
};

export const PUT_ITEM_TO_CART = 'PUT_ITEM_TO_CART';
export const INCREASE_ITEM_COUNTER = 'INCREASE_ITEM_COUNTER';
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
