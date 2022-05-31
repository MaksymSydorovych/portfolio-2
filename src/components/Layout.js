import { Nav, Container, Navbar } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cards from "./Card";

function Layout() {
	const [expanded, setExpanded] = useState(false);

	return (
		<>
			<Navbar
				className='navigation'
				expanded={expanded}
				bg='dark'
				variant='dark'
				expand='lg'
			>
				<Container fluid>
					<Navbar.Brand as={Link} to='/'>
						<span className='logo__first'>M</span>
						<span className='logo__second'>S</span>
					</Navbar.Brand>
					<Navbar.Toggle
						onClick={() => setExpanded(expanded ? false : "expanded")}
						aria-controls='basic-navbar-nav'
					/>
					<Navbar.Collapse id='basic-navbar-nav' className='navigation_nav'>
						<Nav className='mr-auto '>
							<Nav.Link onClick={() => setExpanded(false)} as={Link} to='/'>
								Portfolio
							</Nav.Link>
							<Nav.Link
								onClick={() => setExpanded(false)}
								as={Link}
								to='/contact'
							>
								About me
							</Nav.Link>
							<Nav.Link
								onClick={() => setExpanded(false)}
								as={Link}
								to='/accommondation'
							>
								Contact me
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Cards />
		</>
	);
}

export default Layout;
