async function loadStock()
{
	const response = await fetch("./stock.json");
	const stock = await response.json();
	return stock;
}

export { loadStock };