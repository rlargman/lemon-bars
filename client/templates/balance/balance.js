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