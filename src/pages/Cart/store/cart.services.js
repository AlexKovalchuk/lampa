import {fireBaseApi} from '../../../components/Firebase/firebase';

export const sendOrderToFB = order => fireBaseApi.database().ref('orders').push(JSON.stringify(order));