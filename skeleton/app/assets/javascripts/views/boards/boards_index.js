TrelloClone.Views.BoardsIndex = Backbone.View.extend({

  template: JST['boards/index'],

  initialize: function () {
    this.listenTo(this.collection, "sync remove", this.render);
		this.subViews = [];
  },

	events: {
		'submit form': 'create',
		'click button.delete-board': 'destroy'
	},

  render: function () {
    var indexView = this;

    var content = indexView.template();
    indexView.$el.html(content);

		// get subview elements
		this.$lists = this.$('ul#lists');
		this.$newBoardForm = this.$('div#newBoardForm');

		// add board items to list
    indexView.collection.each(function (board) {
      var itemView = new TrelloClone.Views.BoardItem({
        model: board
      });
			indexView.subViews.push(itemView);
      indexView.$lists.append(itemView.render().$el);
    });

		// add form for new boards
		var newView = new TrelloClone.Views.BoardNew({});
		this.subViews.push(newView);
		this.$newBoardForm.html(newView.render().$el);

    return indexView;
  },

	create: function (event) {
		event.preventDefault();

		var board = {
			title: $(event.target).find('input#title').val()
		};

		this.collection.create(board, {
			wait: true,

			success: function (board) {
				console.log(arguments);
				Backbone.history.navigate(board.url(), {trigger: true});
			},

			error: function (board, xhr) {
				// what do we do with a failure?
				console.log(xhr);
				//console.log(this);
				//this.$newBoardForm.find('input#title').val(xhr.)
			}.bind(this)
		});
	},

	destroy: function (event) {
		event.preventDefault();
		var id = $(event.currentTarget).data('board-id');
		console.log(id);
		var board = this.collection.get(id);
		console.log(board);
		board.destroy();
	}
});
