'use client'

import React, { useState } from 'react'

export function Hero() {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
	const [isHovered, setIsHovered] = useState(false)

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const rect = e.currentTarget.getBoundingClientRect()
		setMousePos({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
		})
	}

	return (
		<section
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className='relative w-full md:pt-44 md:pb-32 pt-36 pb-24 md:py-32 overflow-hidden flex flex-col items-center justify-center text-center group cursor-default'
		>
			<div
				className='absolute inset-0 -z-30 opacity-10 pointer-events-none'
				style={{
					backgroundImage: `
            linear-gradient(to right, rgba(165, 180, 252, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(165, 180, 252, 0.15) 1px, transparent 1px)
          `,
					backgroundSize: '40px 40px'
				}}
			/>

			<div
				className='absolute inset-0 -z-20 pointer-events-none transition-opacity duration-500'
				style={{
					opacity: isHovered ? 1 : 0,
					backgroundImage: `
            linear-gradient(to right, rgba(139, 92, 246, 0.45) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.45) 1px, transparent 1px)
          `,
					backgroundSize: '40px 40px',
					WebkitMaskImage: `radial-gradient(circle 320px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 80%)`,
					maskImage: `radial-gradient(circle 320px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 80%)`
				}}
			/>

			<div
				className='absolute -z-10 pointer-events-none w-[550px] h-[550px] rounded-full blur-[110px] transition-opacity duration-500'
				style={{
					left: `${mousePos.x - 275}px`,
					top: `${mousePos.y - 275}px`,
					opacity: isHovered ? 0.45 : 0,
					background:
						'radial-gradient(circle, rgba(139, 92, 246, 0.7) 0%, rgba(45, 212, 191, 0.35) 45%, transparent 70%)'
				}}
			/>

			<h1 className='max-w-5xl text-4xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-7xl'>
				We Create Digital{' '}
				<span className='bg-gradient-to-r from-accent-light via-aurora-cyan to-white bg-clip-text text-transparent'>
					Solutions
				</span>
			</h1>

			<p className='mt-6 text-base md:text-lg text-text-secondary max-w-2xl leading-relaxed pointer-events-none select-none'>
				We turn your ideas into stunning websites and landing pages that convert
				visitors into customers.
			</p>

			<div className='mt-8 flex flex-wrap items-center justify-center gap-4 z-10'>
				<button className='text-text-primary font-medium bg-accent hover:bg-accent-dark transition-all duration-300 rounded-xl px-7 py-3.5 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.02] active:scale-[0.98]'>
					Start Project
				</button>
				<button className='text-text-primary border border-border bg-background-secondary/60 hover:bg-background-secondary transition-all duration-300 rounded-xl px-7 py-3.5 font-medium backdrop-blur-sm hover:border-accent-light/40 hover:scale-[1.02] active:scale-[0.98]'>
					Our Work
				</button>
			</div>
		</section>
	)
}

export default Hero
