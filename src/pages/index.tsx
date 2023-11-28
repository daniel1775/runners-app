import { useState, useMemo, useEffect } from 'react';

import runnersDB from '@/lib/data/runners.json';
import { calculateSuspectRegisters } from '@/lib/helpers/runnerHelper';

import CardRunner from '@/UI/molecules/card/CardRunner';
import PaginationControls from '@/UI/molecules/pagination/PaginationControls';
import Header from '@/UI/layouts/Header';

import type { TypeRunnerData } from '@/lib/types/runners';

export default function Home() {
	const allRunners = useMemo(() => {
		let allRunners = runnersDB as Array<TypeRunnerData>;

		let allRunnersAnalyzed = allRunners.map((singleRunner) =>
			calculateSuspectRegisters(singleRunner)
		);

		return allRunnersAnalyzed;
	}, []);

	const [currentPage, setCurrentPage] = useState(1);
	const recordsPerPage = 20;

	const indexOfLastRecord = currentPage * recordsPerPage;
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
	const totalPages = Math.ceil(allRunners.length / recordsPerPage);

	const [runnersToShow, setRunnersToShow] = useState<Array<TypeRunnerData>>(
		allRunners.slice(indexOfFirstRecord, indexOfLastRecord)
	);

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const onViewAllClick = () => {};

	useEffect(() => {
		setRunnersToShow(
			allRunners.slice(indexOfFirstRecord, indexOfLastRecord)
		);
		// eslint-disable-next-line
	}, [currentPage]);

	return (
		<div>
			<Header />
			<div className='flex justify-center'>
				<PaginationControls
					handlePrevPage={handlePrevPage}
					handleNextPage={handleNextPage}
					currentPage={currentPage}
					totalPages={totalPages}
				/>
			</div>
			<div className='flex flex-col gap-3 w-[90%] mx-auto'>
				{runnersToShow.map((singleRunner) => (
					<CardRunner
						key={singleRunner.id}
						userId={singleRunner.userId}
						records={50}
						distance={singleRunner.distanceInMeters}
						time={singleRunner.durationInSeconds}
						steps={singleRunner.steps}
						elevation={singleRunner.totalElevationGainInMeters}
						speed={singleRunner.averageSpeedInMetersPerSecond}
						pace={singleRunner.averagePaceInMinutesPerKilometer}
						beats={singleRunner.averageHeartRateInBeatsPerMinute}
						onViewAllClick={onViewAllClick}
						isSuspect={singleRunner.isSuspect}
					/>
				))}
			</div>
			<div className='flex justify-center'>
				<PaginationControls
					handlePrevPage={handlePrevPage}
					handleNextPage={handleNextPage}
					currentPage={currentPage}
					totalPages={totalPages}
				/>
			</div>
		</div>
	);
}
