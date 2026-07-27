import { comparisonRows } from '@/data/comparisonData'

export function ComparisonTable() {
	return (
		<div className=' rounded-2xl border border-border overflow-hidden'>
			<div className='bg-background-secondary py-6 px-8 text-center'>
				<h3 className='text-2xl font-bold text-text-primary'>
					Key Differences
				</h3>
			</div>

			<div className='bg-background px-8 pt-6 pb-2'>
				<div className='grid grid-cols-3 pb-4 mb-2 border-b border-border/60'>
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
						className={`grid grid-cols-3 py-4 ${
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
	)
}

export default ComparisonTable
