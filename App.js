

import Navegacion from './Navegacion';
import store from './src/components/Contador/Store'
import { Provider } from 'react-redux'


export default function App() {
  const userRole = 'admi'
  return (
      <Provider store={store}>
        <Navegacion userRole={userRole} />
      </Provider>
  );
}

