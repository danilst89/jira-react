import React from 'react';
import { GlobalContextConsumer } from '../GlobalContext';

export default class Card extends React.Component {
  render() {
    const { task } = this.props;

    return (
      <GlobalContextConsumer>
        {
          context =>
            <div draggable onDragStart={e => context.onDragStart(e, task.id)} className="board__item-card">
              <h5 className="card__title">{ task.title }</h5>
            </div>
        }
      </GlobalContextConsumer>
    );
  }
}
