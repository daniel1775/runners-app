import React from 'react';

type TypeButtonProps = {
	children: string;
	onClick: () => void;
	disabled?: boolean;
	designVariation?: 'blue' | 'underline' | 'bordered';
	className?: string;
};

const Button = ({
	children,
	onClick,
	disabled,
	designVariation = 'blue',
	className,
}: TypeButtonProps) => {
	let buttonStyles = '';

	if (designVariation === 'blue') {
		buttonStyles = 'bg-blue text-white';
	}
	if (designVariation === 'underline') {
		buttonStyles = 'text-blue underline font-semibold';
	}
	if (designVariation === 'bordered') {
		buttonStyles =
			'text-blue py-1 rounded-md border border-blue font-semibold';
	}

	return (
		<button
			className={`${buttonStyles} ${className ?? ''}`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;
