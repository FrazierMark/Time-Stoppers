import './styles.css';
import CanvasScene from '../../CanvasComponents/CanvasScene';
import Header from '../../Components/Header';
import StopWatch from '../../Components/StopWatch';
import { useState } from 'react';

export default function App() {
	const [rotationFactor, setRotationFactor] = useState(0);
	return (
		<>
			<Header />
			<StopWatch setRotationFactor={setRotationFactor} />
			<CanvasScene rotationFactor={rotationFactor} setRotationFactor={setRotationFactor} />
		</>
	);
}


