import Reveal from '@/components/animations/Reveal'
import { iconWrapperStyles } from '@/lib/styles'
import { IconType } from 'react-icons'

type ContactData = {
	id: number
	title: string
	description: string
	icon: IconType
}

type Props = {
	data: ContactData
	delay: number
}

export default function ContactCard({ data, delay }: Props) {
	const Icon = data.icon

	return (
		<Reveal delay={delay}>
			<div className='items-start text-left p-8 rounded-2xl bg-background-secondary border border-border transition-smooth hover:-translate-y-2 hover:border-accent-light/40'>
				<div className={iconWrapperStyles}>
					<Icon className='h-6 w-6' />
				</div>

				<h3 className='mt-5 text-xl font-bold text-text-primary'>
					{data.title}
				</h3>

				<p className='mt-3 text-sm text-text-secondary'>{data.description}</p>
			</div>
		</Reveal>
	)
}
