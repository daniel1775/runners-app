import { useState, useMemo, useEffect } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';

import runnersDB from '@/lib/data/runners.json';
import { calculateSuspectRegisters } from '@/lib/helpers/runnerHelper';

import CardRunner from '@/UI/molecules/card/CardRunner';
import PaginationControls from '@/UI/molecules/pagination/PaginationControls';
import Header from '@/UI/layouts/Header';
import SuspectFilterTags from '@/UI/molecules/filter/SuspectFilterTags';
import InputForm from '@/UI/atoms/InputForm';
import Button from '@/UI/atoms/Button';
import SearchIcon from '@/assets/svg/search.svg';

import type { TypeRunnerData } from '@/lib/types/runners';
import type {
	TypeSuspectFilterTag,
	TypeSearchUserFilter,
} from '@/lib/types/filter';

export default function Home() {
	const formMethods = useForm<TypeSearchUserFilter>({
		defaultValues: {
			search: '',
		},
	});
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

	const [currentPage, setCurrentPage] = useState(1);
	const [filterTag, setFilterTag] = useState<TypeSuspectFilterTag>('all');
	const [searchValue, setSearchValue] = useState<string>('');

	const recordsPerPage = 20;
	const indexOfLastRecord = currentPage * recordsPerPage;
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
	const totalPages = Math.ceil(totalPagesByFilterTag() / recordsPerPage);

	const [runnersToShow, setRunnersToShow] = useState<Array<TypeRunnerData>>(
		allRunners.slice(indexOfFirstRecord, indexOfLastRecord)
	);

	function totalPagesByFilterTag() {
		if (filterTag === 'all') {
			return allRunners.length;
		} else if (filterTag === 'clear') {
			return clearRunners.length;
		} else if (filterTag === 'suspect') {
			return suspectRunners.length;
		}
		return 0;
	}

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

	const handleSearchUserById: SubmitHandler<TypeSearchUserFilter> = (
		formValues
	) => {
		setSearchValue(formValues.search);
	};

	useEffect(() => {
		let runnersToRender = allRunners;
		if (filterTag === 'all') {
			runnersToRender = allRunners;
		} else if (filterTag === 'clear') {
			runnersToRender = clearRunners;
		} else if (filterTag === 'suspect') {
			runnersToRender = suspectRunners;
		}

		if (searchValue) {
			runnersToRender = runnersToRender.filter(
				(singleRunner) => singleRunner.userId === Number(searchValue)
			);
		}

		runnersToRender = runnersToRender.slice(
			indexOfFirstRecord,
			indexOfLastRecord
		);

		setRunnersToShow(runnersToRender);
		// eslint-disable-next-line
	}, [filterTag, currentPage]);

	return (
		<main className='pb-20'>
			<Header />
			<FormProvider {...formMethods}>
				<form
					className='w-full flex flex-col items-center md:max-w-[750px] mx-auto'
					onSubmit={formMethods.handleSubmit(handleSearchUserById)}
				>
					<div className='w-full'>
						<label
							htmlFor='search'
							className='text-left'
						>
							Search by user id
						</label>
						<div className='flex w-full h-fit gap-2'>
							<InputForm
								name='search'
								type='number'
							/>
							<Button
								className='h-auto aspect-square px-2 rounded'
								type='submit'
							>
								<SearchIcon className='h-[22px] w-[22px]' />
							</Button>
						</div>
					</div>
				</form>
			</FormProvider>
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
						isSuspect={singleRunner.isSuspect}
					/>
				))}
			</div>
			<div className='flex justify-center mt-8'>
				<PaginationControls
					handlePrevPage={handlePrevPage}
					handleNextPage={handleNextPage}
					currentPage={currentPage}
					totalPages={totalPages}
				/>
			</div>
		</main>
	);
}
