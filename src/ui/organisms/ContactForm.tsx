"use client";

import { submitContactForm } from "@/api/contactForm";
import { contactSchema } from "@/app/contact/contactSchema";
import { useTypeSafeFormState } from "@/app/hooks/useTypeSafeFormState";
import { SubmitButton } from "@/ui/atoms/SubmitButton";
import { FormField } from "@/ui/molecules/FormField";
import { useRef } from "react";

export const ContactForm = () => {
	const formRef = useRef<HTMLFormElement | null>(null);
	const [state, action] = useTypeSafeFormState(contactSchema, async (data) => {
		await submitContactForm(data);
		formRef.current?.reset();
	});

	const formFields = [
		{ label: "Name", name: "name", type: "text", error: state?.errors.name?.[0] },
		{ label: "Email", name: "email", type: "email", error: state?.errors.email?.[0] },
		{
			label: "Message",
			name: "message",
			type: "textarea",
			error: state?.errors.message?.[0],
		},
	];

	return (
		<form
			action={action}
			ref={formRef}
			name="contact"
			className="mx-auto mt-8 flex max-w-lg flex-col gap-6 rounded-xl border border-gray-300 bg-gradient-to-r from-white to-gray-100 p-6 shadow-xl"
		>
			{formFields.map(({ label, name, type, error }) => (
				<FormField key={name} label={label} name={name} type={type} error={error} />
			))}
			<SubmitButton />
		</form>
	);
};
