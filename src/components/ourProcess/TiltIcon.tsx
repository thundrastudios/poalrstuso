'use client'

import { LucideIcon } from 'lucide-react'
import { iconWrapperStyles } from '@/lib/styles'

interface TiltIconProps {
	icon: LucideIcon
}

export function TiltIcon({ icon: Icon }: TiltIconProps) {
	return (
		<div className='group relative z-10 cursor-pointer'>
			<div className='absolute inset-0 rounded-2xl bg-accent/40 blur-xl opacity-0 scale-75 transition-all duration-500 group-hover:opacity-60 group-hover:scale-110' />

			<div className='relative  p-1 rounded-2xl transition-transform duration-300 ease-out group-hover:scale-110'>
				<div className={iconWrapperStyles}>
					<Icon className='w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110' />
				</div>
			</div>
		</div>
	)
}

export default TiltIcon
