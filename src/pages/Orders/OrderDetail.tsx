import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Container } from "../../components/Container/Container";
import { getOrderDetail } from '../../core/detail';
import { OrderDetailCard } from './components/OrderDetailCard/OrderDetailCard';

export function OrderDetail() {
  const [order, setOrder] = useState({});
  const { data } = useQuery('details', getOrderDetail);

  useEffect(() => {
    if (data) {
      setOrder(data);
    }
  }, [data])

  return (
    <Container>
      <OrderDetailCard props={order}/>
    </Container>
  )
}
