TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST['boards/show'],

  tagName: 'li',

  render: function () {
    var content = this.template({
      board: this.model
    });
    this.$el.html(content);
    return this;
  }

});