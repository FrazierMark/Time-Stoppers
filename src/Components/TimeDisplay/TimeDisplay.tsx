interface TimeDisplayProps {
  currentTime: number;
}

const TimeDisplay = ({currentTime}: TimeDisplayProps) => {

  const minutes = Math.floor(currentTime / 60);
	const seconds = Math.floor(currentTime % 60);

  return (
    <section className='time-display'>
				<h2>
					{minutes < 10 ? '0' + minutes : minutes} 
					<span id='mins'>Mins</span>
				</h2>
				<h2>
					{seconds < 10 ? '0' + seconds : seconds}
					<span id='secs'>Secs</span>
				</h2>
			</section>
  )
}

export default TimeDisplay