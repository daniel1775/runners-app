import React from 'react';

type TypeButtonProps = {
	children: string;
	onClick: () => void;
	disabled?: boolean;
	designVariation?: 'blue' | 'underline';
};

const Button = ({
	children,
	onClick,
	disabled,
	designVariation = 'blue',
}: TypeButtonProps) => {
	let buttonStyles = '';

	if (designVariation === 'blue') {
		buttonStyles = 'bg-blue text-white';
	}
	if (designVariation === 'underline') {
		buttonStyles = 'text-blue underline font-semibold';
	}

	return (
		<button
			className={`${buttonStyles}`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;
