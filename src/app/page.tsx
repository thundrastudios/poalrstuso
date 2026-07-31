import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import Services from '@/components/ourServices/Services'
import Work from '@/components/workExample/Work'
import OurProcess from '@/components/ourProcess/ourProcess'
import Footer from '@/components/footer/Footer'

export default function Home() {
	return (
		<div className='	min-h-screen	text-text-primary overflow-x-hidden	'>
			<Header />

			<main className='relative	pt-28	overflow-hidden'>
				<div className='	relative z-10	space-y-24'>
					<section id='hero'>
						<Hero />
					</section>

					<section id='services'>
						<Services />
					</section>

					<section id='work'>
						<Work />
					</section>

					<section id='process'>
						<OurProcess />
					</section>
				</div>
			</main>
			<Footer/>
		</div>
	)
}
