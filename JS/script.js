console.log("Connected");

let slides = document.getElementsByClassName("slideImages");
var loop = slides.length;
let sliderIdx = 1;
sliderImage(sliderIdx);

function sliderImage(num) {
    if (num > slides.length) {
        sliderIdx = 1
    }
  
    if (num < 1) {
      sliderIdx = slides.length
    }
  
    for(var i = 0; i < loop; i++) {
      slides[i].style.display = "none";
    }
  
    slides[sliderIdx-1].style.display = "block";
}

function prevSlide(num) {
    sliderImage(sliderIdx = num);
}

function nextSlides(num){
    sliderImage(sliderIdx += num);
}
  
function SubmitForm(form){
    if(!validateProduct(form.product.value)){
        return false;
    }
    if(!validateQuantity(form.quantity.value)){
        return false;
    }
    if(!validateColor(form.color.value)){
        return false;
    }
    if(!validateName(form.name.value)){
        return false;
    }
    if(!validatePhone(form.phone.value)){
        return false;
    }
    if(!validateAddress(form.address.value)){
        return false;
    }
    if(confirm("Are you sure with this reservation?\n" + "Name: " + form.name.value
                + "\n" + "Phone: " + form.phone.value
                + "\n" + "Address: " + form.address.value
                + "\n" + "Product: " + form.product.value
                + "\n" + "Quantity: " + form.quantity.value
                + "\n" + "Color: " + form.color.value)){
        return true;
    }else{
        return false;
    }
}

function validateProduct(data){
    if(data === ""){
        alert("You must enter a product name.");
        return false;
    }
    return true;
}

function validateQuantity(data){
    if(data === ""){
        alert("You must enter the quantity of the product.");
        return false;
    }
    return true;
}

function validateColor(data){
    if(data === ""){
        alert("You must choose the color of the product.");
        return false;
    }
    return true;
}

function validateName(data){
    if(data === ""){
        alert("You must enter your name.");
        return false;
    }
    return true;
}

function validatePhone(data){
    if(data === ""){
        alert("You must enter your phone number.");
        return false;
    }
    return true;
}

function validateAddress(data){
    if(data === ""){
        alert("You must enter your address.");
        return false;
    }
    return true;
}



