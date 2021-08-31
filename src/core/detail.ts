import { API_URL } from '../env';

export interface OrderDetail {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    number: number;
    city: string;
    state: string;
    postcode: string;
  };

  total: string;
  status: string;
  payment_method: string;

  items: Array<Items>;

  freight: {
    price: string;
    from: number;
    to: number;
  };
  date: string;
}

interface Items {
  name: string;
  qty: number;
  price: string;
}

export async function getOrderDetail(): Promise<OrderDetail> {
  return fetch(`${API_URL}/170359.json`).then(res => res.json());
}
