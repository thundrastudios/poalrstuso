import { Check, ChevronRight } from 'lucide-react'

interface FeatureListProps {
	items: string[]
}

export function FeatureList({ items }: FeatureListProps) {
	return (
		<div className='mb-8'>
			<p className='flex items-center gap-2 text-text-primary mb-4'>
				<Check className='w-4 h-4 text-accent-light' />
				Perfect for:
			</p>
			<ul className='flex flex-col gap-2'>
				{items.map(item => (
					<li
						key={item}
						className='flex items-center gap-2 text-text-secondary text-sm'
					>
						<ChevronRight className='w-4 h-4 text-accent-light shrink-0' />
						{item}
					</li>
				))}
			</ul>
		</div>
	)
}
