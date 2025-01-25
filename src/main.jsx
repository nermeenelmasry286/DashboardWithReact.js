
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import {MainLayout} from './Layout/MainLayout';
import './styles/style.module.css'

createRoot(document.getElementById('root')).render(
  <>
    <MainLayout/>
  </>
)
