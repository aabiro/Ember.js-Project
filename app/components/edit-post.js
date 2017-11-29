import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  DS: Ember.inject.service('store'),
  modalName: Ember.computed(function(){
    return "editPost" + this.get('ID');
  }),

  actions: {
    openEditModal(thisPost) {
      console.log(this.get('ID'));

      var post = this.get('DS').findRecord('post', this.get('ID'));

      const title = thisPost.get('title');
      const body = thisPost.get('body');

      this.set('title', post.get('title'));
      this.set('body', post.get('body'));

      Ember.$('.ui.' + this.get('modalName') + '.modal').modal({
        closable: false,
        detachable: false,

        onDeny: () => {
        console.log(thisPost.get('changedAttributes'));
          thisPost.rollbackAttributes();
          //post.save();
          thisPost.save();
          return true;
        },



        onApprove: () => {

          var post = this.get('DS').findRecord('post', this.get('ID')).then(function(post) {
          post.set('title', this.get('title'));
          post.set('body', this.get('body'));
          //post.set('hasDirtyAttributes', false);
          post.save();

          console.log(post.changedAttributes());
          return true;

          });
        }
      })
        .modal('show');
    }
  }
});
