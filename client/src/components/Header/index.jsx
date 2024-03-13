import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from '../Navigation/index.jsx';
import Styles from './index.css'

const Header = () => {
    return (
        <Container className=''>
            <Row>
                <Link className='header' to="/">
                    <h1>Squad Builder</h1>
                </Link>
                <Col>
                    <Navigation />
                </Col>
            </Row>
        </Container>
    )
};

export default Header;