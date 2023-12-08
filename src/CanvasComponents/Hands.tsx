import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Hands = () => {
	const secHandRef = useRef<THREE.Object3D | undefined>(undefined);
	const minHandRef = useRef<THREE.Object3D | undefined>(undefined);
	const hourHandRef = useRef<THREE.Object3D | undefined>(undefined);

	const secHand = useGLTF('glb/secHand.glb');
	const minHand = useGLTF('glb/minHand.glb');
	const hourHand = useGLTF('glb/hourHand.glb');

	useFrame(() => {
		const date = new Date();

		// Second Hand Position and Rotation Animation Calculations
		const seconds = date.getSeconds();
		const secondsAngle = (seconds / 60) * Math.PI * 2;
		if (secHandRef.current) {
			secHandRef.current.rotation.z = -secondsAngle;
			const radius = -0.13;
			secHandRef.current.position.set(
				Math.sin(secondsAngle) * radius + 0,
				Math.cos(secondsAngle) * radius + 0.636,
				0
			);
		}

		// Min Hand Position and Rotation Animation Calculations
		const mins = date.getMinutes();
		const minsAngle =
			((mins % 60) / 60) * (Math.PI * 2) +
			((mins / 60) * (Math.PI * 2)) / 12 -
			Math.PI / 2;
		if (minHandRef.current) {
			minHandRef.current.rotation.z = -minsAngle;
			const radius = -0.13;
			minHandRef.current.position.set(
				Math.sin(minsAngle) * radius + 0,
				Math.cos(minsAngle) * radius + 0.637,
				0
			);
		}

		// Hour Hand Position and Rotation Animation Calculations
		const hour = date.getHours();
		const hourAngle =
			((hour % 12) / 12) * (Math.PI * 2) +
			((mins / 60) * (Math.PI * 2)) / 12 -
			Math.PI / 2;
		if (hourHandRef.current) {
			hourHandRef.current.rotation.z = -hourAngle;
			const radius = -0.13;
			hourHandRef.current.position.set(
				Math.sin(hourAngle) * radius + 0,
				Math.cos(hourAngle) * radius + 0.637,
				0
			);
		}
	});

	return (
		<group>
			<primitive
				ref={secHandRef}
				object={secHand.scene}
				scale={0.3}
				rotation={[0, 0, 0]}
				position={[0, 0, 0]}
			/>
			<primitive
				ref={minHandRef}
				object={minHand.scene}
				scale={0.3}
				rotation={[0, 0, 0]}
				position={[0, 0, 0]}
			/>
			<primitive
				ref={hourHandRef}
				object={hourHand.scene}
				scale={0.3}
				rotation={[0, 0, 0]}
				position={[0, 0, 0]}
			/>
		</group>
	);
};

export default Hands;
