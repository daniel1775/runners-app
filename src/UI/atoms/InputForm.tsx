import { useFormContext } from 'react-hook-form';

type TypeInputFormProps = {
	name: string;
	inputStyles?: string;
	containerStyles?: string;
	label?: string;
	labelStyles?: string;
	type?: 'number' | 'text';
};

const InputForm = ({
	name,
	inputStyles,
	containerStyles,
	label,
	labelStyles,
	type = 'text',
}: TypeInputFormProps) => {
	const { register } = useFormContext();

	return (
		<div
			className={`flex flex-col items-start w-full ${
				containerStyles ?? ''
			}`}
		>
			{label && (
				<label
					htmlFor={name}
					className={`${labelStyles}`}
				>
					{label}
				</label>
			)}
			<input
				className={`rounded-md border w-full border-filter-border h-full p-2 disabled:opacity-70 ${
					inputStyles ?? ''
				}`}
				type={type}
				{...register(name)}
			/>
		</div>
	);
};

export default InputForm;
