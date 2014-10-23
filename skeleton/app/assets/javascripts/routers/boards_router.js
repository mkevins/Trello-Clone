TrelloClone.Routers.Boards = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'index'
  },

  index: function () {
    TrelloClone.boards.fetch();
    var indexView = new TrelloClone.Views.BoardsIndex({
      collection: TrelloClone.boards
    });
    this._swapView(indexView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
