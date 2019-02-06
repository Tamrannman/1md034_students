

function MenuItem(name, kCal, gluten, lactose) {
    this.name = name;
    this.kCal = kCal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.info = function() {
        return this.name + ' ' + this.kCal;
    };
}
function inputStatus() {
  this.name = document.getElementById('name').value;
  this.street = document.getElementById('street').value;
  this.house = document.getElementById('house').value;
  this.email = document.getElementById('email').value;
  this.payment = document.getElementById('payment').options.[selectedIndex].value;
  this.gender = document.getElementById('gender').value;
  this.inputStatus = function() {
    return [this.name,this.street,this.house,this.email,this.payment,this.gender]
  };
}
