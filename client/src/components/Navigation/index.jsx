import { Link, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Auth from '../../utils/auth.js'

const Navigation = () => {
    const currentPage = useLocation().pathname;
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <Navbar expand="lg" className='bg-body-tertiary'>
            <Container>
                <Nav className="justify-content-end" activeKey="/">
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
                                <Link to={"/me"} className={currentPage === '/player' ? 'nav-link active' : 'nav-link'}>
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
                                <Link to="/login" className={currentPage === '/login' ? 'nav-link active' : 'nav-link'}>
                                    Login
                                </Link>
                            </Nav.Item>
                        </>
                    )}
                </Nav>
            </Container>
        </Navbar>
    )
};

export default Navigation;