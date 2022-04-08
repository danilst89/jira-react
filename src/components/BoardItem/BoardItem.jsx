import React from "react";
import Card from "../Card/Card";
import { GlobalContextConsumer } from "../GlobalContext";

export default class BoardItem extends React.Component {
  onDragOver = (e) => {
    e.preventDefault();
  }

  render() {
    const { boardStatus } = this.props;

    return (
      <GlobalContextConsumer>
        {
          context => <li
            onDragOver={this.onDragOver}
            className='board__item'
            onDrop={e => context.onDrop(e, boardStatus)}
          >
            <h3>{ boardStatus }</h3>
            {context.tasks.map(task => {
              if (task.status === boardStatus.replace(/\s+/g, '-').toLowerCase()) {
                return (
                  <div key={ task.id }>
                    <Card task={ task }></Card>
                  </div>
                )
              }
            })}
          </li>
        }
      </GlobalContextConsumer>
    )
  }
}
