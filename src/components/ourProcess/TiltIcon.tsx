'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { iconWrapperStyles } from '@/lib/styles'

interface TiltIconProps {
	icon: LucideIcon
}

export function TiltIcon({ icon: Icon }: TiltIconProps) {
	const ref = useRef<HTMLDivElement>(null)
	const [rotate, setRotate] = useState({ x: 0, y: 0 })

	function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
		if (!ref.current) return
		const rect = ref.current.getBoundingClientRect()
		const x = (e.clientX - rect.left) / rect.width - 0.5
		const y = (e.clientY - rect.top) / rect.height - 0.5
		setRotate({ x: y * -30, y: x * 30 })
	}

	function handleMouseLeave() {
		setRotate({ x: 0, y: 0 })
	}

	return (
		<div style={{ perspective: 500 }}>
			<motion.div
				ref={ref}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				animate={{
					rotateX: rotate.x,
					rotateY: rotate.y,
					scale: rotate.x || rotate.y ? 1.15 : 1,
				}}
				transition={{ type: 'spring', stiffness: 300, damping: 20 }}
				className='relative z-10 bg-background p-1 rounded-2xl cursor-pointer'
			>
				<div className={iconWrapperStyles}>
					<Icon className='w-6 h-6 text-white' />
				</div>
			</motion.div>
		</div>
	)
}

export default TiltIcon
