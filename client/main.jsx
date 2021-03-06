/* eslint-disable no-undef */
import '/imports/startup/client/routes';
import { Meteor } from 'meteor/meteor';

let lastScrollTop = 0;

Meteor.startup(() => {
  Session.set('vacanciesLimit', 15);
  $(window).scroll(() => {
    // test if we are near the bottom of the window
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      // where are we in the page?
      const scrollTop = $(window).scrollTop();
      // test if we are going down
      if (scrollTop > lastScrollTop) {
        // yes we are heading down...
        Session.set('vacanciesLimit', Session.get('vacanciesLimit') + 3);
      }

      lastScrollTop = scrollTop;
    }
  });
});

