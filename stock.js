async function loadStock()
{
	const response = await fetch("./stock.json");
	const stock = await response.json();
	return stock;
}

const stock = await loadStock();

const stockContainer = document.createElement('section');
stockContainer.classList.add('grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-6', 'mt-8');

export { stock, stockContainer };