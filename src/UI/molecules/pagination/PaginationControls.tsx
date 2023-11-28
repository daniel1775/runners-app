import Button from '@/UI/atoms/Button';
import Text from '@/UI/atoms/Text';

type TypePaginationControlsProps = {
	handlePrevPage: () => void;
	handleNextPage: () => void;
	currentPage: number;
	totalPages: number;
};

const PaginationControls = ({
	handlePrevPage,
	handleNextPage,
	currentPage,
	totalPages,
}: TypePaginationControlsProps) => {
	return (
		<div className='flex justify-center py-8'>
			<Button
				onClick={handlePrevPage}
				disabled={currentPage === 1}
				designVariation='underline'
			>
				Previous
			</Button>
			<Text className='px-4 font-semibold text-base'>
				Page {currentPage} of {totalPages}
			</Text>
			<Button
				onClick={handleNextPage}
				disabled={currentPage === totalPages}
				designVariation='underline'
			>
				Next
			</Button>
		</div>
	);
};

export default PaginationControls;
