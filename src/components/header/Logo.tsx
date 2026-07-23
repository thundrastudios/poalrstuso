import Image from 'next/image'
import Link from 'next/link'
export function Logo() {
	return (
		<div className='shrink-0'>
			<Link href='/'>
				<Image
					src='/LogoWhite.webp'
					alt='PolarCode'
					width={260}
					height={260}
					className='h-auto w-auto object-contain'
					priority
				
				/>
			</Link>
		</div>
	)
}

