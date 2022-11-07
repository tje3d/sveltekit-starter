import IconAcademy from '~icons/heroicons-outline/academic-cap'
import IconPie from '~icons/heroicons-outline/chart-pie'
import IconChat from '~icons/heroicons-outline/chat-alt'
import IconCheck from '~icons/heroicons-outline/check-circle'
import IconClipboard from '~icons/heroicons-outline/clipboard-check'
import IconCloud from '~icons/heroicons-outline/cloud'
import IconCreditCard from '~icons/heroicons-outline/credit-card'
import IconMail from '~icons/heroicons-outline/mail'
import IconShopping from '~icons/heroicons-outline/shopping-cart'
import IconUsers from '~icons/heroicons-outline/user-group'

export interface SidebarItem {
	text: string
	href?: string
	icon?: any
	label?: string
	matchPattern?: string
	childs?: SidebarItem[]
}

export const sidebarData: SidebarItem[] = [
	{
		text: 'Dashboards'
	},
	{
		text: 'Projects',
		icon: IconClipboard,
		href: '/panel/dashboard'
	},
	{
		text: 'Analytics',
		icon: IconPie,
		href: '#'
	},
	{
		text: 'Finance',
		icon: IconCreditCard,
		href: '#'
	},

	{
		text: 'Apps'
	},
	{
		text: 'Academy',
		icon: IconAcademy,
		href: '#'
	},
	{
		text: 'Chat',
		icon: IconChat,
		matchPattern: '/panel/chat/.*',
		childs: [
			{
				text: 'Home',
				href: '#'
			},
			{
				text: 'Guides',
				href: '#'
			},
			{
				text: 'Support',
				href: '#'
			}
		]
	},
	{
		text: 'Contacts',
		icon: IconUsers,
		href: '#'
	},
	{
		text: 'Ecommerce',
		icon: IconShopping,
		matchPattern: '/panel/ecommerce.*',
		childs: [
			{
				text: 'Manage',
				href: '/panel/ecommerce'
			},
			{
				text: 'Add Product',
				href: '/panel/ecommerce/add'
			}
		]
	},
	{
		text: 'File Manager',
		icon: IconCloud,
		href: '#'
	},
	{
		text: 'Mailbox',
		icon: IconMail,
		href: '#',
		label: '27'
	},
	{
		text: 'Tasks',
		icon: IconCheck,
		href: '#'
	}
]
