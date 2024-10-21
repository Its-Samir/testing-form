// if you are using next.js (app router) then activate the below line "use client" directive otherwise remove it

"use client";

import { createFormValidator } from "formaze";
import "formaze/dist/style.css";
import { formSchema } from "../../lib/schema";

const Form = createFormValidator(formSchema);

export default function FormValidation() {
	function handleSubmit(data: any) {
		const result = formSchema.safeParse(data);

		if (!result.success) throw new Error("Invalid inputs");

		console.log(data);
	}

	return (
		<Form schema={formSchema} onSubmit={handleSubmit} className="w-[40rem]">
			<Form.Input
				type="text"
				name="username"
				placeholder="Enter your email"
			/>
			<Form.Input
				type="password"
				name="password"
				placeholder="Enter your password"
			/>
			<Form.Input type="number" name="age" placeholder="Enter your age" />
			<button
				className="rounded-md bg-blue-400 py-1 px-3 text-white hover:bg-blue-500"
				type="submit"
			>
				Submit
			</button>
		</Form>
	);
}
