import {
	Layout,
	Target,
	TrendingUp,
	Check,
	ChevronRight,
	Globe,
	Layers,
	Settings2,
	Users,
} from 'lucide-react'

export function Work() {
	return (
		<section className='bg-background-secondary w-full py-20 md:py-32'>
			<div className='text-center mb-12 md:mb-16'>
				<h2 className='text-4xl md:text-6xl font-bold text-text-primary tracking-tight'>
					Landing Page vs. Full-Scale Website
				</h2>
				<p className='mt-4 text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed'>
					Choosing the right solution for your business
				</p>
			</div>

			<div className='grid gap-6 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto px-6'>
				<div className='flex flex-col rounded-2xl bg-background-secondary/60 border border-border/80 hover:border-accent-light/40 transition-smooth hover:-translate-y-1 group p-8'>
					<div className='flex items-center mb-4 gap-4'>
						<div className='w-15 h-15 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent-light group-hover:scale-110 transition-transform duration-300 shrink-0'>
							<Layout className='w-8 h-8' />
						</div>
						<h3 className='text-xl font-bold text-text-primary'>
							Landing page
						</h3>
					</div>

					<p className='text-text-secondary text-sm leading-relaxed mb-8'>
						A landing page designed for the rapid conversion of visitors coming
						from advertisements or marketing campaigns.
					</p>

					<div className='flex flex-col gap-6 mb-8'>
						<div className='flex gap-4'>
							<div className='w-12 h-12 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center text-accent-light'>
								<Target className='w-8 h-8' />
							</div>
							<div>
								<h4 className='font-bold text-text-primary text-lg'>
									One goal
								</h4>
								<p className='text-text-secondary text-sm leading-relaxed'>
									It is aimed at a specific action: making a purchase,
									subscribing, registering, or providing contact details.
								</p>
							</div>
						</div>

						<div className='flex gap-4'>
							<div className='w-12 h-12 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center text-accent-light'>
								<Layout className='w-8 h-8' />
							</div>
							<div>
								<h4 className='font-bold text-text-primary text-lg'>
									One page
								</h4>
								<p className='text-text-secondary text-sm leading-relaxed'>
									All information on a single page with a logical, sequential
									narrative.
								</p>
							</div>
						</div>

						<div className='flex gap-4'>
							<div className='w-12 h-12 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center text-accent-light'>
								<TrendingUp className='w-8 h-8' />
							</div>
							<div>
								<h4 className='font-bold text-text-primary text-lg'>
									High conversion rate
								</h4>
								<p className='text-text-secondary text-sm leading-relaxed'>
									The absence of distracting elements and navigation maximizes
									visitor conversion.
								</p>
							</div>
						</div>
					</div>

					<div className='border-t border-border/60 mb-6' />

					<div className='mb-8'>
						<p className='flex items-center gap-2 text-text-primary mb-4'>
							<Check className='w-4 h-4 text-accent-light' />
							Perfect for:
						</p>
						<ul className='flex flex-col gap-2'>
							{[
								'New product launch',
								'Advertising campaigns',
								'Lead and email address collection',
								'Promoting promotions and offers',
								'Rapid testing of ideas',
							].map(item => (
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

					<div className='mt-auto rounded-xl bg-accent/10 border border-accent/20 p-4'>
						<p className='text-accent-light text-sm mb-1'>
							Development timeframe:
						</p>
						<p className='text-text-primary text-xl font-bold'>3–7 days</p>
					</div>
				</div>

				<div className='flex flex-col rounded-2xl bg-background-secondary/60 border border-border/80 hover:border-accent2-light/40 transition-smooth hover:-translate-y-1 group p-8'>
					<div className='flex items-center mb-4 gap-4'>
						<div className='w-15 h-15 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent-light group-hover:scale-110 transition-transform duration-300 shrink-0'>
							<Globe className='w-8 h-8' />
						</div>
						<h3 className='text-xl font-bold text-text-primary'>
							Full-fledged Website
						</h3>
					</div>

					<p className='text-text-secondary text-sm leading-relaxed mb-8'>
						A multi-page website featuring comprehensive information about the
						company, products, and services, designed for a long-term online
						presence.
					</p>

					<div className='flex flex-col gap-6 mb-8'>
						<div className='flex gap-4'>
							<div className='w-12 h-12 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center text-accent-light'>
								<Layers className='w-8 h-8' />
							</div>
							<div>
								<h4 className='font-bold text-text-primary text-lg'>
									Many pages
								</h4>
								<p className='text-text-secondary text-sm leading-relaxed'>
									Complete structure with sections: About Us, Services,
									Portfolio, Blog, Contacts, and others.
								</p>
							</div>
						</div>

						<div className='flex gap-4'>
							<div className='w-12 h-12 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center text-accent-light'>
								<Settings2 className='w-8 h-8' />
							</div>
							<div>
								<h4 className='font-bold text-text-primary text-lg'>
									Comprehensive functionality
								</h4>
								<p className='text-text-secondary text-sm leading-relaxed'>
									Product catalogs, user accounts, search systems, filters, and
									integrations.
								</p>
							</div>
						</div>

						<div className='flex gap-4'>
							<div className='w-12 h-12 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center text-accent-light'>
								<Users className='w-8 h-8' />
							</div>
							<div>
								<h4 className='font-bold text-text-primary text-lg'>
									Long-term relationships
								</h4>
								<p className='text-text-secondary text-sm leading-relaxed'>
									Building trust through content, news, articles, and regular
									interaction.
								</p>
							</div>
						</div>
					</div>

					<div className='border-t border-border/60 mb-6' />

					<div className='mb-8'>
						<p className='flex items-center gap-2 text-text-primary mb-4'>
							<Check className='w-4 h-4 text-accent-light' />
							Perfect for:
						</p>
						<ul className='flex flex-col gap-2'>
							{[
								'Corporate website',
								'Online stores',
								'Portfolios and Galleries',
								'Information portals',
								'Blogs and media resources',
							].map(item => (
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

					<div className='mt-auto rounded-xl bg-accent/10 border border-accent/20 p-4'>
						<p className='text-accent-light text-sm mb-1'>
							Development timeframe:
						</p>
						<p className='text-text-primary text-xl font-bold'>2–6 weeks</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Work
