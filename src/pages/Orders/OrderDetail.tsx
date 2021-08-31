import React from 'react';
import { useQuery } from 'react-query';
import { Container } from "../../components/Container/Container";
import { getOrderDetail } from '../../core/detail';
import { OrderDetailCard } from './components/OrderDetailCard/OrderDetailCard';

export function OrderDetail() {
  const { data } = useQuery('details', getOrderDetail)
  return (
    <Container>
      <OrderDetailCard orderDetail={data}/>
    </Container>
  )
}
