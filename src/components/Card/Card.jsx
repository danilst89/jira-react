import React from "react";

export default class Card extends React.Component {
  render() {
    const { task } = this.props;

    return (
      <div draggable onDragStart={e => this.props.onDragStart(e, task.title)} className='board__item-card'>
        <h5 className='card__title'>{ task.title }</h5>
      </div>
    )
  }
}
