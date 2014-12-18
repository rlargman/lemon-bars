Template.deposit.events({
  "submit .new-deposit": function (event) {
    // This function is called when the new withdrawal form is submitted

    var amount = parseFloat(event.target.depositAmount.value);
    if (!amount) {
      return false;
    }

    var description = event.target.depositDescription.value;

    Transactions.insert({
      amount: amount,
      createdAt: new Date(),
      description: description
    });

    // Clear form
    event.target.depositDescription.value = "";

    // Prevent default form submit
    return false;
  }
});