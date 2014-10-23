TrelloClone.Views.BoardItem = Backbone.View.extend({
  template: JST['boards/item'],

  tagName: 'li',

  render: function () {
    var content = this.template({
      board: this.model
    });
    this.$el.html(content);
    return this;
  }

});