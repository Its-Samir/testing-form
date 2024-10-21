import { makeFormSchema } from "formaze";

export const formSchema = makeFormSchema({
	username: {
		type: "string",
	},
	password: {
		type: "password",
		minLength: {
			value: 8, // by default 6
		},
	},
	age: { type: "number", optional: true },
});
