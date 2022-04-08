import React from "react";
import Boards from "./components/Boards/Boards";

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

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      boardStatuses: {
        'backlog': 'Backlog',
        'in-progress': 'In Progress',
        'blocked': 'Blocked',
        'ready-for-qa': 'Ready for QA',
        'done': 'Done'
      },
      tasks,
      selectItem: ''
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
    const { boardStatuses, tasks } = this.state;

    return (
      <Boards onDragStart={ this.onDragStart } onDrop={ this.onDrop } tasks={ tasks } boardStatuses={ boardStatuses }></Boards>
    );
  }
}
