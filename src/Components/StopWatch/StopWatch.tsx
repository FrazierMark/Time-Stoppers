import { useEffect, useState, useRef } from 'react';
import Split from '../Split';
import './styles.css';
import TimeDisplay from '../TimeDisplay';

const StopWatch = () => {
	const [currentTime, setCurrentTime] = useState(0);
	const [startEffect, setStartEffect] = useState(false);
	const [currentSplit, setCurrentSplit] = useState(0);
	const [splits, setSplits] = useState<number[]>([]);
	const intervalRef = useRef<number | null>(null);

	// Start Timer when startEffect is True
	useEffect(() => {
		if (startEffect) {
			intervalRef.current = setInterval(() => {
				setCurrentTime((prevTime) => prevTime + 1)
				setCurrentSplit((prevSplit) => prevSplit + 1);
			}, 1000);
		}
		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [startEffect]);

	
	// Trigger start/stop
	const handleClick = () => {
		setStartEffect((prevStartEffect) => !prevStartEffect);
	};

	// Reset all state
	const handleReset = () => {
		setStartEffect(false);
		setCurrentTime(0);
		setCurrentSplit(0)
		setSplits([]);
	};

	// Add currentSplit to array of splits
	const handleSplit = () => {
		setSplits([...splits, currentSplit]);
		setCurrentSplit(0)
	};

	return (
		<div className='watch-container'>
			<TimeDisplay currentTime={currentTime} />
			<Split splits={splits} />

			<section className='button-container'>
				<button onClick={handleSplit}>Split</button>
				<button onClick={handleClick}>
					Click to {startEffect ? 'Stop' : 'Start'}
				</button>
				<button onClick={handleReset}>Reset</button>
			</section>
		</div>
	);
};

export default StopWatch;