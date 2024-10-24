import { generateStock, generateCart } from './elements.js';
import { stockContainer } from './stock.js';
import { cart, cartContainer, sortButton } from './cart.js';


const app = document.getElementById('app');

// Adicionando os containers ao app
app.appendChild(cartContainer);
app.appendChild(stockContainer);

// Botão de ordenar
sortButton.addEventListener('click', () => {
    cart.sort((a, b) => b.price - a.price);
    generateCart();
});

// Gerando os itens do estoque
generateStock();


// Função para gerar os itens do estoque
