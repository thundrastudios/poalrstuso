import { LucideIcon } from 'lucide-react'
import { iconWrapperStyles } from '@/lib/styles'

interface FeatureItemProps {
	icon: LucideIcon
	title: string
	description: string
}

export function FeatureItem({
	icon: Icon,
	title,
	description
}: FeatureItemProps) {
	return (
		<div className='flex gap-3 sm:gap-4'>
			<div className={`${iconWrapperStyles} shrink-0`}>
				<Icon className='w-6 h-6 sm:w-8 sm:h-8' />
			</div>
			<div className='min-w-0'>
				<h4 className='font-bold text-text-primary text-base sm:text-lg break-words'>
					{title}
				</h4>
				<p className='text-text-secondary text-sm leading-relaxed break-words'>
					{description}
				</p>
			</div>
		</div>
	)
}
