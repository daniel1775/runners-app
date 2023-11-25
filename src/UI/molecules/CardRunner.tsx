import Text from '../atoms/Text';

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
	return (
		<div>
			<Text>{`User id: ${userId}`}</Text>
			<div></div>
		</div>
	);
};

export default CardRunner;
