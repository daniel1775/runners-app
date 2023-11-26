import React from 'react';
import Text from '../Text';

type TypeSingleMetricProps = {
	label: string;
	value: number;
};

const SingleMetric = ({ label, value }: TypeSingleMetricProps) => {
	return (
		<div className={`flex justify-start items-center flex-col w-fit`}>
			<Text className='!text-gray font-bold'>{label}</Text>
			<Text className='!text-gray'>{value}</Text>
		</div>
	);
};

export default SingleMetric;
