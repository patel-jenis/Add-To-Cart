let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartContainer = document.getElementById("cartContainer");

function updateCart() {
    document.getElementById("count").innerHTML = cart.length;
}

function removeProduct(idx) {
    cart.splice(idx, 1);
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();
    displayCart();
}

function displayCart() {
    cartContainer.innerHTML = "";

    cart.forEach((product, idx) => {

        let subTotal = product.price * product.quantity;

        cartContainer.innerHTML += `
            <div class="row align-items-center my-4">
                <div class="col-1">
                    <div>
                        <img src="${product.imageUrl}" alt="book" class="img-fluid rounded-2 shadow">
                    </div>
                </div>
                <div class="col-3">
                    <div class="text-center">
                        <h3 class="mb-0">${product.name}</h3>
                    </div>
                </div>
                <div class="col-2">
                    <div class="text-center">
                        <h4 class="mb-0">$${product.price}</h4>
                    </div>
                </div>
                <div class="col-2">
                    <div class="d-flex align-items-center justify-content-center">
                        <button class="btn qnt-btn"><i class="ri-subtract-line"></i></button>
                        <h5 class="mx-3 mb-0">${product.quantity}</h5>
                        <button class="btn qnt-btn"><i class="ri-add-line"></i></button>
                    </div>
                </div>
                <div class="col-2">
                    <div class="text-center">
                        <h3 class="text-success mb-0">${subTotal}</h3>
                    </div>
                </div>
                <div class="col-2">
                    <div class="text-center">
                        <button class="btn btn-danger" onclick="removeProduct(${idx})"><i class="ri-delete-bin-2-line"></i></button>
                    </div>
                </div>
            </div>
        `
    });
}

document.addEventListener("DOMContentLoaded", function() {
    updateCart();
    displayCart();
})
