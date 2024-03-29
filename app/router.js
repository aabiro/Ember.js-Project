import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('home', {path: '/'});
  this.route('contact', function() {
    this.route('phone');
    this.route('email');
  });
  this.route('posts', function() {
    this.route('edit-post');
    this.route('delete-post');
  });
});

export default Router;
