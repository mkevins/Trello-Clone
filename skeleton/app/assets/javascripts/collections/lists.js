TrelloClone.Collections.Lists = Backbone.Collection.extend({
  url: 'api/lists',
  model: TrelloClone.Models.List,
  //comparator: 'rank',
  //
  // is the same as:
  //
  //comparator: function (list) {
  //  return list.get('rank')
  //}
  comparator: 'ord'

});
