import MyReactNativeForm from 'pages/formik';
import { Teste } from 'pages/teste';
import { FC } from 'react';
import Routes from 'routes';
import * as ServiceWorkerRegistration from './serviceWorkerRegistration';

ServiceWorkerRegistration.register();

const App: FC = function () {
  // return <Routes />
  return <Teste/>
};

export default App;
