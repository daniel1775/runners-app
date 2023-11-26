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
