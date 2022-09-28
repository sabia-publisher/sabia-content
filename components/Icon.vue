<template>
  	<component :is="name" />
</template>

<script>
	import ArrowLeft from './icons/ArrowLeft'
	import Bookmark from './icons/Bookmark'
	import Close from './icons/Close'
	import Contrast from './icons/Contrast'
	import DoubleColumn from './icons/DoubleColumn'
	import Download from './icons/Download'
	import Expand from './icons/Expand'
	import Eye from './icons/Eye'
	import Facebook from './icons/Facebook'
	import Footnote from './icons/Footnote'
	import Home from  './icons/Home'
	import Instagram from './icons/Instagram'
	import Left from './icons/Left'
	import Moon from './icons/Moon'
	import Notes from './icons/Notes'
	import Right from './icons/Right'
	import SingleColumn from './icons/SingleColumn'
	import Summary from './icons/Summary'
	import Sun from './icons/Sun'
	import ThreeDots from './icons/ThreeDots'
	import Trash from './icons/Trash'
	import Twitter from './icons/Twitter'

	export default {
		components: {
			ArrowLeft,
			Bookmark,
			Close,
			Contrast,
			DoubleColumn,
			Download,
			Expand,
			Eye,
			Facebook,
			Footnote,
			Home,
			Instagram,
			Left,
			Moon,
			Notes,
			Right,
			SingleColumn,
			Summary,
			Sun,
			ThreeDots,
			Trash,
			Twitter,
		},
		props: {
			name: String
		},
	}
</script>
