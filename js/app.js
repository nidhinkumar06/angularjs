var app = angular.module("myModule", []);

var MyFunc = function () {
    this.name = "default name";
    this.$get = function () {
        this.name = "new name"
        return "Hello from MyFunc.$get(). this.name = " + this.name;
    };
    return "Hello from MyFunc(). this.name = " + this.name;
};

// returns a new instance of the function
app.service('myService', MyFunc);

// returns the function's return value
app.factory('myFactory', MyFunc);

// returns the output of the function's $get function
app.provider('myProv', MyFunc);

app.constant('myConstant', "Nidhinkuamr"); //can be a string, number, array, object or even a function works only during boot

app.value('myValue', "Nidhin"); //works during run phase

app.controller('myController', function ($scope, myService, myFactory, myProv, myConstant, myValue) {
    console.log("myService = " + myService);
    console.log("myFactory = " + myFactory);
    console.log("myProvider = " + myProv);
    console.log("myConstant = " + myConstant);
    console.log("myValue = " + myValue);
});
