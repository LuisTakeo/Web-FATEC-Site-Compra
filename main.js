import { loadStock } from "./stock.js";

const cart = [];
const stock = await loadStock();

const app = document.getElementById('app');

// Container do carrinho
const cartContainer = document.createElement('section');
cartContainer.classList.add('cart-container', 'max-w-4xl', 'mx-auto', 'p-6', 'bg-white', 'shadow-lg', 'rounded-lg');
app.appendChild(cartContainer);

// Título do carrinho
const cartTitle = document.createElement('h1');
cartTitle.className = "text-3xl font-bold mb-4 text-gray-800";
cartTitle.textContent = "Carrinho";
cartContainer.appendChild(cartTitle);

// Lista de itens no carrinho
const cartList = document.createElement('ul');
cartList.classList.add('cart', 'space-y-6');
cartContainer.appendChild(cartList);

// Título do total
const cartTotalTitle = document.createElement('h2');
cartTotalTitle.className = "text-xl font-semibold text-gray-800 mt-6";
cartTotalTitle.textContent = "Total";
cartContainer.appendChild(cartTotalTitle);

// Parágrafo do total
const cartTotal = document.createElement('p');
cartTotal.className = "text-2xl font-bold text-gray-800";

// Container dos cards de estoque
const stockContainer = document.createElement('div');
stockContainer.classList.add('grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-6', 'mt-8');
app.appendChild(stockContainer);

function generateStock() {
    stockContainer.innerHTML = "";
    stock.stock.forEach((item, i) => {
        const card = document.createElement('div');
        card.classList.add(`item-${i}`, 'bg-white', 'shadow-md', 'p-4', 'rounded-lg', 'border', 'hover:shadow-lg', 'transition-shadow', 'duration-300');

        const cardTitle = document.createElement('h2');
        cardTitle.className = "text-xl font-semibold text-gray-700 mb-2";

        const cardPrice = document.createElement('p');
        cardPrice.className = "text-gray-600 mb-2";

        const cardStock = document.createElement('p');
        cardStock.className = "text-gray-600 mb-4";

        const button = document.createElement('button');
        button.className = "bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600";

        cardTitle.textContent = item.productName;
        cardPrice.textContent = `Preço: R$${item.price}`;
        cardStock.textContent = `Estoque: ${item.quantity}`;
        button.textContent = "Comprar";

        button.addEventListener('click', () => {
            item.quantity--;
            cardStock.textContent = `Estoque: ${item.quantity}`;
            if (item.quantity === 0) {
                button.disabled = true;
                button.classList.add('bg-gray-400', 'cursor-not-allowed');
            }
            const search = cart.find((cartItem) => cartItem.productName === item.productName);
            if (search) {
                search.quantity++;
            } else {
                cart.push({ productName: item.productName, price: item.price, quantity: 1 });
            }
            generateCart();
        });

        card.appendChild(cardTitle);
        card.appendChild(cardPrice);
        card.appendChild(cardStock);
        card.appendChild(button);

        stockContainer.appendChild(card);
    });
}

function generateCart() {
    cartList.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.classList.add('flex', 'justify-between', 'items-center', 'bg-gray-50', 'p-4', 'rounded-lg', 'shadow-sm');

        const listTitle = document.createElement('h2');
        listTitle.className = "text-lg font-semibold text-gray-700";
        const listPrice = document.createElement('p');
        listPrice.className = "text-gray-600";
        const listQuantity = document.createElement('p');
        listQuantity.className = "text-gray-600";

        const removeButton = document.createElement('button');
        removeButton.className = "bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600";
        removeButton.textContent = "Remover";

        removeButton.addEventListener('click', () => {
            if (item.quantity >= 1) {
                stock.stock.forEach((stockItem) => {
                    if (stockItem.productName === item.productName) {
                        stockItem.quantity++;
                    }
                });
            }
            if (item.quantity > 1) {
                item.quantity--;
                listQuantity.textContent = `Quantidade: ${item.quantity}`;
            } else {
                const index = cart.indexOf(item);
                cart.splice(index, 1);
            }
            generateCart();
            generateStock();
        });

        listItem.appendChild(listTitle);
        listItem.appendChild(listPrice);
        listItem.appendChild(listQuantity);
        listItem.appendChild(removeButton);

        listTitle.textContent = item.productName;
        listPrice.textContent = `Preço: R$${item.price}`;
        listQuantity.textContent = `Quantidade: ${item.quantity}`;
        cartList.appendChild(listItem);

        total += item.price * item.quantity;
    });

    cartTotal.textContent = `R$${total.toFixed(2)}`;
    cartContainer.appendChild(cartTotal);
}

generateStock();
