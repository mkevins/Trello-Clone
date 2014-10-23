TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST['boards/show'],

  initialize: function () {
    if (!this.model._fetchedLists) {
      this.model.fetch();
    }
    this.listenTo(this.model, "sync", this.render);
  },

  tagName: 'ul',

  render: function () {
    var showView = this;

    var content = showView.template({
      board: showView.model
    });
    showView.$el.html(content);

    showView.model.lists().each(function (list) {
      var listView = new TrelloClone.Views.ListsIndex({
        model: list
      });
      showView.$el.append(listView.render().$el);
    });
    return showView;
  }

});