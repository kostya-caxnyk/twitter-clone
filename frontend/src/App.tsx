import { Route, Switch } from 'react-router-dom';

import { SignIn } from './pages/SignIn';
import { Home } from './pages/Home';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/auth" component={SignIn} />
    </Switch>
  );
}

export default App;
