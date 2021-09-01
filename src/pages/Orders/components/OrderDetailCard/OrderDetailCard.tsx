import React, { PropsWithChildren } from 'react';
import { toCurrency } from '../../../../core/number';
import classes from './OrderDetailCard.module.scss';
import icon_1 from '../../../../images/icon_1.png';
import icon_2 from '../../../../images/icon_2.png';
import icon_3 from '../../../../images/icon_3.png';
import icon_4 from '../../../../images/icon_4.png';
import icon_5 from '../../../../images/icon_5.png';

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

  function renderList() {
    return props.items?.map((item: any) => {
      return (
        <div className={classes.items}>
          <div className="">
            <span>{item.qty}x </span>
            <span>{item.name}</span>
          </div>
          <span>{toCurrency(item.price)}</span>
        </div>
      )
    })
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
            {renderList()}
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
            <div className={classes.status}>
              <div className={isSelectedIcon('Aguardando pagamento')}>
                <img src={icon_1} />
              </div>
              <span className={isSelectedTitle('Aguardando pagamento')}>
                Aguardando pagamento
              </span>
            </div>

            <div className={classes.status}>
              <div className={isSelectedIcon('Pagamento aprovado')}>
                <img src={icon_2} />
              </div>
              <span className={isSelectedTitle('Pagamento aprovado')}>
                Pagamento aprovado
              </span>
            </div>

            <div className={classes.status}>
              <div className={isSelectedIcon('Pedido em separação')}>
                <img src={icon_3} />
              </div>
              <span className={isSelectedTitle('Pedido em separação')}>
                Pedido em separação
              </span>
            </div>

            <div className={classes.status}>
              <div className={isSelectedIcon('Pedido em transporte')}>
                <img src={icon_4} />
              </div>
              <span className={isSelectedTitle('Pedido em transporte')}>
                Pedido em transporte
              </span>
            </div>

            <div className={classes.status}>
              <div className={isSelectedIcon('Pedido entregue')}>
                <img src={icon_5} />
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
