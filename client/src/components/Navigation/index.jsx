import { Link, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import Auth from '../../utils/auth.js'

const Navigation = () => {
    const currentPage = useLocation().pathname;
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <Nav className="justify-content-center" activeKey="/">
            <Nav.Item>
                <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'} href="/">
                    Home
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/games" className={currentPage === '/games' ? 'nav-link active' : 'nav-link'}>
                    Games
                </Link>
            </Nav.Item>
            {Auth.loggedIn() ? (
                <>
                    <Nav.Item>
                        <Link to="/player" className={currentPage === '/player' ? 'nav-link active' : 'nav-link'}>
                            {Auth.getPlayer().data.username}
                        </Link>
                    </Nav.Item>
                    <Nav.Item onClick={logout}>
                        <Nav.Link>
                            Logout
                        </Nav.Link>
                    </Nav.Item>
                </>
            ) : (
                <>
                <Nav.Item>
                <Link to="/signup" className={currentPage === '/signup' ? 'nav-link active' : 'nav-link'}>
                    Signup
                </Link>
                </Nav.Item>

                <Nav.Item>
                    <Link to="/login" className={currentPage === '/profile' ? 'nav-link active' : 'nav-link'}>
                        Login
                    </Link>
                </Nav.Item>
                </>
            )}
        </Nav>
    )
};

export default Navigation;