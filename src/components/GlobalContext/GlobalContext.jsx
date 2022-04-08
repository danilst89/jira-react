import React from "react";
const { Provider, Consumer } = React.createContext();

const tasks = [
  {
    id: 1,
    title: 'Task 1',
    status: 'in-progress',
  },
  {
    id: 2,
    title: 'Task 2',
    status: 'done'
  },
  {
    id: 3,
    title: 'Task 3',
    status: 'backlog'
  }
]

class GlobalContextProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      selectItem: '',
      tasks,
      boardStatuses: {
        'backlog': 'Backlog',
        'in-progress': 'In Progress',
        'blocked': 'Blocked',
        'ready-for-qa': 'Ready for QA',
        'done': 'Done'
      }
    }
  }

  onDragStart = (e, title) => {
    this.setState({
      selectItem: title
    })
  }

  onDrop = (e, boardStatus) => {
    const tasks = this.state.tasks.filter(task => {
      const parsedValue = boardStatus.replace(/\s+/g, '-').toLowerCase();

      if (task.title === this.state.selectItem) {
        task.status = parsedValue;
      }

      return task;
    })

    this.setState({
      tasks
    })
  }

  render() {
    const { tasks, selectItem, boardStatuses } = this.state;
    const { onDragStart, onDrop } = this;

    return (
      <Provider value={{
        onDragStart,
        onDrop,
        tasks,
        selectItem,
        boardStatuses
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

export { GlobalContextProvider, Consumer as GlobalContextConsumer };
