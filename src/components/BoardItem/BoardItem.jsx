import React from "react";
import Card from "../Card/Card";

export default class BoardItem extends React.Component {
  onDragOver = (e, id) => {
    e.preventDefault();
  }

  render() {
    const { boardStatus, tasks, onDragStart } = this.props;

    return (
      <li
        onDragOver={this.onDragOver}
        className='board__item'
        onDrop={e => this.props.onDrop(e, boardStatus)}
      >
        <h3>{ boardStatus }</h3>
        {tasks.map(task => {
          if (task.status === boardStatus.replace(/\s+/g, '-').toLowerCase()) {
            return (
              <div key={ task.id }>
                <Card onDragStart={ onDragStart } task={ task }></Card>
              </div>
            )
          }
        })}
      </li>
    )
  }
}
