var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CounterSchema = Schema({
	_id: {type: string, required: true},
	seq: {type: Number, default: 0}
});

var counter = mongoose.model('counter', CounterSchema);

var urlSchema = new Schema({
	_id: {type: Number, index: true},
	created_at: Date
});

urlSchema.pre('save', function(next) {
	var doc = this;
	// find url_count and add 1
	counter.findeByIdAndUpdate({_id: 'url_count'}, {$inc: {seq: 1}}, function(error, counter) {
		if (err)
			return next(err);
		doc._id = counter.seq;
		doc.created_at = new Date();
		next();
	});
});

var Url = mongoose.model('Url', urlSchema);

module.exports = Url;