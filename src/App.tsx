import { FC } from 'react';
import Routes from 'routes';
import * as ServiceWorkerRegistration from './serviceWorkerRegistration';

ServiceWorkerRegistration.register();

const App: FC = function () {
  return <Routes />;
};

export default App;
