

var ProductName = document.getElementById ("ProductName")
var ProductPrice = document.getElementById ("ProductPrice")
var ProductCategory = document.getElementById ("ProductCategory")
var Productdescription = document.getElementById ("Productdescription")
var searchinput = document.getElementById("search")


var productlist

if (localStorage.getItem("list")!= null){

    productlist = JSON.parse(localStorage.getItem("list"))
}
else{
    productlist =[]
}

display()


function addproduct (){
  if(validname() && validprice()){

    var product ={
        name :ProductName.value,
        price :ProductPrice.value,
        category :ProductCategory.value,
        desc :Productdescription.value
    }

    productlist.push(product)
    localStorage.setItem("list",JSON.stringify(productlist)) 
    display()

  }

    
}

// [{},{}]
// temp ="tr1tr1tr2"

function display(){
    
    var temp = ""
    
    for (var i=0 ;i<productlist.length;i++ ){

        temp+= ` <tr>
        <td>`+i+`</td>
        <td>${productlist[i].name}</td>
        <td>${productlist[i].price}</td>
        <td>`+productlist[i].category+`</td>
        <td>`+productlist[i].desc+`</td>
        <td><button class="btn btn-outline-primary"onclick="updateproduct(`+i+`)">Update</button></td>
        <td><button class="btn btn-outline-danger" onclick="deletproduct(`+i+`)">delete</button></td>
     </tr>`

    }

   document.getElementById("myData").innerHTML = temp
}


function deletproduct(index){
   
    productlist.splice(index,1)
    localStorage.setItem("list",JSON.stringify(productlist))
    console.log(productlist)
    display()
}


var edit
function updateproduct(index){  

    ProductName.value = productlist[index].name
    ProductPrice.value =productlist[index].price
    ProductCategory.value =productlist[index].category
    Productdescription.value =productlist[index].desc

    document.getElementById("editbtn").style.display ="inline"
    document.getElementById("addbtn").style.display ="none"
         
    edit =index
    
}


function addEdit(){

    var product ={
        name :ProductName.value,
        price :ProductPrice.value,
        category :ProductCategory.value,
        desc :Productdescription.value
    }

    productlist[edit] = product
    localStorage.setItem("list",JSON.stringify(productlist))
    display()

    
    document.getElementById("editbtn").style.display ="none"
    document.getElementById("addbtn").style.display ="inline"

    console.log(productlist[edit])
    console.log(edit)

}


// function addEdit(){

//     productlist[edit].name = ProductName.value  
//     productlist[edit].price = ProductPrice.value
//     productlist[edit].category = ProductCategory.value
//     productlist[edit].desc = Productdescription.value 
//     localStorage.setItem("list",JSON.stringify(productlist))
//     display()

    // document.getElementById("editbtn").style.display ="none"
    // document.getElementById("addbtn").style.display ="inline"

//     console.log(productlist[edit])
//     console.log(edit)

// }





function clearform (){

    ProductName.value =""
    ProductPrice.value =""
    ProductCategory.value =""
    Productdescription.value =""

}


function search(){

    console.log(searchinput.value)
    console.log(productlist)

    var cartona=""

    for (var i =0 ; i<productlist.length ; i++){

        if ( productlist[i].name.toLowerCase().includes(searchinput.value.toLowerCase())
        ||
             productlist[i].category.toLowerCase().includes(searchinput.value.toLowerCase())       
        )
        { //qqqq
            cartona+= ` <tr>
            <td>`+i+`</td>
           
            <td>`+productlist[i].name.toLowerCase().replace(searchinput.value.toLowerCase(), "<span class = 'text-danger'>"+searchinput.value.toLowerCase()+"</span>")+`</td>
            <td>`+productlist[i].price+`</td>
            <td>`+productlist[i].category.replace(searchinput.value, "<span class = 'text-danger'>"+searchinput.value+"</span>")+`</td>
            <td>`+productlist[i].desc+`</td>
            <td><button class="btn btn-outline-primary"onclick="updateproduct(`+i+`)">Update</button></td>
            <td><button class="btn btn-outline-danger" onclick="deletproduct(`+i+`)">delete</button></td>
         </tr>`

        } 
    }

    document.getElementById("myData").innerHTML =cartona
    console.log(cartona)

}




