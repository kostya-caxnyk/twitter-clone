import { Route, Switch } from 'react-router-dom';

import { SignIn } from './pages/SignIn';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route path="/auth" component={SignIn} />
      <Route path="/home" component={Home} />
    </Switch>
  );
}

export default App;
