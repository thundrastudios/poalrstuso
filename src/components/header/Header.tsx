'use client'

import { useState } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import DesktopNavLinks from './DesktopNavLinks'
import MobileMenu from './MobileMenu'
import { Logo } from './Logo'

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false)

	const { scrollY } = useScroll()

	useMotionValueEvent(scrollY, 'change', latest => {
		setIsScrolled(latest > 20)
	})

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
				isScrolled
					? 'bg-background/50 backdrop-blur-xl  py-3 shadow-lg shadow-black/5'
					: 'bg-transparent py-5'
			}`}
		>
			<div className='mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6'>
				<Logo />

				<div className='hidden md:block'>
					<DesktopNavLinks />
				</div>

				<div className='md:hidden'>
					<MobileMenu />
				</div>
			</div>
		</header>
	)
}

export default Header
