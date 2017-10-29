import { Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/App/';
import Landing from './components/Landing/';

export default (
  <Route path="/" component={ App }>
    <IndexRoute id="landing-component" component={ Landing } />
  </Route>
);
