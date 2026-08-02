import Reveal from '@/components/animations/Reveal'
import { FORM_DATA } from '@/data/Form'
import ContactCard from './ContactCard'
import ContactForm from './ContactForm'

export default function Contact() {
	return (
		<section className='w-full max-w-7xl mx-auto px-4 py-14 sm:py-20 md:py-32'>
			<Reveal>
				<div className='text-center mb-8 sm:mb-12 md:mb-16'>
					<h2 className='text-3xl sm:text-4xl md:text-6xl font-bold text-text-primary'>
						Let&apos;s work together.
					</h2>

					<p className='mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base text-text-secondary'>
						Ready to start your project? Contact us today.
					</p>
				</div>
			</Reveal>

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6'>
				<div className='flex flex-col gap-5 sm:gap-6'>
					{FORM_DATA.map((item, index) => (
						<ContactCard
							key={item.id}
							data={item}
							delay={index * 0.12}
						/>
					))}
				</div>

				<ContactForm />
			</div>
		</section>
	)
}
