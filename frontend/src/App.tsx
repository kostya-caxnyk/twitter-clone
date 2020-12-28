import { Route, Switch } from 'react-router-dom';

import { SignIn } from './pages/AuthPage';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/auth" component={SignIn} />
    </Switch>
  );
}

export default App;
