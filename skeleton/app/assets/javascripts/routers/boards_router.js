TrelloClone.Routers.Boards = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'index',
    'api/boards/new': 'new',
    'api/boards/:id': 'show'
  },

  index: function () {
    TrelloClone.boards.fetch();
    var indexView = new TrelloClone.Views.BoardsIndex({
      collection: TrelloClone.boards
    });
    this._swapView(indexView);
  },

  show: function (id) {
    var board = TrelloClone.boards.getOrFetch(id);
    var showView = new TrelloClone.Views.BoardShow({
      model: board
    });
    this._swapView(showView);
  },

  new: function () {
    var newView = new TrelloClone.Views.BoardNew();
    this._swapView(newView)
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
