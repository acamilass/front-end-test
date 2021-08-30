import React from 'react';
import { Card } from "../../../../components/Card/Card";
import classes from './OrderDetailCard.module.scss';

export function OrderDetailCard() {
  return (
    <Card>
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
      </div>
    </Card>
  )
}
