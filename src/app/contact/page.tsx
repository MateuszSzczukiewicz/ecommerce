import { ContactForm } from "@/ui/organisms/ContactForm";

export default async function ContactPage() {
	return (
		<section className="mx-auto mt-16 w-full max-w-lg rounded-lg bg-white p-10 shadow-2xl">
			<h1 className="mb-8 text-center text-3xl font-bold text-gray-900">Contact Us</h1>
			<ContactForm />
		</section>
	);
}
