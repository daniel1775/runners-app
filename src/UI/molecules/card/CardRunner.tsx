import Text from '../../atoms/Text';
import SingleMetric from '@/UI/atoms/card/SingleMetric';
import EyeIcon from '@/assets/svg/eye.svg';
import WarningIcon from '@/assets/svg/warning.svg';

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
	isSuspect?: boolean;
	onViewAllClick: () => void;
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
	isSuspect,
	onViewAllClick,
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
		<div
			className={`h-auto w-full px-8 py-4 shadow rounded ${
				isSuspect ? 'bg-light-red' : 'bg-light-gray'
			}`}
		>
			<div className='flex justify-start items-start mb-4 gap-6'>
				<Text className='text-dark-gray font-bold'>{`User id: ${userId}`}</Text>
				{isSuspect && (
					<WarningIcon className='text-red-500 w-[30px] h-[20px] mt-1' />
				)}
			</div>
			<div className='flex items-center justify-between'>
				<div className='flex h-fit'>
					{dataToRender.map((metric, index) => (
						<SingleMetric
							key={index}
							label={metric.label}
							value={metric.value}
							hasBorder={index !== dataToRender.length - 1}
							containerStyles={index === 0 ? 'pl-0' : ''}
						/>
					))}
				</div>
				<div
					className='flex flex-col items-center justify-start'
					onClick={onViewAllClick}
				>
					<EyeIcon className='text-blue w-[20px] h-[16px] mb-1' />
					<Text className='text-blue text-xs leading-[12px]'>
						View all <br /> records
					</Text>
				</div>
			</div>
		</div>
	);
};

export default CardRunner;
