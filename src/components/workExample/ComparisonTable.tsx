import { comparisonRows } from '@/data/comparisonData'

export function ComparisonTable() {
	return (
		<div className='rounded-2xl border border-border overflow-hidden'>
			<div className='bg-background-secondary py-4 px-4 text-center sm:py-6 sm:px-8'>
				<h3 className='text-xl font-bold text-text-primary sm:text-2xl'>
					Key Differences
				</h3>
			</div>

		
			<p className='bg-background px-4 pt-3 text-center text-xs text-text-secondary/70 sm:hidden'>
				Swipe to compare →
			</p>

			<div className='overflow-x-auto bg-background px-4 pt-3 pb-2 sm:overflow-visible sm:px-8 sm:pt-6'>
				<div className='min-w-[520px] sm:min-w-0'>
					<div className='grid grid-cols-[1.2fr_1fr_1fr] gap-4 pb-4 mb-2 border-b border-border/60'>
						<span className='text-text-secondary text-sm'>Parameter</span>
						<span className='text-accent-light text-sm text-center font-medium'>
							Landing page
						</span>
						<span className='text-accent2-light text-sm text-center font-medium'>
							Full Site
						</span>
					</div>

					{comparisonRows.map((row, index) => (
						<div
							key={row.parameter}
							className={`grid grid-cols-[1.2fr_1fr_1fr] gap-4 py-4 ${
								index !== comparisonRows.length - 1
									? 'border-b border-border/40'
									: ''
							}`}
						>
							<span className='text-text-primary text-sm'>{row.parameter}</span>
							<span className='text-text-secondary text-sm text-center'>
								{row.landing}
							</span>
							<span className='text-text-secondary text-sm text-center'>
								{row.website}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default ComparisonTable
