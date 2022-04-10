import React from 'react';

export default class FormAddTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };
  }

  changeInputValue = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  clearInputValue = () => {
    this.setState({
      inputValue: ''
    });
  };

  render() {
    const { addTask } = this.props;
    const { changeInputValue } = this;
    const { inputValue } = this.state;

    const addTaskAndClearInput = inputVal => {
      addTask(inputVal);
      this.clearInputValue();
    };

    return (
      <div>
        <h2>What is your task now?</h2>
        <form>
          <input value={ inputValue } onChange={ changeInputValue } type="text" placeholder="Task name" />
          <button type='button' onClick={() => addTaskAndClearInput(inputValue)}>Add task</button>
        </form>
      </div>
    );
  }
}
