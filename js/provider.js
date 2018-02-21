var module = angular.module("myModule", []);

module.provider("myProvider", function () {
  this.value = "myValue";
  this.setValue = function(newValue) {
    this.value = newValue;
  };
  this.$get = function () {
    console.log("this.$get got called");
    return this.value;
  };
});
//provider will be called only once first time provider gets injected then in the subsequent call
//it will take the value only
//provider can be accessed from configuration
module.controller("myController", function(myProvider) {
   console.log('myProvider' + myProvider);
});

module.controller("myController2", function(myProvider) {
   console.log('myProvider' + myProvider);
});

module.config(function (myProviderProvider) {
  myProviderProvider.setValue("This is Nidhin");
});
