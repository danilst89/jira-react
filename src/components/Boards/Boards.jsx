import React from 'react';
import BoardItem from '../BoardItem';
import { GlobalContextConsumer } from '../GlobalContext';

export default class Boards extends React.Component {
  render() {
    return (
      <ul className='board'>
        <GlobalContextConsumer>
          {
            context =>
              Object.values(context.boardStatuses).map(boardStatus => {
                return (
                  <BoardItem
                    key={ boardStatus }
                    boardStatus={ boardStatus }
                  />
                );
              })
          }
        </GlobalContextConsumer>
      </ul>
    );
  }
}
