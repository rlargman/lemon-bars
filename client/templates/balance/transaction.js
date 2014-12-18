var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

Template.transaction.helpers({
  formatDate: function(date) {
    var currDate = date.getDate();
    var currMonth = date.getMonth(); 
    var currYear = date.getFullYear();
    return monthNames[currMonth] + " " + currDate + ", " + currYear;
  },

  formatAmount: function(amount) {
    return amount.toFixed(2);
  }
});