<template>
    <header class="m-header flex" :class="{'bg':bg}">
        <div class="header-btn header-left">
            <slot name="left"></slot>
        </div>
        <h1 class="header-title flex-fit" v-text="title"></h1>
        <div class="header-btn header-right">
            <slot name="right"></slot>
        </div>
    </header>
</template>
<script>
	export default{
		props: {
			title: {
				type: String,
				default: ''
			},
			bg: {
				type: Boolean,
				default: false
			}
		}
	}
</script>
