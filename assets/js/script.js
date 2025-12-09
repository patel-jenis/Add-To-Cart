let products = [
    {
        id: 1,
        name: "House of Sky Breath",
        price: 870,
        imageUrl: "https://themewagon.github.io/Bookly/images/product-item1.png"
    },
    {
        id: 2,
        name: "Heartland Stars",
        price: 870,
        imageUrl: "https://themewagon.github.io/Bookly/images/product-item2.png"
    },
    {
        id: 3,
        name: "Heavenly Bodies",
        price: 870,
        imageUrl: "https://themewagon.github.io/Bookly/images/product-item3.png"
    },
    {
        id: 4,
        name: "His Saving Grace",
        price: 870,
        imageUrl: "https://themewagon.github.io/Bookly/images/product-item4.png"
    },
    {
        id: 5,
        name: "My Dearest Darkest",
        price: 870,
        imageUrl: "https://themewagon.github.io/Bookly/images/product-item5.png"
    },
    {
        id: 6,
        name: "The Story of Success",
        price: 870,
        imageUrl: "https://themewagon.github.io/Bookly/images/product-item6.png"
    },
];

let cartCount = document.getElementById("count");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

let review = [
    {
        id: 1,
        disc: "I stumbled upon this bookstore while visiting the city, and it instantly became my favorite spot. The cozy atmosphere, friendly staff, and wide selection of books make every visit a delight!",
        name: "Emma Chamberlin"
    },
    {
        id: 2,
        disc: "As an avid reader, I'm always on the lookout for new releases, and this bookstore never disappoints. They always have the latest titles, and their recommendations have introduced me to some incredible reads!",
        name: "Thomas John"
    },
    {
        id: 3,
        disc: "I ordered a few books online from this store, and I was impressed by the quick delivery and careful packaging. It's clear that they prioritize customer satisfaction, and I'll definitely be shopping here again!",
        name: "Kevin Bryan"
    },
    {
        id: 4,
        disc: "I stumbled upon this tech store while searching for a new laptop, and I couldn't be happier with my experience! The staff was incredibly knowledgeable and guided me through the process of choosing the perfect device for my needs. Highly recommended!",
        name: "Stevin"
    },
    {
        id: 5,
        disc: "I stumbled upon this tech store while searching for a new laptop, and I couldn't be happier with my experience! The staff was incredibly knowledgeable and guided me through the process of choosing the perfect device for my needs. Highly recommended!",
        name: "Roman"
    },
];

const productRow = document.getElementById("productRow");
const reviewRow = document.getElementById("reviewRow");

function addToCart(productId) {
    const product = products.find((pro) => {
        return pro.id === productId;
    });

    product.quantity = 1;

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    
    Swal.fire({
        icon: "success",
        title: "Added in Cart",
        showConfirmButton: false,
        timer: 1500
    });
}

function updateCartCount() {
    cartCount.innerHTML = cart.length;
}

products.forEach((pro, idx) => {
    productRow.innerHTML += `
        <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card">
                <img src="${pro.imageUrl}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                    <h5 class="card-title mb-1">${pro.name}</h5>
                    <p class="card-text mb-2">
                        Lauren Asher
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                    </p>
                    <h4>$${pro.price}</h4>
                    <button class="btn cart-btn" onclick="addToCart(${pro.id})">
                        <i class="ri-shopping-bag-4-line"></i>
                        Add to Cart
                    </button>
                </div>
            </div> 
        </div>
    `
});

review.forEach((review) => {
    reviewRow.innerHTML += `
        <div class="swiper-slide">
            <div class="slide-inner">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-xl-8 col-lg-9">
                            <div class="review-sec p-5 text-start bg-light rounded-3">
                                <p>"${review.disc}"</p>
                                <p class="mb-1 stars">
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                </p>
                                <h5>${review.name}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
});

updateCartCount();