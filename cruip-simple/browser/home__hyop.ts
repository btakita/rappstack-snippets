import { calling, memo_, type memo_T, sig_ } from 'ctx-core/rmemo'
let home__hero_modal_container:HTMLDivElement&{ $:memo_T<unknown> }
const home__hero_modal__active$ = sig_(false)
export function home__hero_modal_container__hyop(_home__hero_modal_container:HTMLDivElement) {
	home__hero_modal_container = <HTMLDivElement&{ $:memo_T<unknown> }>_home__hero_modal_container
	home__hero_modal_container.$ = calling(memo_(()=>{
		home__hero_modal_container.classList.toggle('active', home__hero_modal__active$())
	}))
}
export function home__hero__button__hyop(home__hero__button:HTMLButtonElement) {
	home__hero__button.addEventListener('click', evt=>{
		evt.preventDefault()
		setTimeout(()=>home__hero_modal__active$._ = true)
	})
}
export function home__hero_modal__video_container__hyop(home__hero_modal__video_container:HTMLDivElement) {
	window.addEventListener('click', evt=>{
		if (home__hero_modal__active$() && !home__hero_modal__video_container.contains(<Node>evt.target)) {
			home__hero_modal__active$._ = false
		}
	})
	window.addEventListener('keydown', evt=>{
		if (home__hero_modal__active$() && evt.key === 'Escape') {
			home__hero_modal__active$._ = false
		}
	})
}
export function home__hero_modal__video__hyop(_home__hero_modal__video:HTMLVideoElement) {
	const home__hero_modal__video = <HTMLVideoElement&{ $:memo_T<unknown> }>_home__hero_modal__video
	home__hero_modal__video.$ = calling(memo_(()=>{
		if (home__hero_modal__active$()) {
			home__hero_modal__video.play().catch(err=>console.error(err))
		} else {
			home__hero_modal__video.pause()
		}
	}))
}
let features_tab$ = sig_(1)
let features_tab_container:HTMLElement&{ enter$:memo_T<unknown> }
export function features_tab_container__hyop(_features_tab_container:HTMLElement) {
	features_tab_container = <HTMLElement&{ enter$:memo_T<unknown> }>_features_tab_container
	features_tab_container.enter$ = calling(memo_(()=>{
		features_tab_container.classList.toggle('tab-1', features_tab$() === 1)
		features_tab_container.classList.toggle('tab-2', features_tab$() === 2)
		features_tab_container.classList.toggle('tab-3', features_tab$() === 3)
	}))
}
export function features_tab_1__button__hyop(features_tab_1__button:HTMLButtonElement) {
	features_tab_1__button.addEventListener('click', evt=>{
		evt.preventDefault()
		features_tab$._ = 1
	})
}
export function features_tab_2__button__hyop(features_tab_2__button:HTMLButtonElement) {
	features_tab_2__button.addEventListener('click', evt=>{
		evt.preventDefault()
		features_tab$._ = 2
	})
}
export function features_tab_3__button__hyop(features_tab_3__button:HTMLButtonElement) {
	features_tab_3__button.addEventListener('click', evt=>{
		evt.preventDefault()
		features_tab$._ = 3
	})
}
