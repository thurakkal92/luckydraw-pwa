import React, { useState } from 'react';
import { motion } from 'framer-motion';
import size from 'utils/size';
import { SHEET_ID } from 'constants/sheetConstants';

import { ReactComponent as BgArrow } from 'assets/icons/bg-arrow.svg';
import { ReactComponent as Triangle } from 'assets/icons/triangle.svg';

import { apiPostHelper } from 'helper/apiHelper';

function SpinnerWheel(props) {
	const { dataList, weelSize } = props;
	let rotateDeg = 360 / dataList.length;
	const [wheelRotate, setWheelRotate] = useState(0);
	const [updateSuccess, setUpdateSuccess] = useState(false);
	let tempPos = 0;
	function spin() {
		let pos = Math.floor(Math.random() * dataList.length + 1);
		let posRotateDeg = pos * rotateDeg + 1440;
		posRotateDeg = posRotateDeg - tempPos * rotateDeg;
		tempPos = pos;
		if(pos === 8) 
			pos = 0
		setWheelRotate(posRotateDeg);

		const reqBody = {
			spreadsheetId: SHEET_ID,
			range: 'values!A2:C10000',
			valueInputOption: 'USER_ENTERED',
			resource: {
				values: [[Date(), `Name placeholder ${pos}`, dataList[pos].value]],
			},
		};

		postSpinValues(reqBody);
	}

	async function postSpinValues(reqBody) {
		try {
			const res = await apiPostHelper('postSpinnerValues', reqBody);
			if (res.data === 'OK') {
				setUpdateSuccess(true);
				setTimeout(()=> {
					setUpdateSuccess(false);
				}, 2000)
			} else {
				setUpdateSuccess(false);
			}
		} catch (e) {
			console.log(e);
			setUpdateSuccess(false);
		}
	}

	return (
		<>
			<div style={{ zIndex: 20 }} className='p-relative flex flex-middle flex-column'>
				<span
					className='br-4'
					style={{
						width: '32px',
						height: '6px',
						backgroundColor: '#FFDDA1',
						marginBottom: '-2px',
					}}
				></span>
				<Triangle />
			</div>
			<div className='p-relative' style={{ marginTop: '-8px' }}>
				<motion.div
					// initial={{ rotate: rotateDeg/2 }}
					animate={{
						rotate: [0, -wheelRotate - rotateDeg / 2],
					}}
					transition={{
						damping: 10,
						stiffness: 100,
						duration: 4,
					}}
					className='bw-4 bc-neutral-100 ba spinner-wheel bc-neutral-100 p-relative o-hidden'
					style={{
						boxShadow: '0px 3.16862px 6.33724px rgba(0, 0, 0, 0.12)',
						height: size(weelSize),
						width: size(weelSize),
						borderRadius: '50%',
						margin: '0 auto',
					}}
				>
					{dataList.map((list, idx) => (
						<div
							key={idx}
							className='spinner-wheel__leaf p-absolute t-0 r-0 o-hidden'
							style={{
								transform: `rotate(${idx * rotateDeg}deg) skewY(${-rotateDeg}deg)`,
								transformOrigin: '0% 100%',
								top: 0,
								right: 0,
								width: '50%',
								height: '50%',
								zIndex: 10,
								background: list.color,
								boxShadow: '0px -1.871px 3.74199px rgba(0, 0, 0, 0.25)',
							}}
						>
							<div
								className='ta-center spinner-wheel__label c-white fs-2 pt-5'
								style={{
									transform: `skewY(${rotateDeg}deg) rotate(-${60}deg)`,
									position: 'absolute',
									left: '-85%',
									width: '100%',
									height: '100%',
									transformOrigin: '165px 0px',
								}}
								dangerouslySetInnerHTML={{ __html: list.text }}
							></div>
						</div>
					))}
				</motion.div>

				<div
					onClick={spin}
					className='bg-secondary-500 p-absolute br-100 p-1'
					style={{ zIndex: 20, height: '65px', width: '65px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
				>
					<div
						className='bg-secondary-500 flex br-100 c-pointer flex-middle flex-center'
						style={{ height: '100%', width: '100%', boxShadow: '0px 3.74199px 3.74199px rgba(89, 57, 0, 0.25)' }}
					>
						<p className='c-neutral-900 fs-3 fw-600'>Spin</p>
					</div>
				</div>
			</div>
			<div className='pt-6' />
			<BgArrow />
			{updateSuccess && (
				<motion.div
					initial={{ opacity: 0, y: 50, scale: 0.3 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
					className='br-4 bg-success-500 p-fixed px-10 py-3'
					style={{ bottom: '24px', left: 0, right: 0, maxWidth: '340px', width: '85%', margin: '0 auto' }}
				>
					<p className='fs-4 fw-600 c-white'>Updated successfully!!!</p>
				</motion.div>
			)}
		</>
	);
}

export default SpinnerWheel;
