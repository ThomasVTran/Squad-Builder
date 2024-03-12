import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
import Error from './App.jsx';
import Signup from './pages/Signup.jsx'
import Login from './pages/Logins.jsx';
import Player from './pages/Player.jsx';
import Home from './pages/Home.jsx';
import Game from './pages/Game.jsx';

const router = createBrowserRouter([{
    path: `/`,
    element: <App />,
    errorElement: <Error />,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
            path: '/Signup',
            element: <Signup />
        },
        {
            path: '/Login',
            element: <Login />
        },
        {
            path: '/Player/:username',
            element: <Player />
        }, {
            path: '/Me',
            element: <Player />
        },        
        {
            path: '/Game',
            element: <Game />
        }
    ]
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)