import React from 'react';
import Text from '../Text';

type TypeSingleMetricProps = {
	label: string;
	value: number;
	containerStyles?: string;
};

const SingleMetric = ({
	label,
	value,
	containerStyles,
}: TypeSingleMetricProps) => {
	return (
		<div
			className={`flex justify-start px-4 items-center h-full flex-col w-fit 
            ${containerStyles ?? ''}`}
		>
			<Text className='!text-gray font-bold'>{label}</Text>
			<Text className='!text-gray'>{value}</Text>
		</div>
	);
};

export default SingleMetric;
