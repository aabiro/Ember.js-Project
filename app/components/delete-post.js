import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  DS: Ember.inject.service('store'),
  modalName: Ember.computed(function(){
     return "deletePost" + this.get('ID');
  }),

  actions: {

    openDeleteModal(thisPost) {
        Ember.$('.ui.' + this.get('modalName') + '.modal').modal({
        closable: false,
        detachable: false,

        onDeny: () => {
          return true;
        },

        onApprove: () => {
          thisPost.destroyRecord();
        }
      })
        .modal('show');
    },
  }
});
