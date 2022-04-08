import React from 'react';
import BoardItem from '../BoardItem/BoardItem';

export default class Boards extends React.Component {
  render() {
    const { boardStatuses, tasks, onDrop, onDragStart } = this.props;

    return(
      <ul className='board'>
        {Object.values(boardStatuses).map(boardStatus => {
          return (
            <BoardItem
              onDragStart={ onDragStart }
              onDrop={ onDrop }
              boardStatuses={boardStatuses}
              key={boardStatus}
              boardStatus={boardStatus}
              tasks={tasks}
            />
          )
        })}
      </ul>
    )
  }
}
