import type { ReactNode } from 'react';

type typeTextProps = {
	children: ReactNode;
	className?: string;
};

const Text = ({ children, className }: typeTextProps): JSX.Element => {
	return <p className={`text-black ${className ?? ''}`}>{children}</p>;
};

export default Text;
