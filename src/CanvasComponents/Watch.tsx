import { useGLTF } from '@react-three/drei';

// interface ModelProps {
// 	scale?: number;
// 	position?: [number, number, number];
// 	rotation?: [number, number, number];
// }

/* Model Credit - Jim Field
  https://www.thepixellab.net/freebies
*/

const Watch = () => {
	const stoppy = useGLTF('./glb/finalstoppy.glb');

	return <primitive object={stoppy.scene} scale={0.3} position={[0, 0.5, 0]} />;
};

export default Watch;
