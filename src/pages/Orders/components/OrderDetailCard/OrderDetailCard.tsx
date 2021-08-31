import React, { PropsWithChildren } from 'react';
import classes from './OrderDetailCard.module.scss';

export function OrderDetailContainer({ children }: PropsWithChildren<{}>) {
  return <div className={classes.container}>{children}</div>
}

export function OrderDetailCard({ orderDetail }: any) {
  return (
    <OrderDetailContainer>
      <div className={classes.detail}>

        <div className={classes.detail__header}>
          <h1>Olá, fulano</h1>
          <a href="/">SAIR</a>
        </div>

        <div className={classes.detail__order}>
          <h2>Número do pedido: 12345678</h2>

          <div className={classes.detail__order_summary}>
            RESUMO DA COMPRA
          </div>
        </div>

        <div className={classes.detail__follow}>
          <h2>Acompanhe o seu pedido</h2>
          <div className={classes.detail__follow_progress}>

          </div>
        </div>

        <div className={classes.detail__shipping}>
          <h3>Entregar em:</h3>
        </div>
      </div>
    </OrderDetailContainer>
  )
}
