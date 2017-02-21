var entries = require('./posts.json');

exports.getBlogEntries = () => entries

exports.getBlogEntry = id =>
  entries.find( post => post.id === +id )