import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import LoginPage from './pages/loginPage';
import Dashboard from './pages/dashboardPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {/* index route with Login page*/}
      <Route index element={<LoginPage />} /> 
       {/* dashboard route with Dashboard page*/}
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  )
)

export default function App(){
  return (
    <RouterProvider router={router} />
  )
}
