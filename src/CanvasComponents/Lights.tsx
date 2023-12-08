
const Lights = () => {
	return (
		<>
			<directionalLight
				castShadow
				position={[4, 4, 1]}
				intensity={1.5}
				shadow-mapSize={[10024, 10024]}
				shadow-camera-near={1}
				shadow-camera-far={10}
				shadow-camera-top={10}
				shadow-camera-right={10}
				shadow-camera-bottom={-10}
				shadow-camera-left={-10}
			/>
			<ambientLight intensity={0.5} />
		</>
	);
};

export default Lights;
