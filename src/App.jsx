import { RouterProvider } from 'react-router-dom';
import { router } from './router/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" theme="colored" autoClose={3000} />
    </>
  );
}

export default App;
