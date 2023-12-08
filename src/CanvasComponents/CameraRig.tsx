import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { ReactNode, useRef } from 'react';
import { Group } from 'three';

interface CameraRigProps {
	children: ReactNode;
}

const CameraRig = ({ children }: CameraRigProps) => {
	const group = useRef<Group>(null);

  // Slightly rotate children inside the CameraRig
	// (doesn't work when HTML is on top of canvas)
	useFrame((state, delta) => {
		easing.dampE(
			group.current!.rotation,
			[state.pointer.y / 8, -state.pointer.x / 5, 0],
			0.25,
			delta
		);
	});

	return <group ref={group}>{children}</group>;
};

export default CameraRig;
