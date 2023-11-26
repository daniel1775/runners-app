import Text from '../../atoms/Text';
import SingleMetric from '@/UI/atoms/card/SingleMetric';

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
		<div className='bg-light-gray w-full'>
			<Text>{`User id: ${userId}`}</Text>
			<div className=''>
				{dataToRender.map((metric, index) => {
					if (index !== dataToRender.length - 1) {
						return (
							<SingleMetric
								key={index}
								label={metric.label}
								value={metric.value}
								hasBorder
							/>
						);
					}
					return (
						<SingleMetric
							key={index}
							label={metric.label}
							value={metric.value}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default CardRunner;
