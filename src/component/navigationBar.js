import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = (props) => {
    return(
    <div>
        <Navbar variant="dark">
            <Container>
            <Navbar.Brand href='/'>{props.tittle}</Navbar.Brand>
            <Nav>
                <Nav.Link href='#trending'>Trending Game</Nav.Link>
                <Nav.Link href='#best'>Best Game</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    </div>
    )
}
export default NavigationBar;