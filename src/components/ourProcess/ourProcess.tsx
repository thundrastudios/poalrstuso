"use client"
import { TiltIcon } from './TiltIcon'

import {PROCESS_DATA} from "@/data/Process"

export function OurProcess() {
	return (
		<section className='w-full py-20 md:py-32 max-w-7xl mx-auto px-4'>
			<div className='flex flex-col items-center justify-center text-center px-6'>
				<h2 className='text-4xl md:text-6xl font-bold text-text-primary tracking-tight'>
					Our Process
				</h2>
				<p className='mt-4 text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed'>
					A proven workflow that delivers exceptional results every time
				</p>
			</div>

			<div className='mt-16 relative'>
				<div className='hidden lg:block absolute top-[88px] left-[12.5%] right-[12.5%] h-[2px] bg-accent/50 z-0' />

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8'>
					{PROCESS_DATA.map((step, index) => {
						const isLast = index === PROCESS_DATA.length - 1

						return (
							<div
								key={index}
								className='flex flex-col items-center text-center relative'
							>
								{!isLast && (
									<div className='lg:hidden absolute top-[88px] bottom-[-48px] w-[2px] bg-accent/50 z-0' />
								)}

								<span className='text-5xl font-extrabold text-accent/20 select-none relative z-10 mb-2'>
									{step.number}
								</span>

								<TiltIcon icon={step.icon} />

								<h3 className='mt-6 text-xl font-bold text-text-primary relative z-10'>
									{step.title}
								</h3>

								<p className='mt-3 text-sm text-text-secondary leading-relaxed max-w-xs relative z-10'>
									{step.description}
								</p>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default OurProcess
