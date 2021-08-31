import React, { PropsWithChildren } from 'react';
import { toCurrency } from '../../../../core/number';
import classes from './OrderDetailCard.module.scss';

export function OrderDetailContainer({ children }: PropsWithChildren<{}>) {
  return <div className={classes.container}>{children}</div>
}

export function OrderDetailCard({ props }: any) {

  function isSelectedIcon(status: string) {
    return props.status === status
    ? `${classes.selected_icon} ${classes.status__icon}`
    : `${classes.status__icon}`
  }

  function isSelectedTitle(status: string) {
    return props.status === status
    ? `${classes.selected} ${classes.status__title}`
    : `${classes.status__title}`
  }

  return (
    <OrderDetailContainer>
      <div className={classes.detail}>
        <div className={classes.detail__header}>
          <h1>Olá, {props.name}!</h1>
          <a href="/">SAIR</a>
        </div>

        <div className={classes.detail__order}>
          <h2>Número do pedido: {props.id}</h2>

          <div className={classes.detail__order_summary}>
            <h3>Resumo da compra</h3>
            {/* <p>{props.items[0].qty}x {props.items[0].name} {props.items[0].price}</p> */}
          </div>

          <div className={classes.detail__order_infos}>
            <div className={classes.infos}>
              <p>Prazo de entrega</p>
              <p>de {props.freight?.from} a {props.freight?.to} dias</p>
            </div>

            <div className={classes.infos}>
              <p>Frete</p>
              <p>{toCurrency(props.freight?.price)}</p>
            </div>

            <div className={classes.infos}>
              <p>Total</p>
              <p>{toCurrency(props.total)}</p>
            </div>
          </div>
        </div>

        <div className={classes.detail__follow}>
          <h2>Acompanhe o seu pedido</h2>
          <div className={classes.detail__follow_progress}>
            {/* <p>{props.status}</p> */}
            <div className={classes.status}>
              <div className={isSelectedIcon('Aguardando pagamento')}>

              </div>
              <span className={isSelectedTitle('Aguardando pagamento')}>
                Aguardando pagamento
              </span>
            </div>

            <div className={classes.status}>
              <div className={isSelectedIcon('Pagamento aprovado')}>

              </div>
              <span className={isSelectedTitle('Pagamento aprovado')}>
                Pagamento aprovado
              </span>
            </div>

            <div className={classes.status}>
              <div className={isSelectedIcon('Pedido em separação')}>

              </div>
              <span className={isSelectedTitle('Pedido em separação')}>
                Pedido em separação
              </span>
            </div>

            <div className={classes.status}>
              <div className={isSelectedIcon('Pedido em transporte')}>

              </div>
              <span className={isSelectedTitle('Pedido em transporte')}>
                Pedido em transporte
              </span>
            </div>

            <div className={classes.status}>
              <div className={isSelectedIcon('Pedido entregue')}>

              </div>
              <span className={isSelectedTitle('Pedido entregue')}>
                Pedido entregue
              </span>
            </div>
          </div>
        </div>

        <div className={classes.detail__shipping}>
          <div className="">
            <h3>Entregar em:</h3>
            <p>{props.address?.street}, {props.address?.number}</p>
            <p>{props.address?.city} - {props.address?.state}, {props.address?.postcode}</p>
          </div>

          <div className="">
            <h3>Forma de pagamento:</h3>
            <p>{props.payment_method}</p>
          </div>
        </div>
      </div>
    </OrderDetailContainer>
  )
}
