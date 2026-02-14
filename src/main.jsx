import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './context/AppContext.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Profile from './pages/Profile.jsx'
import Settings from './pages/Settings.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import CartDetail from './pages/CartDetail.jsx'
import NotFound from './pages/NotFound.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorPage />
  },
  {
    path: "/settings",
    element: <Settings />,
    errorElement: <ErrorPage />
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
    errorElement: <ErrorPage />
  },
  {
    path: "/cart",
    element: <CartDetail />,
    errorElement: <ErrorPage />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>,
)