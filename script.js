function calculate() {
    var cQuant = document.getElementById("c-quantity").value;
    var tQuant = document.getElementById("t-quantity").value;
    var pQuant = document.getElementById("p-quantity").value;
    var price = cQuant * 4 + tQuant * 2.4 + pQuant * 5; 
    var PriceText = document.getElementById("price-h");
    PriceText.textContent = "The price is: " + price;
}