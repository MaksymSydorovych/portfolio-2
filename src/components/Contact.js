import Container from "react-bootstrap/Container";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Validation from "./Validation";
import { useState } from "react";
import CreateToken from "./CreateToken";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
	name: yup
		.string()
		.required("Please enter your name")
		.min(3, "The name must be at least 3 characters"),
	email: yup
		.string()
		.required("Please enter an email address")
		.email("Please enter a valid email address"),

	message: yup
		.string()
		.required("Please enter your message")
		.min(10, "The name must be at least 10 characters"),
});

export default function Contact() {
	const [sending, setSending] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const url = "https://wp.maksy.site/wp-json/wc/v3/products";
	const token = CreateToken();
	const headers = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${token}`,
	};
	async function onSubmit(data) {
		setSending(true);

		try {
			const response = await axios.post(url, data, { headers });
			console.log("response", response.data);

			setSubmitted(true);
		} catch (error) {
			console.log(error);
		} finally {
			setSending(false);
		}
	}

	return (
		<Container>
			<h1>Contact</h1>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Group className='mt-3'>
					<Form.Text className='text-muted '>
						Name should contain minium 3 letters
					</Form.Text>
					<Form.Control placeholder='Name' {...register("name")} />

					{errors.name && <Validation>{errors.name.message}</Validation>}
				</Form.Group>

				<Form.Group className='mt-3'>
					<Form.Text className='text-muted '>Enter valid e-mail</Form.Text>
					<Form.Control placeholder='Email' {...register("email")} />
					{errors.email && <Validation>{errors.email.message}</Validation>}
				</Form.Group>
				<Form.Group className='mt-3'>
					<Form.Text className='text-muted '>
						Last name should contain minium 10 letters
					</Form.Text>
					<Form.Control placeholder='Message' {...register("message")} />
					{errors.name && <Validation>{errors.message.message}</Validation>}
				</Form.Group>
				{submitted && (
					<Alert className='mt-4' variant='success'>
						newYour message was successfully sent. We will contact you shortly!
						<Link className='mx-4' to='/'>
							Go Back
						</Link>
					</Alert>
				)}
				<Button variant='primary' type='submit' className='mt-4'>
					{sending ? "Sending.." : "Send"}
				</Button>
			</Form>
		</Container>
	);
}
