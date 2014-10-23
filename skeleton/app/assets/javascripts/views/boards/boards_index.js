TrelloClone.Views.BoardsIndex = Backbone.View.extend({

  template: JST['boards/index'],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  tagName: 'ul',

  render: function () {
    var indexView = this;

    var content = indexView.template();
    indexView.$el.html(content);

    indexView.collection.each(function (board) {
      var itemView = new TrelloClone.Views.BoardItem({
        model: board
      });
      indexView.$el.append(itemView.render().$el);
    });
    return indexView;
  }

});
