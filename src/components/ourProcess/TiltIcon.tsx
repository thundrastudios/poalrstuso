'use client'

import { LucideIcon } from 'lucide-react'
import { iconWrapperStyles } from '@/lib/styles'

interface TiltIconProps {
	icon: LucideIcon
}

export function TiltIcon({ icon: Icon }: TiltIconProps) {
	return (
		<div className='group relative z-10 cursor-pointer touch-manipulation'>
			<div className='absolute inset-0 scale-75 rounded-2xl bg-accent/40 opacity-0 blur-lg transition-all duration-500 group-hover:scale-110 group-hover:opacity-60 group-active:scale-110 group-active:opacity-60 sm:blur-xl' />

			<div className='relative rounded-2xl p-1 transition-transform duration-300 group-hover:scale-110 group-active:scale-105'>
				<div className={iconWrapperStyles}>
					<Icon className='h-5 w-5 text-white transition-transform duration-300 group-hover:scale-110 group-active:scale-110 sm:h-6 sm:w-6' />
				</div>
			</div>
		</div>
	)
}

export default TiltIcon
