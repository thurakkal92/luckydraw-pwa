import React from 'react';

import SpinnerWheel from 'components/SpinnerWheel';

import {ReactComponent as LeftArrow} from 'assets/icons/left-arrow.svg'

function HomePage() {
	const spinnerDataList = [
		{
			text: 'Better luck <br /> next time!',
			color: '#832A4B',
			value: 0,
		},
		{
			text: '2X <br /> Savings',
			color: '#742543',
			value: '2X'
		},
		{
			text: '$100 <br /> Cashback',
			color: '#551B31',
			value: '$100 Cashback'
		},
		{
			text: '$20',
			color: '#65203A',
			value: '$20',
		},
		{
			text: '$50',
			color: '#832A4B',
			value: '$50'
		},
		{
			text: '1.5X <br /> Savings',
			color: '#742543',
			value: '1.5X Savings'
		},
		{
			text: '2X <br /> Savings',
			color: '#551B31',
			value: '2X Savings'
		},
		{
			text: '$50',
			color: '#65203A',
			value: '$50'
    }
	];
	return (
		<>
			<div className='container bg-secondary-100' style={{ height: '100vh' }}>
				<div className='pt-6' />
				<p className='fs-3 c-neutral-900 fw-500 flex flex-middle'>
					<LeftArrow /> &nbsp;&nbsp;Your rewards
				</p>
				<div className='pt-9' />
				<div className='ta-center'>
					<SpinnerWheel dataList={spinnerDataList} weelSize={267} />
				</div>
				<div className='pt-9' />

				<div className='p-5 br-12 bg-white ta-center'>
					<p className='fw-500 fs-6 lh-copy'>
						{' '}
						Spin the wheel now to <br /> get rewarded
					</p>
					<p className='fs-2 c-neutral-400 lh-copy pt-2'>
						Tap on Spin or rotate the wheel anti-clockwise and release to start spinning{' '}
					</p>
				</div>
				<div className='pt-4' />
				<p className='c-neutral-900 fs-3 fw-500 ta-center'>
					Have a question? <span className='c-secondary-500 fw-500'>Get help</span>
				</p>
			</div>
		</>
	);
}

export default HomePage;
