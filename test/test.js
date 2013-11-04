
if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to test.";
  };

  Template.copy("hello_copy", "hello");

  Template.hello_copy.greeting = function () {
    return "I am just a copy.";
  }

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}
