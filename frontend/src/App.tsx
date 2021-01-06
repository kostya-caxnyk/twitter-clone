import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

import { SignIn } from './pages/AuthPage';
import Layout from './pages/Layout';

function App() {
  return (
    <Switch>
      <Route path="/auth" component={SignIn} />
      <ProtectedRoute component={Layout} />
    </Switch>
  );
}

export default App;
