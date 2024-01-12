import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import Hands from './Hands';
import { useFrame } from '@react-three/fiber';
import { Group, Object3DEventMap, MathUtils } from 'three';
import { easeCubicOut } from 'd3-ease';

interface ModelProps {
	scale?: number;
	position?: [number, number, number];
	rotation?: [number, number, number];
	setRotationFactor: React.Dispatch<React.SetStateAction<number>>;
	rotationFactor: number;
}

/* Model Credit - Jim Field
  https://www.thepixellab.net/freebies
*/

const Watch = ({
	rotationFactor,
	setRotationFactor,
}: ModelProps) => {
	const stoppy = useGLTF('./glb/finalstoppy.glb');
	const clockRef = useRef<Group<Object3DEventMap> | null>(null);

	useFrame((state, delta) => {
		// Rotates StopWatch once onLoad
		if (clockRef.current && rotationFactor < 1) {
			const newRotationFactor = rotationFactor + delta * 0.6;

			// Creates an ease-out for the 360 rotation
			const easedRotationFactor = easeCubicOut(newRotationFactor);
			clockRef.current.rotation.y = MathUtils.lerp(
				0,
				Math.PI * 2,
				easedRotationFactor
			);
			setRotationFactor(newRotationFactor);
		}
	});

	return (
		<>
			<group ref={clockRef} rotation={[0, 0, 0]}>
				<Hands />
				<primitive object={stoppy.scene} scale={0.3} position={[0, 0.5, 0]} />
			</group>
		</>
	);
};

export default Watch;
