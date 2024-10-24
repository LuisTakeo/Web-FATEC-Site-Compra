const cart = [];

const cartContainer = document.createElement('section');
cartContainer.classList.add('cart-container', 'max-w-4xl', 'mx-auto', 'p-6', 'bg-white', 'shadow-lg', 'rounded-lg');

const cartTitle = document.createElement('h1');
cartTitle.className = "text-3xl font-bold mb-4 text-gray-800";
cartTitle.textContent = "Carrinho";
cartContainer.appendChild(cartTitle);

const sortButton = document.createElement('button');
sortButton.className = "bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 mb-4";
sortButton.textContent = "Ordenar por Preço";

cartContainer.appendChild(sortButton);

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
cartTotal.textContent = "R$0.00";
cartContainer.appendChild(cartTotal);





export {cart, cartContainer, cartList, cartTotal, sortButton};