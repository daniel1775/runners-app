import Button from '@/UI/atoms/Button';

import type { TypeSuspectFilterTag } from '@/lib/types/filter';

type TypeSuspectFilterTagsProps = {
	activeFilterTag: TypeSuspectFilterTag;
	setActiveFilterTag: (value: TypeSuspectFilterTag) => void;
};

const SuspectFilterTags = ({
	activeFilterTag,
	setActiveFilterTag,
}: TypeSuspectFilterTagsProps) => {
	const handleClickFilterTag = (activeTag: TypeSuspectFilterTag) => {
		setActiveFilterTag(activeTag);
	};

	const activeFilterTagStyles = (tag: TypeSuspectFilterTag) =>
		activeFilterTag === tag ? 'bg-light-blue' : '';

	return (
		<div className='flex justify-center gap-5'>
			<Button
				designVariation='bordered'
				onClick={() => handleClickFilterTag('all')}
				className={`${activeFilterTagStyles('all')} min-w-[120px]`}
			>
				All
			</Button>
			<Button
				designVariation='bordered'
				onClick={() => handleClickFilterTag('suspect')}
				className={`${activeFilterTagStyles('suspect')} min-w-[120px]`}
			>
				Suspects
			</Button>
			<Button
				designVariation='bordered'
				onClick={() => handleClickFilterTag('clear')}
				className={`${activeFilterTagStyles('clear')} min-w-[120px]`}
			>
				Clear
			</Button>
		</div>
	);
};

export default SuspectFilterTags;
