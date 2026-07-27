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
	description,
}: FeatureItemProps) {
	return (
		<div className='flex gap-4'>
			<div className={iconWrapperStyles}>
				<Icon className='w-8 h-8' />
			</div>
			<div>
				<h4 className='font-bold text-text-primary text-lg'>{title}</h4>
				<p className='text-text-secondary text-sm leading-relaxed'>
					{description}
				</p>
			</div>
		</div>
	)
}
