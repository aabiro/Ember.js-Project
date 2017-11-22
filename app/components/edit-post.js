import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  DS: Ember.inject.service('store'),

  actions: {
    openEditModal(thisPost) {
      //var blogPost = this.get('DS').findRecord('post', 1);
      this.set('title', thisPost.title);
      this.set('body', thisPost.body);
      Ember.$('.ui.editPost.modal').modal({
        closable: false,
        detachable: false,

        onDeny: () => {
          return true;
        },



        onApprove: () => {
          console.log(thisPost.get('title'));

          //var post = thisPost;
          // var thisPost = this.get('DS').findRecord('post', 1).then(function(post) {

            //   console.log(get('title'));
         //console.log(post.get('body'));
  // ...after the record has loaded
          post.set('title', thisPost.get('title'));
          post.set('body', thisPost.get('body'));

          post.save().then(()=> {
             return true;

          console.log(post.changedAttributes());


 });
  // });
 //          // var newPost = this.get('DS').queryRecord('post', { title: thisPost.title }).then(function(post) {
 //          //   // post.get('title');
 //          //   console.log(post.get('title'));
 //          //   console.log(post.get('body'));
 //          //
 //          //     post.set('title', this.get('title'));
 //          //     post.set('body', this.get('body'));
 //
 //              //post.save();
 //
 //            // post.set('title', 'A new post');
 //            //  });
 //            // newPost.save().then(()=> {
 //            //   return true;
 //            // });
 //          //  var newPost = this.get('DS').findRecord(thisPost).then(function (post) {
 //          //   post.set('title', this.get('title'));
 //          //   post.set('body', this.get('body'));
 //          // });
 //          //
 //          //
 //          //
 //          // newPost.save().then(()=> {
 //          //   return true;
 //          // });
 //
 //
        }
      })
        .modal('show');
    }
    // ,
    // update(post){
    //   post.set('title', thisPost.get('title'));
    //   post.set('body', thisPost.get('body'));
    //
    //   post.save()
    // }
  }
});
