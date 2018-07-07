var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  var nameArr = firstAndLast.split(' ');

  this.getFirstName = function() {
    return nameArr[0];
  }

  this.getLastName = function() {
    return nameArr[1];
  }

  this.getFullName = function() {
    return nameArr.join(' ');
  };

  this.setFirstName = function(first) {
    nameArr[0] = first;
  }

   this.setLastName = function(last) {
    nameArr[1] = last;
  }

  this.setFullName = function(firstAndLast) {
    var names = firstAndLast.split(' ');
    nameArr[0] = names[0];
    nameArr[1] = names[1];
  }


  
};

var bob = new Person('Bob Ross');
bob.getFullName();
