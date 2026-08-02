import Image from 'next/image'
import Link from 'next/link'

import { logoLinks, footerColumns } from '@/data/FooterLinks'

export function Footer() {
	return (
		<footer className='w-full max-w-7xl mx-auto px-4 py-16 md:py-24'>
			<div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
				<div className='flex flex-col items-start gap-6'>
					<Link href='/'>
						<Image
							src='/polarcode.webp'
							alt='PolarCode'
							width={100}
							height={60}
							className='w-auto object-contain'
						/>
					</Link>

					<p className='max-w-sm text-sm leading-relaxed text-text-secondary'>
						We create stunning websites and credit solutions that help
						businesses grow and turn visitors into customers.
					</p>

					<div className='flex gap-5'>
						{logoLinks.map(({ icon: Icon, link }) => (
							<Link
								key={link}
								href={link}
								className='text-text-secondary transition-colors duration-300 hover:text-accent-light'
							>
								<Icon className='h-5 w-5 md:h-6 md:w-6' />
							</Link>
						))}
					</div>
				</div>

				{footerColumns.map(column => (
					<div
						key={column.title}
						className='flex flex-col gap-4'
					>
						<h3 className='text-lg md:text-xl font-bold text-text-primary'>
							{column.title}
						</h3>

						<ul className='flex flex-col gap-3'>
							{column.links.map(link => (
								<li
									key={link}
									className='relative group w-fit'
								>
									<Link
										href='/'
										className='text-sm font-medium text-text-secondary transition-colors duration-300 hover:text-accent-light'
									>
										{link}
									</Link>

									<span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-aurora-cyan transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(45,212,191,.8)]' />
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</footer>
	)
}

export default Footer
