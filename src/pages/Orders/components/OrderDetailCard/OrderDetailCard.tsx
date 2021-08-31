import React, { PropsWithChildren } from 'react';
import classes from './OrderDetailCard.module.scss';

export function OrderDetailContainer({ children }: PropsWithChildren<{}>) {
  return <div className={classes.container}>{children}</div>
}

export function OrderDetailCard({ props } : any) {
  return (
    <OrderDetailContainer>
      <div className={classes.detail}>
        <div className={classes.detail__header}>
          <h1>Olá, {props.name}</h1>
          <a href="/">SAIR</a>
        </div>

        <div className={classes.detail__order}>
          <h2>Número do pedido: {props.id}</h2>

          <div className={classes.detail__order_summary}>
            <h3>Resumo da compra</h3>
            {/* <p>{props.items[0].qty}x {props.items[0].name} {props.items[0].price}</p> */}

            <h4>Prazo de entrega de {props.freight?.from} a {props.freight?.to} dias</h4>
            <h4>Frete {props.freight?.price}</h4>
            <h4>Total {props.total}</h4>
          </div>
        </div>

        <div className={classes.detail__follow}>
          <h2>Acompanhe o seu pedido</h2>
          <div className={classes.detail__follow_progress}>
            <p>{props.status}</p>
          </div>
        </div>

        <div className={classes.detail__shipping}>
          <h3>Entregar em:</h3>
          <p>{props.address?.street}, {props.address?.number}</p>
          <p>{props.address?.city} - {props.address?.state}, {props.address?.postcode}</p>

          <h3>Forma de pagamento:</h3>
          <p>{props.payment_method}</p>
        </div>
      </div>
    </OrderDetailContainer>
  )
}
