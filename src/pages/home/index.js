import React from 'react';

function HomePage() {
	return (
		<>
			<div className='container bg-secondary-100' style={{ height: '100vh' }}>
				<div className='pt-6' />
				<p className='fs-3 c-neutral-900 fw-500'>Your rewards</p>
				<div className='pt-9' />
				<p>Space for spinner</p>
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
