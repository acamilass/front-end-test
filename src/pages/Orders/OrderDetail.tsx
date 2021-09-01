import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from "../../components/Container/Container";
import { API_URL } from '../../env';
import { OrderDetailCard } from './components/OrderDetailCard/OrderDetailCard';

export function OrderDetail() {
  const { id }: any = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    fetch(`${API_URL}/${id}.json`)
      .then(res => res.json())
      .then(order => setOrder(order))
  }, [])

  return (
    <Container>
      <OrderDetailCard props={order}/>
    </Container>
  )
}
