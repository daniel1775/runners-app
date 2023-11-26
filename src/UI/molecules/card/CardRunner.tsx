import Text from '../../atoms/Text';
import SingleMetric from '@/UI/atoms/card/SingleMetric';
import EyeIcon from '@/assets/svg/eye.svg';

type TypeCardRunnerProps = {
	userId: number;
	records: number;
	distance: number;
	time: number;
	steps: number;
	elevation: number;
	speed: number;
	pace: number;
	beats: number;
};

const CardRunner = ({
	userId,
	records,
	distance,
	time,
	steps,
	elevation,
	speed,
	pace,
	beats,
}: TypeCardRunnerProps) => {
	const dataToRender = [
		{
			label: 'Records',
			value: records,
		},
		{
			label: 'Distance',
			value: distance,
		},
		{
			label: 'Time',
			value: time,
		},
		{
			label: 'Steps',
			value: steps,
		},
		{
			label: 'Elevation',
			value: elevation,
		},
		{
			label: 'Speed',
			value: speed,
		},
		{
			label: 'Pace',
			value: pace,
		},
		{
			label: 'Beats',
			value: beats,
		},
	];

	return (
		<div className='bg-light-gray h-auto w-full px-4'>
			<Text className='text-dark-gray font-bold'>{`User id: ${userId}`}</Text>
			<div className='flex gap-6 h-fit'>
				{dataToRender.map((metric, index) => (
					<SingleMetric
						key={index}
						label={metric.label}
						value={metric.value}
					/>
				))}
				<div className='flex flex-col'></div>
				<EyeIcon className='text-blue' />
			</div>
		</div>
	);
};

export default CardRunner;
