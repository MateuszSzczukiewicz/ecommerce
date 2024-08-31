type FormFieldProps = {
	label: string;
	name: string;
	type: string;
	error?: string;
};

export const FormField = ({ label, name, type, error }: FormFieldProps) => {
	return (
		<label className="flex flex-col">
			<span className="text-lg font-semibold text-gray-900">{label}</span>
			{type === "textarea" ? (
				<textarea
					required
					name={name}
					aria-label={label}
					rows={4}
					className="mt-2 block w-full rounded-lg border border-gray-400 px-4 py-3 text-base font-normal shadow-lg transition-all duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
				/>
			) : (
				<input
					type={type}
					required
					name={name}
					aria-label={label}
					className="mt-2 block w-full rounded-lg border border-gray-400 px-4 py-3 text-base font-normal shadow-lg transition-all duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
				/>
			)}
			{error && <p className="mt-2 text-sm text-red-600">{error}</p>}
		</label>
	);
};
