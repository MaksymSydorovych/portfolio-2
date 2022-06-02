import { Container, Card, Image } from "react-bootstrap";
import maks from "../assets/maks.JPG";
import exam from "../assets/exam-img.jpg";
import assigment from "../assets/assigment-img.jpg";
import semester from "../assets/semester-img.jpg";
function Cards() {
	return (
		<Container className='text-center pb-5 '>
			<div>
				<Image className='photo' src={maks} rounded />
			</div>
			<h1>Maksym Sydorovych</h1>
			<h2 className='mt-2'>PORTFOLIO</h2>
			<Container className='d-md-flex d-xs-block mt-5'>
				<Card className='mx-4'>
					<Card.Title>Project exam</Card.Title>
					<Card.Body>
						<Card.Text className='text-start'>
							Holidaze is a fictional company which displays a number of
							different establishments in Bergen. The project is created to
							showcase my abilities acquired during the past two years of my
							education, and is the assignment of my final exam as a Frontend
							Develop at Noroff.
						</Card.Text>
						<a
							href='https://projec-exam.netlify.app/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Card.Img src={exam}></Card.Img>
						</a>

						<Card.Text className='mt-3'>
							<a
								href='https://github.com/MaksymSydorovych/project-exam'
								target='_blank'
								rel='noreferrer'
							>
								github repo link
							</a>
						</Card.Text>
					</Card.Body>
				</Card>{" "}
				<Card className='mx-4'>
					<Card.Title>Semester Project</Card.Title>
					<Card.Body>
						<Card.Text className='text-start'>
							Kid-Toys e-commerce website that has both customer-facing and
							admin sections. Both sections should responsive and the website is
							populated by a Strapi API. API deployed on herocu. Used bootstrap,
							sass and vanilla JS.
						</Card.Text>
						<a
							href='https://dazzling-unicorn-191201.netlify.app/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Card.Img src={semester}></Card.Img>
						</a>

						<Card.Text className='mt-3'>
							<a
								href='https://github.com/MaksymSydorovych/kids-toys'
								target='_blank'
								rel='noreferrer'
							>
								github repo link
							</a>
						</Card.Text>
					</Card.Body>
				</Card>{" "}
				<Card className='mx-4'>
					<Card.Title>Course Assigment</Card.Title>
					<Card.Body>
						<Card.Text className='text-start'>
							In this assigment i used my basic knowledge in React. Here i used
							Wordpress instalation with JWT plugin for the login functionality.
						</Card.Text>
						<a
							href='https://course-assigment.netlify.app/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Card.Img src={assigment}></Card.Img>
						</a>

						<Card.Text className='mt-3'>
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
