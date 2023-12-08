import { Canvas } from '@react-three/fiber';
import {
	Environment,
	ContactShadows,
	Float,
} from '@react-three/drei';
import Lights from './Lights';
import CameraRig from './CameraRig';
import Hands from './Hands';
import Watch from './Watch';

const CanvasScene = () => {
	return (
		<Canvas shadows={true} camera={{ position: [0, 2, 7.2], fov: 45 }}>
			<ambientLight intensity={1} />
			<Environment preset='warehouse' blur={0} />
			<ContactShadows
				position={[0, -0.8, 0]}
				opacity={1}
				scale={20}
				blur={0.4}
				far={0.8}
			/>

			<CameraRig>
				<Float rotationIntensity={0.5} floatIntensity={1} speed={3}>
					<Watch />
					<Hands />
				</Float>
			</CameraRig>

			<Lights />
		</Canvas>
	);
};

export default CanvasScene;
