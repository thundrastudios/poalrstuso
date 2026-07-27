
import {
	Layout,
	Target,
	TrendingUp,
	Globe,
	Layers,
	Settings2,
	Users,
} from 'lucide-react'

export const landingPageFeatures = [
	'New product launch',
	'Advertising campaigns',
	'Lead and email address collection',
	'Promoting promotions and offers',
	'Rapid testing of ideas',
]

export const websitesFeatures = [
	'Corporate website',
	'Online stores',
	'Portfolios and Galleries',
	'Information portals',
	'Blogs and media resources',
]

export const landingPageData = {
	icon: Layout,
	title: 'Landing page',
	description:
		'A landing page designed for the rapid conversion of visitors coming from advertisements or marketing campaigns.',
	features: [
		{
			icon: Target,
			title: 'One goal',
			description:
				'It is aimed at a specific action: making a purchase, subscribing, registering, or providing contact details.',
		},
		{
			icon: Layout,
			title: 'One page',
			description:
				'All information on a single page with a logical, sequential narrative.',
		},
		{
			icon: TrendingUp,
			title: 'High conversion rate',
			description:
				'The absence of distracting elements and navigation maximizes visitor conversion.',
		},
	],
	perfectFor: landingPageFeatures,
	timeframe: '3–7 days',
}

export const websiteData = {
	icon: Globe,
	title: 'Full-fledged Website',
	description:
		'A multi-page website featuring comprehensive information about the company, products, and services, designed for a long-term online presence.',
	features: [
		{
			icon: Layers,
			title: 'Many pages',
			description:
				'Complete structure with sections: About Us, Services, Portfolio, Blog, Contacts, and others.',
		},
		{
			icon: Settings2,
			title: 'Comprehensive functionality',
			description:
				'Product catalogs, user accounts, search systems, filters, and integrations.',
		},
		{
			icon: Users,
			title: 'Long-term relationships',
			description:
				'Building trust through content, news, articles, and regular interaction.',
		},
	],
	perfectFor: websitesFeatures,
	timeframe: '2–6 weeks',
}
