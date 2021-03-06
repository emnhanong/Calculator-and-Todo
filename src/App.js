import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from "./history";
import TodoList from "./pages/TodoList/TodoList";
import Calculator from "./pages/Calculator/Calculator";
import TicTacToe from "./pages/TicTacToe/TicTacToe";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <DashboardLayout>
          <Switch>
            <Route path="/calculator" component={Calculator} />
            <Route path="/todolist" component={TodoList} />
            <Route path="/tictactoe" component={TicTacToe} />
            <Redirect to="/calculator" component={Calculator} />
          </Switch>
        </DashboardLayout>
      </Router>
    </div>
  );
};
export default App;
