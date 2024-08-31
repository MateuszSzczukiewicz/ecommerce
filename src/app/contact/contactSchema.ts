import * as z from "zod";

export const contactSchema = z.object({
	name: z.string().min(3).max(50),
	email: z.string().email(),
	message: z.string().min(10).max(1000),
});

export type ContactFormData = z.TypeOf<typeof contactSchema>;
