
var shop = {
    custormerName: "Bello",
    totalPrice: 0,
    products: [
        "Broooklyn T-shirt white",
        "Broooklyn T-shirt black",
        "apple watch",
        "android phone"

    ],
    prices : [10, 10, 199,159],

   displayCustomerName: function() {
      var custormerElement = document.getElementById('custormer-name');
      custormerElement.textContent = this.custormerName;
   },


   displayProductList: function(){

     var productsText ="";
     //empty string to add the product list //
     var productsElement = document.getElementById("product-list");
     //this is where we call the ID of the list of the product//
     productsText +="<li class='list-group-item'><span class='badge'>$"+this.prices[0]+"</span>"+this.products[0]+"</li>";
     productsText +="<li class='list-group-item'><span class='badge'>$"+this.prices[1]+"</span>"+this.products[1]+"</li>";
     productsText +="<li class='list-group-item'><span class='badge'>$"+this.prices[2]+"</span>"+this.products[2]+"</li>";
     productsText +="<li class='list-group-item'><span class='badge'>$"+this.prices[3]+"</span>"+this.products[3]+"</li>";
     //adding price and the product name in the list (li)//

     productsElement.innerHTML = productsText;

   },

   calculeteTotalprice: function(){
      return (this.prices[0] + this.prices[1] + this.prices[2] + this.prices[3]) * 0.75;

   },
   displayTotalPrice: function(){
        this.totalPrice = this.calculeteTotalprice();
    var totalpriceElement = document.getElementById("total-price");
        totalpriceElement.textContent = this.totalPrice;

   },

  

}


shop.displayCustomerName();
shop.displayProductList();
shop.displayTotalPrice();

// //arrey of product name //
// var products =[
//      "Broooklyn T-shirt white",
//      "Broooklyn T-shirt black",
//      "apple watch",
//      "android phone"
//      ];
// //Arrey of prices//
// var prices =[10, 10, 199,159];

// var custormerName = "Bello Doro" ;
// //product list //
// var productsText ="";
// //empty string to add the product list //
// var productsElement = document.getElementById("product-list");
// //this is where we call the ID of the list of the product//
// productsText +="<li class='list-group-item'><span class='badge'>$"+prices[0]+"</span>"+products[0]+"</li>";
// productsText +="<li class='list-group-item'><span class='badge'>$"+prices[1]+"</span>"+products[1]+"</li>";
// productsText +="<li class='list-group-item'><span class='badge'>$"+prices[2]+"</span>"+products[2]+"</li>";
// productsText +="<li class='list-group-item'><span class='badge'>$"+prices[3]+"</span>"+products[3]+"</li>";
// //adding price and the product name in the list (li)//

// productsElement.innerHTML = productsText;
// //this is where we add the string to the HTML//
// var custormerElement = document.getElementById("custormer-name");
//     custormerElement.textContent = custormerName;
// //this where we calculet total price of the product/
// var totalPrice = 0;
//     totalPrice = prices[0] + prices[1] + prices[2] + prices[3];

//     var dicount = 0;
//    dicount = totalPrice * 0.25;

//    var finalPrice = totalPrice - dicount;


// var totalpriceElement = document.getElementById("total-price");
//     totalpriceElement.textContent = finalPrice 

// var myDate = new Date();
// var hour = myDate.getHours();
// var hello;
// if (hour>0 && hour<=12)
// 	hello = 'Good Morning';
// else if (hour>12 && hour<=18)
// 	hello = 'Good Afternoon';
// else if (hour>=19 && hrs<=23)
// 	hello = 'Good Evening';
// document.getElementById('greeting').innerHTML = hello;

   



