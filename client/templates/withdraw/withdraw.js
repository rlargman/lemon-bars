Template.withdraw.events({
  "submit .new-withdrawal": function (event) {
    // This function is called when the new withdrawal form is submitted

    var amount = parseFloat(event.target.withdrawAmount.value);
    if (!amount) {
      return false;
    }
    amount = amount * -1.00;

    var description = event.target.withdrawDescription.value;

    Transactions.insert({
      amount: amount,
      createdAt: new Date(),
      description: description
    });

    // Clear form
    event.target.withdrawDescription.value = "";

    // Prevent default form submit
    return false;
  }
});