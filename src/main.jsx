import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { MainLayout } from './Layout/MainLayout';
import { Provider } from 'react-redux';
import { store } from './store';
import style from './styles/style.module.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <MainLayout />
  </Provider>
);
