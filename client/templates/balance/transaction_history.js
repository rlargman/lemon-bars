Template.transactionHistory.helpers({ 
  transactions: function() {
    return Transactions.find({}, {sort: {createdAt: -1}});
  }
});