function validname(){
    var valedtest =false
    var regex = /^[A-Z][a-z]{3,8}[0-9]?$/

    if (regex.test(ProductName.value)){
        document.getElementById("alertname").style.display ="none"
        console.log("tmam") 
        valedtest =true
    }
    else{
        document.getElementById("alertname").style.display ="block"
        console.log("mohstmam")  

        valedtest= false
    }

     return valedtest

}


function validprice (){
    var validTest=false
    var regex = /^[0-9]{2,5}$/

    

    if (regex.test( ProductPrice.value)){
        document.getElementById("alertprice").style.display ="none"
        console.log("tmam") 
        validTest=true
    }
    else{
        document.getElementById("alertprice").style.display ="block"
        console.log("mohstmam")  
        validTest=false
    }

    return validTest

}





















// function search(){
//     var searchvalue = searchinput.value
//     var cartona =""

//     for (var i =0 ; i<productlist.length ;i++) {
//         if (productlist[i].name.toLowerCase().includes(searchvalue.toLowerCase())
//         ||
//         productlist[i].category.toLowerCase().includes(searchvalue.toLowerCase())
//         )
// {
    

//     cartona += ` <tr>
//     <td>`+i+`</td>
//     <td>`+productlist[i].name.replace(searchvalue , "<span class= 'text-danger'>" + searchvalue + "</span>")+`</td>
//     <td>`+productlist[i].price+`</td>
//     <td>`+productlist[i].category.replace(searchvalue , "<span class= 'text-danger'>" + searchvalue + "</span>")+`</td>
//     <td>`+productlist[i].desc+`</td>
//     <td><button class="btn btn-outline-primary"onclick="updateproduct(`+i+`)">Update</button></td>
//     <td><button class="btn btn-outline-danger" onclick="deletproduct(`+i+`)">delete</button></td>
//        </tr>`

//     }
// }
// document.getElementById("myData").innerHTML = cartona
// }























// localStorage.setItem("route", "frontend")
// localStorage.setItem("route2", "backend")

// console.log(localStorage."route"))












// var ProductName = document.getElementById("ProductName")
// var ProductPrice = document.getElementById("ProductPrice")
// var ProductCategory = document.getElementById("ProductCategory")
// var Productdescription = document.getElementById("Productdescription")


// var productlist =[]

// function addproduct() {
    
    

//     var product = {
        
//         name : ProductName.value,
//         price: ProductPrice.value ,
//         category : ProductCategory.value,
//         desc : Productdescription.value
//     }
    
//     productlist.push(product)
//  //    console.log(productlist)
//     display()
// }


// function display(){
//     console.log(productlist)
//     console.log( productlist.length)

//    var temp = "";
//     for (var i =0 ; i< productlist.length ; i++){

//         temp+=` <tr>
//         <td>0</td>
//         <td>nokia</td>
//         <td>5000</td>
//         <td>mobile</td>
//         <td>Lorem ipsum dolor sit.</td>
//         <td><button class="btn btn-outline-primary">Update</button></td>
//         <td><button class="btn btn-outline-danger"onclick="">delete</button></td>
//     </tr>`
//     }

//     document.getElementById('myData').innerHTML =temp
//     console.log(document.getElementById('myData').innerHTML)
// }




//JSON =area of object

// {
//     { name:"nokia" , price : 9000}
//     { name:"nokia" , price : 9000}
//     { name:"nokia" , price : 9000}
// }

// var edit 
// function updateproduct(index){



//     console.log(productlist[index])
//     ProductName.value= productlist[index].name
//     ProductPrice.value=productlist[index].price
//     ProductCategory.value=productlist[index].categry
//     Productdescription.value=productlist[index].desc

//     document.getElementById("editbtn").style.display = "inline "
//     document.getElementById("addbtn").style.display = "none "

//     edit=index
 
// }


// function addEdit(){

   
//     console.log(productlist[edit].name = ProductName.value)
//     console.log(productlist[edit].price = ProductPrice.value)
//     console.log(productlist[edit].category =  ProductCategory.value)
//     console.log(productlist[edit].desc = Productdescription.value)
//     localStorage.setItem("list",JSON.stringify(productlist))
//     display()
//     console.log(productlist[edit])
//     // console.log(edit)

// }
















// regualr expression
/*
* ?=> zero or one time
* + => one or unlimited time
* * => zero or unlimited time
*
*/ 