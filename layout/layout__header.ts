import { class_ } from 'ctx-core/html'
import { a_, button_, div_, header_, li_, nav_, span_, ul_ } from 'relementjs/html'
import { defs_, path_, radialGradient_, rect_, stop_, svg_ } from 'relementjs/svg'
export function layout__header_() {
	const main_menu_a2 = [['/about', 'About us']]
	const resources_menu_a2 = [['/contact', 'Get in touch']]
	return (
		header_({
			class: class_(
				'fixed',
				'w-full',
				'z-30',
				'md:bg-opacity-90',
				'transition',
				'duration-300',
				'ease-in-out'),
			/** @see {import('../../ui--browser--peakexistence/layout').layout__header__hyop} */
			hyop: 'layout__header__hyop'
		}, [
			div_({
				class: class_(
					'max-w-6xl',
					'mx-auto',
					'px-5',
					'sm:px-6'),
			}, [
				div_({
					class: class_(
						'flex',
						'items-center',
						'justify-between',
						'h-16',
						'md:h-20')
				}, [
					div_({
						class: class_(
							'shrink-0',
							'mr-4')
					}, [
						a_({
							class: class_('block'),
							href: '/',
							'aria-label': 'Peak Existence'
						}, [
							svg_({
								xmlns: 'http://www.w3.org/2000/svg',
								viewBox: '0 0 32 32',
								class: class_(
									'w-8',
									'h-8')
							}, [
								defs_([
									radialGradient_({
										cx: '21.152%',
										cy: '86.063%',
										fx: '21.152%',
										fy: '86.063%',
										r: '79.941%',
										id: 'header-logo'
									}, [
										stop_({ 'stop-color': '#4FD1C5', offset: '0%' }),
										stop_({ 'stop-color': '#81E6D9', offset: '25.871%' }),
										stop_({ 'stop-color': '#338CF5', offset: '100%' }),
									])
								]),
								rect_({
									width: 32,
									height: 32,
									rx: 16,
									fill: 'url(#header-logo)',
									'fill-rule': 'nonzero'
								})
							])
						])
					]),
					nav_({
						class: class_(
							'hidden',
							'md:flex',
							'md:grow')
					}, [
						ul_({
							class: class_(
								'flex',
								'grow',
								'justify-end',
								'flex-wrap',
								'items-center')
						}, [
							main_menu_a2.map(([href, text])=>
								li_({
									class: class_(
										'text-gray-600',
										'hover:text-gray-900',
										'px-3',
										'lg:px-5',
										'py-2',
										'flex',
										'items-center',
										'transition',
										'duration-150',
										'ease-in-out'),
									href,
								}, text)
							),
							home_desktop_resources__li_()
						]),
						ul_({
							class: class_(
								'flex',
								'grow',
								'justify-end',
								'flex-wrap',
								'items-center')
						}, [
							li_({
								class: class_(
									'font-medium',
									'text-gray-600',
									'hover:text-gray-900',
									'px-5',
									'py-3',
									'flex',
									'items-center',
									'transition',
									'duration-150',
									'ease-in-out'),
								href: '/signin'
							}, 'Sign in'),
							li_([
								a_({
									class: class_(
										'btn-sm',
										'text-gray-200',
										'bg-gray-900',
										'hover:bg-gray-800',
										'ml-3'),
									href: '/signup'
								}, [
									span_('Sign up'),
									right_arrow_()
								])
							])
						])
					]),
					div_({
						class: class_(
							'flex',
							'md:hidden'),
					}, [
						button_({
							class: class_(
								'hamburger',
								'peer'),
							'aria-controls': 'mobile-nav',
							/** @see {import('@btakita/ui--browser--peakexistence/layout').layout__header__mobile_menu__button__hyop} */
							hyop: 'layout__header__mobile_menu__button__hyop'
						}, [
							span_({ class: class_('sr-only') }, 'Menu'),
							svg_({
								xmlns: 'http://www.w3.org/2000/svg',
								viewBox: '0 0 24 24',
								class: class_(
									'w-6',
									'h-6',
									'fill-current',
									'text-gray-900')
							}, [
								rect_({ y: 4, width: 24, height: 2 }),
								rect_({ y: 11, width: 24, height: 2 }),
								rect_({ y: 18, width: 24, height: 2 }),
							])
						]),
						nav_({
							id: 'mobile-nav',
							class: class_(
								'absolute',
								'top-full',
								'h-screen',
								'pb-16',
								'z-20',
								'left-0',
								'w-full',
								'overflow-scroll',
								'bg-white',
								'transition',
								'ease-out',
								'duration-200',
								'transform',
								'opacity-0',
								'peer-[.active]:opacity-100',
								'-translate-y-2',
								'peer-[.active]:translate-y-0'),
						}, [
							ul_({
								class: class_(
									'px-5',
									'py-2')
							}, [
								main_menu_a2.map(([href, text])=>
									li_([
										a_({
											class: class_(
												'flex',
												'text-gray-600',
												'hover:text-gray-900',
												'py-2'),
											href
										}, text)
									])),
								li_({
									class: class_(
										'py-2',
										'my-2',
										'border-t',
										'border-b',
										'border-gray-200')
								}, [
									span_({
										class: class_(
											'flex',
											'text-gray-600',
											'hover:text-gray-900',
											'py-2')
									}, 'Resources'),
									ul_({
										class: class_('pl-4')
									}, resources_menu_a2.map(([href, text])=>
										li_([
											a_({
												class: class_(
													'text-sm',
													'flex',
													'font-medium',
													'text-gray-600',
													'hover:text-gray-900',
													'py-2'),
												href,
											}, text)
										]))),
								]),
								li_([
									a_({
										class: class_(
											'flex',
											'font-medium',
											'w-full',
											'text-gray-600',
											'hover:text-gray-900',
											'py-2',
											'justify-center'),
										href: '/signin'
									}, 'Sign in')
								]),
								li_([
									a_({
										class: class_(
											'btn-sm',
											'text-gray-200',
											'bg-gray-900',
											'hover:bg-gray-800',
											'w-full',
											'my-2'),
										href: '/signup'
									}, [
										span_('Sign up'),
										right_arrow_()
									])
								])
							])
						])
					])
				])
			])
		])
	)
	function home_desktop_resources__li_() {
		return (
			li_({
				class: class_('relative', 'group'),
			}, [
				a_({
					class: class_(
						'text-gray-600',
						'hover:text-gray-900',
						'px-3',
						'lg:px-5',
						'py-2',
						'flex',
						'items-center',
						'transition',
						'duration-150',
						'ease-in-out'),
					href: '#0',
				}, [
					'Resources',
					svg_({
						xmlns: 'http://www.w3.org/2000/svg',
						viewBox: '0 0 12 12',
						class: class_(
							'w-3',
							'h-3',
							'fill-current',
							'text-gray-400',
							'cursor-pointer',
							'ml-1',
							'shrink-0')
					}, [
						path_({
							d: 'M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z'
						})
					])
				]),
				ul_({
					class: class_(
						'origin-top-right',
						'absolute',
						'top-full',
						'right-0',
						'w-40',
						'bg-white',
						'py-2',
						'ml-4',
						'rounded',
						'shadow-lg',
						'transition',
						'ease-out',
						'duration-200',
						'transform',
						'opacity-0',
						'group-hover:opacity-100',
						'-translate-y-2',
						'group-hover:translate-y-0'),
				}, resources_menu_a2.map(([href, text])=>
					li_([
						a_({
							class: class_(
								'font-medium',
								'text-sm',
								'text-gray-600',
								'hover:text-gray-900',
								'flex',
								'py-2',
								'px-5',
								'leading-tight'),
							href,
						}, text)
					])))
			])
		)
	}
}
function right_arrow_() {
	return (
		svg_({
			xmlns: 'http://www.w3.org/2000/svg',
			viewBox: '0 0 12 12',
			class: class_(
				'w-3',
				'h-3',
				'fill-current',
				'text-gray-400',
				'shrink-0',
				'ml-2',
				'-mr-1')
		}, [
			path_({
				d: 'M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z',
				'fill-rule': 'nonzero'
			})
		])
	)
}
