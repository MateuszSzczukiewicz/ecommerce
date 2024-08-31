import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			disabled={pending}
			className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-lg font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:cursor-wait disabled:bg-gray-300"
		>
			Submit
		</button>
	);
};
