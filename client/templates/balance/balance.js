Template.balance.helpers({
  currBalance: function() {
    var total = 0.0;
    var transactions = Transactions.find().fetch();
    for (var i = 0; i < transactions.length; i++) {
      var transaction = transactions[i];
      total += transaction.amount;
    }
    return total.toFixed(2);
  }
});


function toggleButtonText() {
  $button = $('#transaction-history');  
  var text = $button.html();
  if (text === 'Show transaction history') {
    $button.html('Hide transaction history');
  } else {
    $button.html('Show transaction history');
  }
}


Template.balance.events({
  'click #transaction-history': function(e, template) {
    var $transactionHistory = $('#transaction-history-wrapper');
    $transactionHistory.toggleClass('hidden');
    toggleButtonText();
  },
});