function changeSelectedTab(nextSelection) {
  $prevSelected = $('.selected');
  $prevSelected.removeClass('selected');
  $(nextSelection).addClass('selected');
}


Template.menu.events({
  'click #about-nav': function(e, template) {
    changeSelectedTab('#about-nav');
    Router.go('/about');
  },

  'click #balance-nav': function(e, template) {
    changeSelectedTab('#balance-nav');
    Router.go('/balance');
  },

  'click #deposit-nav': function(e, template) {
    changeSelectedTab('#deposit-nav');
    Router.go('/deposit');
  },

  'click #withdraw-nav': function(e, template) {
    changeSelectedTab('#withdraw-nav');
    Router.go('/withdraw');
  },
});