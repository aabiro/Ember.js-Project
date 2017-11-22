import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  DS: Ember.inject.service('store'),

  actions: {

    openDeleteModal(thisPost) {
      Ember.$('.ui.deletePost.modal').modal({
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
