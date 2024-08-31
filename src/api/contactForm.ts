"use server";

import { ContactFormData, contactSchema } from "@/app/contact/contactSchema";

export const submitContactForm = async (data: ContactFormData) => {
	contactSchema.parseAsync(data);
	console.log({ data });
};
