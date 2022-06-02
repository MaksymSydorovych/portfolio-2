import React from "react";
import { Container, Card } from "react-bootstrap";

function About() {
	return (
		<Container>
			<Card className='mt-3'>
				<Card.Title className='text-center'>About me</Card.Title>
				<Card.Text className='mt-3 p-5'>
					I am a 32 year old man, living in Skogn, Norway. I have a wife and we
					have 2 children. In my free time I like playing outside with my
					children, visiting other countries, ski and coding on my own projects.
					I have a full time job which I enjoy very much. In march of 2020 I
					enrolled in a online education at Noroff - School of technology and
					digital media. In the meantime I am actively searching for job
					opportunities in Frontend-Development.
				</Card.Text>
			</Card>
		</Container>
	);
}

export default About;
