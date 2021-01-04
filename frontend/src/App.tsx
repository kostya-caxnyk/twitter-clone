import { Route, Switch } from 'react-router-dom';
import ProtectedHomeRoute from './components/ProtectedHomeRoute';

import { SignIn } from './pages/AuthPage';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <ProtectedHomeRoute path="/home" component={Home} />
      <Route path="/auth" component={SignIn} />
    </Switch>
  );
}

export default App;
