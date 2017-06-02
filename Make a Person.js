var Person = function(firstAndLast) {
  var names = firstAndLast;

  this.getFirstName = function() {
    return names.split(" ")[0];
  };
  this.getLastName = function() {
    return names.split(" ")[1];
  };
  this.getFullName = function() {
    return names;
  };

  this.setFirstName = function(name) {
    names = name + " " + names.split(" ")[1];
  };
  this.setLastName = function(name) {
    names = names.split(" ")[0] + " " + name;
  };
  this.setFullName = function(name) {
    names = name;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
