//We want Posts to existed both in cilent and server, `var` limits the scope in the folder, so we abandon the `var`
Posts = new Mongo.Collection('posts');

Meteor.methods({
	postInsert: function(postAttributes) {
		check(postAttributes, {
			title: String,
			url: String
		});
		var user = Meteor.user();
		var post = _.extend(postAttributes, {
			userId: user._id,
			author: user.username,
			submitted: new Date()
		});
		var postId = Posts.insert(post);
		return {
			_id: postId
		};
	}
});