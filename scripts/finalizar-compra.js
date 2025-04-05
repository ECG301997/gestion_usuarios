document.addEventListener('DOMContentLoaded', () => {
    // Obtiene el carrito del localStorage o inicializa uno vacío
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Selecciona el contenedor de productos en la página de finalizar compra
    const productsContainer = document.querySelector('.products');
    // Selecciona el elemento para mostrar el precio total
    const finalPriceElement = document.querySelector('.final-price');

    // Función para actualizar la visualización del carrito
    function updateCart() {
        // Limpia el contenedor de productos
        productsContainer.innerHTML = '';
        let total = 0;

        // Recorre los productos en el carrito y los agrega al contenedor
        cart.forEach(item => {
            const productElement = document.createElement('div');
            productElement.classList.add('row');
            productElement.innerHTML = `
                <span><img src="${item.product.img}" alt="${item.product.productName}" class="cart-image"></span>
                <span>${item.product.price}</span>
                <span>
                    <button class="decrease" data-id="${item.product.id}">-</button>
                    ${item.quantity}
                    <button class="increase" data-id="${item.product.id}">+</button>
                </span>
                <span>${item.totalPrice}</span>
            `;
            productsContainer.appendChild(productElement);
            // Suma el precio total de cada producto al total general
            total += item.totalPrice;
        });

        // Actualiza el precio total en la página
        finalPriceElement.textContent = `$${total}`;
    }

    // Función para actualizar la cantidad de un producto en el carrito
    function updateQuantity(productId, action) {
        // Encuentra el índice del producto en el carrito
        const productIndex = cart.findIndex(p => p.product.id === productId);
        if (productIndex !== -1) {
            const product = cart[productIndex];
            if (action === 'increase') {
                product.quantity += 1; // Incrementa la cantidad
            } else if (action === 'decrease') {
                product.quantity -= 1; // Decrementa la cantidad
                if (product.quantity === 0) {
                    cart.splice(productIndex, 1); // Elimina el producto del carrito si la cantidad es cero
                }
            }
            if (product.quantity > 0) {
                product.totalPrice = product.quantity * product.product.price; // Actualiza el precio total
            }
            // Guarda el carrito actualizado en el localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
            // Actualiza la visualización del carrito
            updateCart();
        }
    }

    // Agrega eventos a los botones de aumentar y disminuir cantidad
    productsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('increase')) {
            const productId = Number(event.target.getAttribute('data-id'));
            updateQuantity(productId, 'increase');
        } else if (event.target.classList.contains('decrease')) {
            const productId = Number(event.target.getAttribute('data-id'));
            updateQuantity(productId, 'decrease');
        }
    });

    // Inicializa la visualización del carrito
    updateCart();
});
