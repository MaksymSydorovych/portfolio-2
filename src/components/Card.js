import { Container, Card } from "react-bootstrap";

function Cards() {
	return (
		<Container className='text-center'>
			<h1 className='mt-4'>Maksym Sydorovych</h1>
			<h2 className='mt-4'>Portfolio</h2>
			<Container className='d-md-flex d-xs-block mt-5'>
				<Card>
					<Card.Title>title</Card.Title>
					<Card.Body>
						<Card.Text>description</Card.Text>
						<a href='google.com'>
							<Card.Img src='https://usercontent.one/wp/wp.maksy.site/wp-content/uploads/2018/01/model-building-tutorials-aircraft-guide-2.jpeg'></Card.Img>
						</a>

						<Card.Text>
							<a href='google.com'>github a</a>
						</Card.Text>
					</Card.Body>
				</Card>{" "}
				<Card>
					<Card.Title>title</Card.Title>
					<Card.Body>
						<Card.Text>description</Card.Text>
						<a href='google.com'>
							<Card.Img src='https://usercontent.one/wp/wp.maksy.site/wp-content/uploads/2018/01/model-building-tutorials-aircraft-guide-2.jpeg'></Card.Img>
						</a>

						<Card.Text>
							<a href='google.com'>github a</a>
						</Card.Text>
					</Card.Body>
				</Card>{" "}
				<Card>
					<Card.Title>Course Assigment</Card.Title>
					<Card.Body>
						<Card.Text>description</Card.Text>
						<a
							href='https://course-assigment.netlify.app/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Card.Img src='https://usercontent.one/wp/wp.maksy.site/wp-content/uploads/2018/01/model-building-tutorials-aircraft-guide-2.jpeg'></Card.Img>
						</a>

						<Card.Text>
							<a
								href='https://github.com/MaksymSydorovych/course-assigment'
								target='_blank'
								rel='noreferrer'
							>
								github repo link
							</a>
						</Card.Text>
					</Card.Body>
				</Card>
			</Container>
		</Container>
	);
}

export default Cards;
