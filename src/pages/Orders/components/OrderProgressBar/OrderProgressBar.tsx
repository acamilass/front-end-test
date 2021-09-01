import React from 'react';
import classes from './OrderProgressBar.module.scss';
import icon_1 from '../../../../images/icon_1.png';
import icon_2 from '../../../../images/icon_2.png';
import icon_3 from '../../../../images/icon_3.png';
import icon_4 from '../../../../images/icon_4.png';
import icon_5 from '../../../../images/icon_5.png';

export function OrderProgressBar({ infos }: any) {

  function isSelectedIcon(status: string) {
    return infos.status === status
      ? `${classes.selected_icon} ${classes.status__icon}`
      : `${classes.status__icon}`
  }

  function isSelectedTitle(status: string) {
    return infos.status === status
      ? `${classes.selected} ${classes.status__title}`
      : `${classes.status__title}`
  }

  return (
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
  )
}