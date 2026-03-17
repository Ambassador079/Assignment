const container = document.querySelector("#container");

const getProduct = async () => {
    try {
        const res = await fetch("https://dummyjson.com/products");

        if (!res.ok) throw new Error("Failed to fetch product");

        const data = await res.json();
        console.log(data);
        data.products.forEach((product) => {
            const productE1 = document.createElement("div");
            productE1.classList.add("product-card");
            productE1.innerHTML = `
            <span class="menu">⋮</span>
            <img src="${product.thumbnail}" alt="product image">
            <h3>${product.title}</h3>
            <strong>$${product.price}</strong>
            <p class="desc">${product.description}</p>
           
            <button>Add to Cart</button>
            `;

            const menu = productE1.querySelector(".menu");
            const desc = productE1.querySelector(".desc");

            menu.addEventListener("click", () => {
                desc.classList.toggle("show");
            });

            container.appendChild(productE1);
        });

    } catch (error) {
        console.log("error", error);
    }
};

getProduct();