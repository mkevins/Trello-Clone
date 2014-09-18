TrelloClone.Views.ItemsList = Backbone.CompositeView.extend({
  initialize: function () {
    this.itemFormView = new TrelloClone.Views.ItemForm({
      model: new TrelloClone.Models.Item(),
      collection: this.model.items()
    });
    this.addSubview('.item-list-form', this.itemFormView);
  },

  template: JST['items/list'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
