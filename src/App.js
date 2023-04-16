import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.Scss';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
/* import Login from './pages/login/Login'; */

function App() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
