<template>
	<div id="appp">
		<sidebar
			:categories="categories"
			v-on:category-selected="setSelectedCategory">
		</sidebar>
		<bookmark-list
			:bookmark="bookmarks | filterByCategory selectedCategory"
			:categories="categories">
		</bookmark-list>
	</div>
</template>

<script>
	import store from './store';
	import Sidebar from './components/Sidebar.vue';
	import BookmarkList from './components/BookmarkList.vue';
	import { filterByCategory } from './filters';

	export default {

		components: {
			Sidebar,
			BookmarkList
		},

		data() {
			return {
				categories: {},
				bookmarks: {},
				selectedCategory: ''
			}
		},

		filters: {
			filterByCategory
		},

		created() {
			updateListings (categories, bookmarks) {
				this.categories = categories;
				this.bookmarks = bookmarks;
			},

			selectedCategory(category) {
				this.selectedCategory = category;
			}
		}
	}
</script>