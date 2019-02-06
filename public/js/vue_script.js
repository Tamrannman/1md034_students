
//var burger1 = document.getElementById('burger1').value;
//var burger2 = document.getElementById('burger2').value;
//var burger3 = document.getElementById('burger3').value;
var name = document.getElementById('name').value;
var street = document.getElementById('street').value;
var house = document.getElementById('house').value;
var email = document.getElementById('email').value;


var vm = new Vue({
    el: '#burgerMenu',
    data: {
      food: food
  }
})

new Vue({
    el: '#orders',
    methods: {
        markDone: function() {
            //Add some functionality
            console.log('button pressed!')
            var status = new inputStatus();
            console.log(status.inputStatus());
        }
    }
});
