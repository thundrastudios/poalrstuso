import { SERVICES_DATA } from '@/data/navServices'
import Reveal from '@/components/animations/Reveal'

export function Services() {
	return (
		<section
			className='
			w-full
			py-20
			md:py-32
			max-w-6xl
			mx-auto
			px-4
		'
		>
			<Reveal>
				<div
					className='
					text-center
					mb-12
					md:mb-16
				'
				>
					<h2
						className='
						text-4xl
						md:text-6xl
						font-bold
						text-text-primary
						tracking-tight
					'
					>
						Our Services
					</h2>

					<p
						className='
						mt-4
						text-base
						md:text-lg
						text-text-secondary
						max-w-2xl
						mx-auto
						leading-relaxed
					'
					>
						Everything you need to create a powerful online presence
					</p>
				</div>
			</Reveal>

			<div
				className='
				grid
				grid-cols-1
				md:grid-cols-2
				lg:grid-cols-3
				gap-6
			'
			>
				{SERVICES_DATA.map((service, index) => {
					const Icon = service.icon

					return (
						<Reveal key={service.id} delay={index * 0.12}>
							<div className='	flex			flex-col			items-start	text-left		p-8		rounded-2xl		bg-background-secondary/60		border		border-border/80		hover:border-accent-light/40		transition-smooth hover:-translate-y-2 group	'>
								<div
									className='w-12h-12rounded-xl bg-accent/20 border	border-accent/40 flex items-center justify-center text-accent-light mb-6 group-hover:scale-110transition-transform duration-300
								'
								>
									<Icon className='w-6 h-6' />
								</div>

								<h3
									className='	text-xl	font-bold	text-text-primary	mb-3
								'
								>
									{service.title}
								</h3>

								<p
									className='	text-sm	text-text-secondary	leading-relaxed
								'
								>
									{service.description}
								</p>
							</div>
						</Reveal>
					)
				})}
			</div>
		</section>
	)
}

export default Services
