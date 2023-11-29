import {
	PACE_IN_MINUTES_PER_KILOMETER_AVERAGE,
	DURATION_PER_ELEVATION_AVERAGE,
	DURATION_IN_SECONDS,
	DISTANCE_IN_METERS_AVERAGE,
} from '../utils/constants';

import type { TypeRunnerData } from '@/lib/types/runners';

export const groupById = (allRunners: Array<TypeRunnerData>) => {
	/* const allRunnersGrouped = allRunners.reduce((accumulator, currentValue) => {
		const { id, ...rest } = currentValue;
		if (!accumulator[id]) {
			accumulator[id] = { id, ...rest };
		} else {
			Object.keys(rest).forEach((key) => {
				if (key !== 'id') {
					accumulator[id][key] =
						(accumulator[id][key] || 0) + currentValue[key];
				}
			});
		}
		return accumulator;
	}, {}); */
};

export const calculateSuspectRegisters = (runner: TypeRunnerData) => {
	const paceValidation =
		PACE_IN_MINUTES_PER_KILOMETER_AVERAGE - 3.5 >
		runner.averagePaceInMinutesPerKilometer;
	const durationPerElevationValidation =
		DURATION_PER_ELEVATION_AVERAGE - 89 >
		runner.durationInSeconds / runner.totalElevationGainInMeters;
	const durationValidation =
		DURATION_IN_SECONDS + 11000 < runner.durationInSeconds;
	const distanceValidation =
		DISTANCE_IN_METERS_AVERAGE + 9000 < runner.distanceInMeters;

	if (
		paceValidation ||
		durationPerElevationValidation ||
		durationValidation ||
		distanceValidation
	) {
		return { ...runner, isSuspect: true };
	}
	return { ...runner, isSuspect: false };
};
