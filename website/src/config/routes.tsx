import Login from "../pages/Login";
import { createBrowserRouter } from 'react-router-dom';
import Register from "../pages/Register";
import App from "../App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path:'/register',
        element: <Register />
    },
    {
        path:'/home',
        element: <>Home</>
    }
]);

export default router;