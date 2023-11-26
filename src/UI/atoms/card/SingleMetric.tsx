import React from 'react';
import Text from '../Text';

type TypeSingleMetricProps = {
	label: string;
	value: number;
	hasBorder?: true;
};

const SingleMetric = ({ label, value, hasBorder }: TypeSingleMetricProps) => {
	return (
		<div
			className={`flex justify-start items-center flex-col w-fit px-3 ${
				hasBorder ? 'border-gray border-r-[1px]' : ''
			}`}
		>
			<Text className='!text-gray font-bold'>{label}</Text>
			<Text className='!text-gray'>{value}</Text>
		</div>
	);
};

export default SingleMetric;
