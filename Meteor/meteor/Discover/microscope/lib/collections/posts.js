//We want Posts to existed both in cilent and server, `var` limits the scope in the folder, so we abandon the `var`
Posts = new Mongo.Collection('posts');
