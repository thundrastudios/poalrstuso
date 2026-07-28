import {
	MessageSquare,
	Lightbulb,
	Code2,
	Rocket,
	type LucideIcon,
} from 'lucide-react'

export interface ProcessStep {
	number: string
	icon: LucideIcon
	title: string
	description: string
}

export const PROCESS_DATA: ProcessStep[] = [
	{
		number: '01',
		icon: MessageSquare,
		title: 'Analysis',
		description:
			'We begin by examining your goals, target audience, and project requirements.',
	},
	{
		number: '02',
		icon: Lightbulb,
		title: 'Design',
		description:
			'Our designers create stunning layouts that bring your vision to life.',
	},
	{
		number: '03',
		icon: Code2,
		title: 'Development',
		description:
			'We build your website using clean, efficient code and modern technologies.',
	},
	{
		number: '04',
		icon: Rocket,
		title: 'Launch',
		description:
			'After rigorous testing, we launch your website and provide support.',
	},
]
