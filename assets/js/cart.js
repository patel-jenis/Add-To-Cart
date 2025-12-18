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

function updateQuantity(idx, qty) {
    cart[idx].quantity += qty;


    if (cart[idx].quantity <= 0) {
        removeProduct(idx);
    } else {
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
    }
}

function displayCart() {
    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach((product, idx) => {

        let subTotal = product.price * product.quantity;
        total += subTotal;

        cartContainer.innerHTML += `
            <div class="row align-items-center my-md-4 my-5 gy-4">
                <div class="col-md-2 col-4">
                    <div class="text-center">
                        <button class="btn btn-delete" onclick="removeProduct(${idx})"><i class="ri-delete-bin-2-line"></i></button>
                    </div>
                </div>
                <div class="col-md-1 col-2">
                    <div>
                        <img src="${product.imageUrl}" alt="book" class="img-fluid rounded-2 shadow">
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="text-center">
                        <h3 class="mb-0">${product.name}</h3>
                    </div>
                </div>
                <div class="col-md-2 col-4">
                    <div class="text-center">
                        <h4 class="mb-0">$${product.price}</h4>
                    </div>
                </div>
                <div class="col-md-2 col-4">
                    <div class="d-flex align-items-center justify-content-start">
                        <button class="btn qnt-btn" onclick="updateQuantity(${idx}, -1)"><i class="ri-subtract-line"></i></button>
                        <h5 class="mx-3 mb-0">${product.quantity}</h5>
                        <button class="btn qnt-btn" onclick="updateQuantity(${idx}, 1)"><i class="ri-add-line"></i></button>
                    </div>
                </div>
                <div class="col-md-2 col-4">
                    <div class="text-center">
                        <h4 class="text-success mb-0">$${subTotal}</h4>
                    </div>
                </div>
            </div>
        `
    });

    if (cart.length === 0) {
        document.getElementById("total").innerHTML = "";
        document.getElementById("total-text").innerHTML = "";

        document.getElementById("totalRow").classList.add("d-none");
        document.getElementById("clear-sec").classList.add("d-none");
        document.getElementById("check-out-sec").classList.add("d-none");
    } else {
        document.getElementById("total").innerHTML = `$${total}`;
    }
}

function clearCart() {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
    updateCart();

    document.getElementById("totalRow").classList.add("d-none");
    document.getElementById("clear-sec").classList.add("d-none");
    document.getElementById("check-out-sec").classList.add("d-none");
}


document.addEventListener("DOMContentLoaded", function () {
    if (cart.length === 0) {
        document.getElementById("totalRow").classList.add("d-none");
        document.getElementById("clear-sec").classList.add("d-none");
        document.getElementById("check-out-sec").classList.add("d-none");
    }
    updateCart();
    displayCart();
})

document.getElementById("clear").addEventListener("click", function () {
    clearCart();
})

document.getElementById("check-out").addEventListener("click", function () {
    Swal.fire({
        icon: "success",
        title: "Order Delivered...",
        showConfirmButton: false,
        timer: 1500
    });
    clearCart();
})

document.getElementById("sortPrice").addEventListener("change", function() {
    if(this.value == 1) {
        cart.sort((a, b) => b.price - a.price);
    } else {
        cart.sort((a, b) => a.price - b.price);
    }

    displayCart();
})
