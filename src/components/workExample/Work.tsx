import { ComparisonCard } from './ComparisonCard'
import { landingPageData, websiteData } from '@/data/WorkCards'
import ComparisonTable from './ComparisonTable'
import Reveal from '@/components/animations/Reveal'

export function Work() {
	return (
		<section className='relative w-full py-14 sm:py-20 md:py-32 bg-background-secondary/40 backdrop-blur-sm'>
			<Reveal>
				<div className='text-center mb-8 px-4 sm:mb-12 md:mb-16'>
					<h2 className='text-3xl sm:text-4xl md:text-6xl font-bold text-text-primary tracking-tight'>
						Landing Page vs. Full-Scale Website
					</h2>

					<p className='mt-3 text-sm sm:mt-4 sm:text-base md:text-lg text-text-secondary max-w-2xl mx-auto'>
						Choosing the right solution for your business
					</p>
				</div>
			</Reveal>

			<div className='grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10'>
				<Reveal delay={0.1}>
					<ComparisonCard {...landingPageData} />
				</Reveal>

				<Reveal delay={0.2}>
					<ComparisonCard
						{...websiteData}
						borderHoverClass='hover:border-accent2-light/40'
					/>
				</Reveal>
			</div>

			<Reveal delay={0.3}>
				<div className='max-w-6xl mx-auto px-4 sm:px-6'>
					<ComparisonTable />
				</div>
			</Reveal>

			<Reveal delay={0.4}>
				<div className='flex flex-col items-center justify-center text-center py-10 px-4 sm:py-12 sm:px-6'>
					<h3 className='text-lg sm:text-xl md:text-2xl font-medium text-text-primary max-w-2xl mx-auto mb-5 sm:mb-6'>
						Not sure what to choose? We&apos;ll help you decide!
					</h3>

					<button className='w-full text-white font-medium bg-[#8B3DFF] hover:bg-[#7828E6] transition-smooth rounded-2xl px-8 py-3.5 sm:w-auto sm:py-4 shadow-lg shadow-accent/25 hover:scale-[1.02] active:scale-[0.98]'>
						Get a Consultation
					</button>
				</div>
			</Reveal>
		</section>
	)
}

export default Work
