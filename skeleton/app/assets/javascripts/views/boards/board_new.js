TrelloClone.Views.BoardNew = Backbone.View.extend({
  template: JST['boards/new'],

  initialize: function () {

  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});