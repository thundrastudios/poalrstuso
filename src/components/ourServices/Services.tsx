import Reveal from '@/components/animations/Reveal'
import { SERVICES_DATA } from '@/data/navServices'
import ServiceCard from './ServiceCard'

export function Services() {
	return (
		<section className='mx-auto w-full max-w-6xl px-4 py-14 sm:py-20 md:py-32'>
			<Reveal>
				<div className='mb-10 text-center sm:mb-12 md:mb-16'>
					<h2 className='text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-6xl'>
						Our Services
					</h2>

					<p className='mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary sm:mt-4 sm:text-base md:text-lg'>
						Everything you need to create a powerful online presence
					</p>
				</div>
			</Reveal>

			<div className='grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3'>
				{SERVICES_DATA.map((service, index) => (
					<ServiceCard
						key={service.id}
						service={service}
						delay={index * 0.12}
					/>
				))}
			</div>
		</section>
	)
}

export default Services
