import React from "react";
import { Container, Card } from "react-bootstrap";

function About() {
	return (
		<Container>
			<Card className='mt-3'>
				<Card.Title className='text-center pt-3'>About me</Card.Title>
				<Card.Text className='mt-3 px-5'>
					I am a 33 year old man, living in Skogn, Norway. In march of 2020 I
					enrolled in a online education at Noroff - School of technology and
					digital media.
				</Card.Text>
				<Card.Text className='px-5'>
					I chose Frontend Development as I have a great passion for structure
					and creativity And unlike many other specialties in IT in the
					Frontend, you immediately see the result of your work. I like to write
					code, improve and find new solutions.
				</Card.Text>
				<Card.Text className='px-5 pb-3'>
					I have a wife and we have 2 children. In my free time I like playing
					outside with my children, visiting other countries, ski and coding on
					my own projects. I have a full time job which I enjoy very much. In
					the meantime I am actively searching for job opportunities in
					Frontend-Development.
				</Card.Text>
			</Card>
		</Container>
	);
}

export default About;
