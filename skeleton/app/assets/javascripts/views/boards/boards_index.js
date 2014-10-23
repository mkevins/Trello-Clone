TrelloClone.Views.BoardsIndex = Backbone.View.extend({

  template: JST['boards/index'],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  tagName: 'ul',

  render: function () {
    var content = this.template();
    this.$el.html(content);
    var indexView = this;
    this.collection.each(function (board) {
      var showView = new TrelloClone.Views.BoardShow({
        model: board
      });
      indexView.$el.append(showView.render().$el);
    });
    return this;
  }

});
