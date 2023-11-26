import React from 'react';
import Text from '../Text';

type TypeSingleMetricProps = {
	label: string;
	value: number;
	hasBorder?: boolean;
	containerStyles?: string;
};

const SingleMetric = ({
	label,
	value,
	hasBorder,
	containerStyles,
}: TypeSingleMetricProps) => {
	return (
		<div
			className={`flex justify-start px-4 items-center flex-col w-fit ${
				hasBorder ? 'border-gray border-r-[1px]' : ''
			}
            ${containerStyles ?? ''}`}
		>
			<Text className='!text-gray font-bold'>{label}</Text>
			<Text className='!text-gray'>{value}</Text>
		</div>
	);
};

export default SingleMetric;
