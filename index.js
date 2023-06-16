 window.customerName = 'bob';
  var bestCustomer;
  const leastFavoriteCustomer = "Njoroge";


 function upperCaseCustomerName(){
     window.customerName = window.customerName.toUpperCase();
 }
 console.log(window.customerName)

 
 function setBestCustomer(){
    bestCustomer = 'not bob'
  
 }
 console.log(setBestCustomer)

 function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';

 }
 console.log(overwriteBestCustomer)

 function changeLeastFavoriteCustomer(){ 
    leastFavoriteCustomer = 'Mike';
    return 'Assignment to constant variable.'
 }
 console.log(changeLeastFavoriteCustomer)
