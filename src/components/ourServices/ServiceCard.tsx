import Reveal from '@/components/animations/Reveal'
import { iconWrapperStyles } from '@/lib/styles'
import { LucideIcon } from 'lucide-react'

type Service = {
	id: number
	title: string
	description: string
	icon: LucideIcon
}

type Props = {
	service: Service
	delay: number
}

export default function ServiceCard({ service, delay }: Props) {
	const Icon = service.icon

	return (
		<Reveal delay={delay}>
			<div className='group flex h-full flex-col items-start rounded-2xl border border-border/80 bg-background-secondary/60 p-4 text-left transition-smooth active:-translate-y-1 active:border-accent-light/40 sm:p-6 sm:hover:-translate-y-2 sm:hover:border-accent-light/40 lg:p-8'>
				<div className={iconWrapperStyles}>
					<Icon className='h-5 w-5 sm:h-6 sm:w-6' />
				</div>

				<h3 className='mt-3 mb-2 max-w-full wrap-break-word text-base font-bold leading-tight text-text-primary sm:mt-4 sm:mb-3 sm:text-xl'>
					{service.title}
				</h3>

				<p className='max-w-full wrap-break-word text-sm leading-relaxed text-text-secondary sm:text-base'>
					{service.description}
				</p>
			</div>
		</Reveal>
	)
}
