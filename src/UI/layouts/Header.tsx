import React from 'react';
import Text from '../atoms/Text';

const Header = () => {
	return (
		<header className='bg-blue p-4 w-full mb-20'>
			<Text className='text-white text-xl font-semibold'>
				Runners App
			</Text>
		</header>
	);
};

export default Header;
