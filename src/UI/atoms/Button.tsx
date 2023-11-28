import React, { ReactNode } from 'react';

type TypeButtonProps = {
	children: ReactNode;
	onClick?: () => void;
	disabled?: boolean;
	designVariation?: 'blue' | 'underline' | 'bordered';
	className?: string;
	type?: 'button' | 'submit';
};

const Button = ({
	children,
	onClick,
	disabled,
	designVariation = 'blue',
	className,
	type = 'button',
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
			type={type}
		>
			{children}
		</button>
	);
};

export default Button;
