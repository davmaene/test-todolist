import './App.css';
import './App.scss';
import { HashRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import DashboardScreen from './Pages/dashboard';
import AuthtScreen from './Pages/auth';
import TaskForm from './Pages/addtask';
import configureStore from './store/configureStore';
import "./bootstrap/bootstrap.css"

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/app/liste" element={<DashboardScreen />} />
          <Route exact path="/app/auth" element={<AuthtScreen />} />
          <Route exact path="/app/add" element={<TaskForm />} />
          <Route render={() => <h2>La page que vous avez demandez n'est pas disponible pour le moment</h2>} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
