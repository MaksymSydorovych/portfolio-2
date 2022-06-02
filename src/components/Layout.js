import { Nav, Container, Navbar } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import Portfolio from "./Card";
import About from "./About";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";

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
						<div className='d-flex'>
							<p className='logo__first d-flex'>M</p>
							<p className='logo__second d-flex'>S</p>
						</div>
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
								to='/about-me'
							>
								About me
							</Nav.Link>
							<Nav.Link
								onClick={() => setExpanded(false)}
								as={Link}
								to='/contact'
							>
								Contact me
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Routes>
				<Route path='/' element={<Portfolio />} />
				<Route path='/about-me' element={<About />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</>
	);
}

export default Layout;
