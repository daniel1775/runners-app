import { useState, useMemo, useEffect } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';

import runnersDB from '@/lib/data/runners.json';
import { calculateSuspectRegisters } from '@/lib/helpers/runnerHelper';

import CardRunner from '@/UI/molecules/card/CardRunner';
import PaginationControls from '@/UI/molecules/pagination/PaginationControls';
import Header from '@/UI/layouts/Header';
import SuspectFilterTags from '@/UI/molecules/filter/SuspectFilterTags';

import type { TypeRunnerData } from '@/lib/types/runners';
import type { TypeSuspectFilterTag } from '@/lib/types/filter';

export default function Home() {
	const allRunners = useMemo(() => {
		let allRunners = runnersDB as Array<TypeRunnerData>;

		let allRunnersAnalyzed = allRunners.map((singleRunner) =>
			calculateSuspectRegisters(singleRunner)
		);

		return allRunnersAnalyzed;
	}, []);
	const clearRunners = useMemo(() => {
		return allRunners.filter((singleRunner) => !singleRunner.isSuspect);
	}, [allRunners]);
	const suspectRunners = useMemo(() => {
		return allRunners.filter((singleRunner) => !!singleRunner.isSuspect);
	}, [allRunners]);

	const [allPage, setAllPage] = useState(1);
	const [suspectPage, setSuspectPage] = useState(1);
	const [clearPage, setClearPage] = useState(1);
	const [filterTag, setFilterTag] = useState<TypeSuspectFilterTag>('all');

	const recordsPerPage = 20;
	const indexOfLastRecord = currentPage() * recordsPerPage;
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

	const [totalPages, setTotalPages] = useState<number>(
		allRunners.length / recordsPerPage
	);
	const [runnersToShow, setRunnersToShow] = useState<Array<TypeRunnerData>>(
		allRunners.slice(indexOfFirstRecord, indexOfLastRecord)
	);

	const handleNextPage = () => {
		if (allPage < totalPages) {
			if (filterTag === 'all') {
				setAllPage(allPage + 1);
			}
		}
		if (suspectPage < totalPages) {
			if (filterTag === 'suspect') {
				setSuspectPage(suspectPage + 1);
			}
		}
		if (clearPage < totalPages) {
			if (filterTag === 'clear') {
				setClearPage(clearPage + 1);
			}
		}
	};

	const handlePrevPage = () => {
		if (allPage < totalPages) {
			if (filterTag === 'all') {
				setAllPage(allPage - 1);
			}
		}
		if (suspectPage < totalPages) {
			if (filterTag === 'suspect') {
				setSuspectPage(suspectPage - 1);
			}
		}
		if (clearPage < totalPages) {
			if (filterTag === 'clear') {
				setClearPage(clearPage - 1);
			}
		}
	};

	function currentPage() {
		if (filterTag === 'clear') {
			return clearPage;
		}
		if (filterTag === 'suspect') {
			return suspectPage;
		}
		if (filterTag === 'all') {
			return allPage;
		}
		return 0;
	}

	useEffect(() => {
		let runnersToRender = allRunners;
		if (filterTag === 'all') {
			runnersToRender = allRunners;
		} else if (filterTag === 'clear') {
			runnersToRender = clearRunners;
		} else if (filterTag === 'suspect') {
			runnersToRender = suspectRunners;
		}

		setTotalPages(Math.floor(runnersToRender.length / recordsPerPage));

		runnersToRender = runnersToRender.slice(
			indexOfFirstRecord,
			indexOfLastRecord
		);

		setRunnersToShow(runnersToRender);
		// eslint-disable-next-line
	}, [filterTag, currentPage()]);

	return (
		<main className='pb-20'>
			<Header />
			<div className='flex justify-center mt-4'>
				<SuspectFilterTags
					activeFilterTag={filterTag}
					setActiveFilterTag={setFilterTag}
				/>
			</div>
			<div className='flex justify-center mt-12'>
				<PaginationControls
					handlePrevPage={handlePrevPage}
					handleNextPage={handleNextPage}
					currentPage={currentPage()}
					totalPages={totalPages}
				/>
			</div>
			<div className='flex flex-col gap-3 w-full overflow-x-auto md:w-[90%] mx-auto'>
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
						isSuspect={singleRunner.isSuspect}
					/>
				))}
			</div>
			<div className='flex justify-center mt-8'>
				<PaginationControls
					handlePrevPage={handlePrevPage}
					handleNextPage={handleNextPage}
					currentPage={currentPage()}
					totalPages={totalPages}
				/>
			</div>
		</main>
	);
}
