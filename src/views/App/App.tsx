import React from 'react';
import './styles.css';
import CanvasScene from '../../CanvasComponents/CanvasScene';
import Header from '../../Components/Header';
import StopWatch from '../../Components/StopWatch';

export default function App() {
	return (
		<>
			<Header />
			<StopWatch />
			<CanvasScene />
		</>
	);
}
