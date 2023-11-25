export type TypeRunnerData = {
	id: number;
	userId: number;
	startTimeInSeconds: number;
	durationInSeconds: number;
	distanceInMeters: number;
	steps: number;
	averageSpeedInMetersPerSecond: number;
	averagePaceInMinutesPerKilometer: number;
	totalElevationGainInMeters: number;
	averageHeartRateInBeatsPerMinute: number;
};
