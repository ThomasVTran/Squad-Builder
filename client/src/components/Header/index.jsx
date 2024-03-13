import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from '../Navigation/index.jsx';

const Header = () => {
    return (
        <Container className=''>
            <Row>
                <Link className='' to="/">
                    <Col>Squad Builder</Col>
                </Link>
                <Col>
                    <Navigation />
                </Col>
            </Row>
        </Container>
    )
};

export default Header;