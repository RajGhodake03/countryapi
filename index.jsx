import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app';
import Contact from './components/Contact';
import Home from './components/home';
import Error from './components/error';
import CountryDetail from './components/CountryDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/:country',
        element: <CountryDetail />,
      },
    ],
  },
]);

const root = createRoot(document.querySelector('#root'));

root.render(<RouterProvider router={router} />);