import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, Float } from '@react-three/drei';
import Lights from './Lights';
import CameraRig from './CameraRig';
import Watch from './Watch';

interface CanvasSceneProps {
	setRotationFactor: React.Dispatch<React.SetStateAction<number>>;
	rotationFactor: number;
}

const CanvasScene = ({
	setRotationFactor,
	rotationFactor,
}: CanvasSceneProps) => {
	return (
		<Canvas shadows={true} camera={{ position: [0, 2, 7.2], fov: 45 }}>
			<ambientLight intensity={1} />
			<Environment preset='city' blur={0} />
			<ContactShadows
				position={[0, -0.8, 0]}
				opacity={1}
				scale={20}
				blur={0.4}
				far={0.8}
			/>

			<CameraRig>
				<Float rotationIntensity={0.5} floatIntensity={1} speed={3}>
					<Watch
						rotationFactor={rotationFactor}
						setRotationFactor={setRotationFactor}
					/>
				</Float>
			</CameraRig>

			<Lights />
		</Canvas>
	);
};

export default CanvasScene;
