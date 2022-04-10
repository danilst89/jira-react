import React from 'react';
import Boards from './components/Boards';
import FormAddTask from './components/FormAddTask';
import { GlobalContextConsumer } from './components/GlobalContext';

export default class App extends React.Component {
  render() {
    return (
      <>
        <GlobalContextConsumer>
          {
            context =>
              <FormAddTask addTask={ context.addTask }></FormAddTask>
          }
        </GlobalContextConsumer>
        <Boards></Boards>
      </>
    );
  }
}
