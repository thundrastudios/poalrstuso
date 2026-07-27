import { ComparisonCard } from './ComparisonCard'
import { landingPageData, websiteData } from '@/data/WorkCards'
import ComparisonTable from './ComparisonTable'

export function Work() {
	return (
		<section className='bg-background-secondary   w-full py-20 md:py-32'>
			<div className='text-center mb-12 md:mb-16'>
				<h2 className='text-4xl md:text-6xl font-bold text-text-primary tracking-tight'>
					Landing Page vs. Full-Scale Website
				</h2>
				<p className='mt-4 text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed'>
					Choosing the right solution for your business
				</p>
			</div>

			<div className='grid gap-6 grid-cols-1 mb-10 md:grid-cols-2 max-w-6xl mx-auto px-6'>
				<ComparisonCard {...landingPageData} />
				<ComparisonCard
					{...websiteData}
					borderHoverClass='hover:border-accent2-light/40'
				/>
			</div>
			<div className='max-w-6xl mx-auto px-6'>
				<ComparisonTable />
			</div>
			<div className='flex flex-col items-center justify-center text-center py-12 px-6'>
				<h3 className='text-xl md:text-2xl font-medium text-text-primary max-w-2xl mx-auto mb-6'>
					Not sure what to choose? We&apos;ll help you decide!
				</h3>

				<button className='text-white font-medium bg-[#8B3DFF] hover:bg-[#7828E6]  transition-smooth   rounded-2xl px-8 py-4 shadow-lg shadow-accent/25 hover:scale-[1.02] active:scale-[0.98]'>
					Get a Consultation
				</button>
			</div>
		</section>
	)
}

export default Work
