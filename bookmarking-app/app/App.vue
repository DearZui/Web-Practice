<template>
	<div id="app">
	<sidebar
		:categories="categories"
		v-on:category-selected="setSelectedCategory">
		
	</sidebar>
	<bookmark-list
		:bookmarks="bookmarks | filterByCategory selectedCategory"
		:categories:"categories">
		
	</bookmark-list>
	</div>
</template>

<script>
	
</script>