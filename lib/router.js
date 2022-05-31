Router.configure({
  // Testing testing
  layoutTemplate: 'layout'
});

Router.route('/balance', {
  template: 'balance'
});

Router.route('/withdraw', {
  template: 'withdraw'
});

Router.route('/deposit', {
  template: 'deposit'
});

Router.route('/about', {
  template: 'about'
});

Router.route('/', {
  name: 'home',
  template: 'balance',
});
