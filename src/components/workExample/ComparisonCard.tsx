import { LucideIcon } from 'lucide-react'
import { iconWrapperName } from '@/lib/styles'
import { FeatureItem } from './FeatureItem'
import { FeatureList } from './FeatureList'

interface Feature {
	icon: LucideIcon
	title: string
	description: string
}

interface ComparisonCardProps {
	icon: LucideIcon
	title: string
	description: string
	features: Feature[]
	perfectFor: string[]
	timeframe: string
	borderHoverClass?: string
}

export function ComparisonCard({
	icon: Icon,
	title,
	description,
	features,
	perfectFor,
	timeframe,
	borderHoverClass = 'hover:border-accent-light/40',
}: ComparisonCardProps) {
	return (
		<div
			className={`flex flex-col rounded-2xl bg-background-secondary/60 border border-border/80 ${borderHoverClass} transition-smooth hover:-translate-y-1 group p-8`}
		>
			<div className='flex items-center mb-4 gap-4'>
				<div className={iconWrapperName}>
					<Icon className='w-8 h-8' />
				</div>
				<h3 className='text-xl font-bold text-text-primary'>{title}</h3>
			</div>

			<p className='text-text-secondary text-sm leading-relaxed mb-8'>
				{description}
			</p>

			<div className='flex flex-col gap-6 mb-8'>
				{features.map(feature => (
					<FeatureItem key={feature.title} {...feature} />
				))}
			</div>

			<div className='border-t border-border/60 mb-6' />

			<FeatureList items={perfectFor} />

			<div className='mt-auto rounded-xl bg-accent/10 border border-accent/20 p-4'>
				<p className='text-accent-light text-sm mb-1'>Development timeframe:</p>
				<p className='text-text-primary text-xl font-bold'>{timeframe}</p>
			</div>
		</div>
	)
}
