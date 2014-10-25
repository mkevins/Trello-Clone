window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    TrelloClone.boards = new TrelloClone.Collections.Boards();

    new TrelloClone.Routers.Boards({
      $rootEl: $('#main')
    });
    Backbone.history.start();
  }
};

Backbone.View.prototype.leave = function () {
	if (this.subViews) {
		this.subViews.forEach(function (subView) {
			subView.leave();
		});
	}
	this.remove();
}