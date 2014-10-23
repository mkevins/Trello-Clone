TrelloClone.Collections.Boards = Backbone.Collection.extend({
  model: TrelloClone.Models.Board,

  url: '/api/boards',

  getOrFetch: function (id) {
    // try to get cached board
    var board = this.get(id);

    // if we don't have it
    if (!board) {
      // build a dummy
      board = new TrelloClone.Models.Board({
        id: id
      });
      // then get it and add it to boards
      var boards = this;
      board.fetch({
        success: function () {
          boards.add(board);
        }
      });
    }
    return board;
  }

});
