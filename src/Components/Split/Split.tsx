import './styles.css'

interface SplitProps {
	splits: number[];
}

const Split = ({ splits }: SplitProps) => {

  const formatTime = (time: number) => {
    return time < 10 ? '0' + time : time;
  };

  const getMinutes = (split: number) => {
    return Math.floor(split / 60);
  };

  const getSeconds = (split: number) => {
    return Math.floor(split % 60);
  };


	const displaySplitMarkup = splits.map((split, index) => (
		<section className='split-container' key={index}>
			<h2>
				{formatTime(getMinutes(split))} <span id='mins'>Mins</span>
			</h2>
			<h2>
				{formatTime(getSeconds(split))}
				<span id='secs'>Secs</span>
			</h2>
		</section>
	))

  return (
    <>
      <h2>Splits</h2>
      { displaySplitMarkup }
    </>
  );
};

export default Split;