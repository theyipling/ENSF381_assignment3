/* PRODUCTS */

document.addEventListener('DOMContentLoaded', function () {
            const addToCartButtons = document.querySelectorAll('.prodItem button');

            addToCartButtons.forEach(button => {
                button.addEventListener('click', addToCart);
            });

            function addToCart(event) {
                const productItem = event.target.closest('.prodItem');
                const productName = productItem.querySelector('h2').textContent;
                const productPrice = productItem.querySelector('p').textContent;
                const cartItem = document.querySelector(`[data-product="${productName}"]`);

                if (cartItem) {
                    const quantityElement = cartItem.querySelector('.quantity');
                    let quantity = parseInt(quantityElement.textContent);
                    quantity++;
                    quantityElement.textContent = quantity;
                } else {
                    const cart = document.getElementById('cart');
                    const cartItem = document.createElement('li');
                    cartItem.setAttribute('data-product', productName);
                    cartItem.innerHTML = `
                        <span>${productName}</span> - ${productPrice.slice(productPrice.indexOf('$'))} - <span class="quantity">1</span>
                        <button class="removeButton">Remove</button>
                    `;
                    cart.appendChild(cartItem);
                }

                alert('Product added to cart.');

                updateRemoveButtons();
            }

            function updateRemoveButtons() {
                const removeButtons = document.querySelectorAll('.removeButton');
                removeButtons.forEach(button => {
                    button.addEventListener('click', removeFromCart);
                    button.addEventListener('mouseover', changeButtonColor);
                    button.addEventListener('mouseout', resetButtonColor);
                });
            }

            function removeFromCart(event) {
                const cartItem = event.target.closest('li');
                const quantityElement = cartItem.querySelector('.quantity');
                let quantity = parseInt(quantityElement.textContent);
                quantity--;
                if (quantity === 0) {
                    cartItem.remove();
                } else {
                    quantityElement.textContent = quantity;
                }
            }

            function changeButtonColor(event) {
                event.target.style.backgroundColor = '#ff0000';
            }

            function resetButtonColor(event) {
                event.target.style.backgroundColor = '#4CAF50';
            }
        });