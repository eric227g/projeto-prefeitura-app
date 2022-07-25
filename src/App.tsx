import { FC } from 'react';
import Routes from 'routes';
import * as ServiceWorkerRegistration from './serviceWorkerRegistration';
import Form from './pages/Formik/Form';
import TelaMascara from 'MaskedTeste';

ServiceWorkerRegistration.register();

const App: FC = function () {
  // return <Routes />
  return <Routes />;
};

export default App;
