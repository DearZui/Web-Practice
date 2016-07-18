<template>
	
	<div id="book" class="ui small modal">
		<i class="close icon"></i>
		<div class="header">
			Add a new bookmark
		</div>
		<div class="content">
			<form class="ui form">
				<div class="field">
					<label>Bookmark Title</label>
					<input v-model="bookamrkTitle" type="text" placeholder="Enter a title for your bookmark">
				</div>
				<div class="field">
					<label>Bookmark URL</label>
					<input v-model="bookamrkUrl" type="text" placeholder="Enter the URL for your bookmark">
				</div>
				<div class="field">
					<label>Bookmark category</label>
					<select v-model="bookmarkCategory" class="ui simple dropdown">
						<option value="">Select a category</option>
						<template v-for="(name, color) in categories">
							<option value="{{ name }}">{{ name }}</option>
						</template>
					</select>
				</div>
			</form>
		</div>

		<div class="actions">
			<div @click="addBookmark" class="ui inverted purple button">Add</div>
		</div>
	</div>
</template>

<script>
	import store from '../store';

	export default {
		data() {
			return {
				bookamrkTitle: '',
				bookamrkUrl: '',
				bookmarkCategory: '',
			}
		},

		props: ['categories'],

		methods: {
			addBookmark() {
				const newBookmark = {
					title: this.bookamrkTitle,
					url: this.bookamrkUrl,
					category: this.bookmarkCategory
				}
				store.addBookmark(newBookmark);
				$("#bookmark-model").modal('hide');
			}
		},

		events: {
			'add-bookmark': function() {
				this.bookamrkTitle = this.bookamrkUrl = this.bookmarkCategory = '';
				$('#bookmark-modal').modal('show');
			}
		}
	}
</script>