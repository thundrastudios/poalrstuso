import { Check, ChevronRight } from 'lucide-react'

interface FeatureListProps {
	items: string[]
}

export function FeatureList({ items }: FeatureListProps) {
	return (
		<div className='mb-6 sm:mb-8'>
			<p className='flex items-center gap-2 text-text-primary mb-3 sm:mb-4'>
				<Check className='w-4 h-4 text-accent-light shrink-0' />
				Perfect for:
			</p>
			<ul className='flex flex-col gap-2'>
				{items.map(item => (
					<li
						key={item}
						className='flex items-start gap-2 text-text-secondary text-sm'
					>
						<ChevronRight className='w-4 h-4 text-accent-light shrink-0 mt-0.5' />
						<span className='min-w-0 break-words'>{item}</span>
					</li>
				))}
			</ul>
		</div>
	)
}
