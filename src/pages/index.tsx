import runnersDB from '@/lib/data/runners.json';

import CardRunner from '@/UI/molecules/CardRunner';

import type { TypeRunnerData } from '@/lib/types/runners';

export default function Home() {
	// @ts-ignore
	const firstRunner = runnersDB[0] as TypeRunnerData;

	return (
		<div>
			<CardRunner
				userId={firstRunner.id}
				records={50}
				distance={firstRunner.distanceInMeters}
				time={firstRunner.durationInSeconds}
				steps={firstRunner.steps}
				elevation={firstRunner.totalElevationGainInMeters}
				speed={firstRunner.averageSpeedInMetersPerSecond}
				pace={firstRunner.averagePaceInMinutesPerKilometer}
				beats={firstRunner.averageHeartRateInBeatsPerMinute}
			/>
		</div>
	);
}
