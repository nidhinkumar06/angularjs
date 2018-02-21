var module = angular.module("myModule", []);

function MyObject () {
  this.getValue = function () {
    return "My object value";
  };
}

module.factory("myFactory", function () {
    console.log("Factory got called");
    return "MyFactory";
});

module.factory("myFactory2", function () {
   console.log("Factory2 got called");
   return new MyObject();
});

module.controller("myController", function(myFactory) {
     console.log("myFactory" + myFactory);
});

module.controller("myController2", function(myFactory2) {
    console.log("myFactory2" + myFactory2.getValue());
});
