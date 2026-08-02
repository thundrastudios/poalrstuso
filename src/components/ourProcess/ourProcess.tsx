'use client'

import { TiltIcon } from './TiltIcon'
import { PROCESS_DATA } from '@/data/Process'
import Reveal from '@/components/animations/Reveal'

export function OurProcess() {
	return (
		<section className='mx-auto w-full max-w-7xl px-4 py-14 sm:py-20 md:py-32'>
			<Reveal>
				<div className='mx-auto flex max-w-3xl flex-col items-center text-center'>
					<h2 className='text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl lg:text-6xl'>
						Our Process
					</h2>

					<p className='mt-3 text-sm leading-relaxed text-text-secondary sm:mt-4 sm:text-base md:text-lg'>
						A proven workflow that delivers exceptional results every time
					</p>
				</div>
			</Reveal>

			<div className='relative mt-10 sm:mt-14 md:mt-16'>
			
				<div className='absolute left-[12.5%] right-[12.5%] top-[92px] hidden h-[2px] bg-accent/50 lg:block' />

				<div className='grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-8'>
					{PROCESS_DATA.map((step, index) => (
						<Reveal
							key={step.number}
							delay={0.25 + index * 0.15}
						>
							<div className='group relative flex min-w-0 flex-col items-center text-center transition-transform duration-300 active:-translate-y-1 sm:hover:-translate-y-2'>
								<span className='relative z-10 mb-2 select-none text-3xl font-extrabold text-accent/20 sm:text-4xl md:text-5xl'>
									{step.number}
								</span>

								<TiltIcon icon={step.icon} />

								<h3 className='mt-4 break-words text-base font-bold text-text-primary sm:mt-5 sm:text-lg md:text-xl'>
									{step.title}
								</h3>

								<p className='mt-2 max-w-xs break-words text-sm leading-relaxed text-text-secondary sm:mt-3 sm:text-base'>
									{step.description}
								</p>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	)
}

export default OurProcess
