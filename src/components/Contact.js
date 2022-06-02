import Container from "react-bootstrap/Container";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Validation from "./Validation";

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
		.min(4, "The name must be at least 10 characters"),
});

export default function Contact() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	function onSubmit(data) {
		console.log(data);
	}
	console.log(errors);
	return (
		<Container>
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

				<Button variant='primary' type='submit' className='mt-4'>
					Submit
				</Button>
			</Form>
		</Container>
	);
}
