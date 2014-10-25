TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST['boards/show'],

  initialize: function () {
    if (!this.model._fetchedLists) {
      this.model.fetch();
    }
    this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.model.lists(), "sync", this.render);
		this.subViews = [];
  },

	events: {
		"submit form": "createList"
	},

  render: function () {
    var showView = this;

    var content = showView.template({
      board: showView.model
    });
    showView.$el.html(content);

		// get subview elements
		showView.$lists = showView.$('ul#lists');
		showView.$newListForm = showView.$('div#newListForm');

    showView.model.lists().each(function (list) {
      var listView = new TrelloClone.Views.ListsIndex({
        model: list
      });
      showView.$lists.append(listView.render().$el);
    });

		// add form for new lists
		var newView = new TrelloClone.Views.ListNew({});
		this.subViews.push(newView);
		this.$newListForm.html(newView.render().$el);

    return showView;
  },

	createList: function (event) {
		event.preventDefault();

		var list = {
			title: $(event.target).find('input#title').val(),
			board_id: this.model.id
		};

		this.model.lists().create(list, {
			wait: true,

			success: function (list) {
				console.log(arguments);
				//Backbone.history.navigate(board.url(), {trigger: true});
			},

			error: function (list, xhr) {
				// what do we do with a failure?
				console.log(arguments);
				//console.log(this);
				//this.$newBoardForm.find('input#title').val(xhr.)
			}.bind(this)
		});
	}
});