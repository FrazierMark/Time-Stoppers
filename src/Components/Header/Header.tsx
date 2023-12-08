import './styles.css';

const Header = () => {
	return (
		<>
			<nav>
				<img
					src={'./imgs/shape.png'}
					className='brand'
					width='85'
					height='85'
					alt='brand'
				/>
				<h1>Time Stoppers</h1>
			</nav>
			<hr className='border-line' />
		</>
	);
};

export default Header;
