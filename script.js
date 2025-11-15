let productsGrid = document.getElementById('product-grid');
let productsArray = [];
let xhr = new XMLHttpRequest();
let url = 'https://my-json-server.typicode.com/mde16042008/marketplace' 

xhr.open('GET',url + '/products');
xhr.responseType = 'json';
xhr.onload = function(){
	let products = xhr.response;
	productsGrid.innerHTML = null;
	products.forEach(p =>{
		productsArray.push(p);
		let pElem = document.createElement('div');
		pElem.classList.add('product');
		pElem.innerHTML = `
			<h2 class="product-name">${p.name}</h2>
			<img  class ="product-photo" src="${p.photo_url}">
			<p class= "product-price" >${p.price}</p>
			<p class="product-desription"><b>Description: </b>${p.description}</p>
			<a href="userProfile.html?id=${p.author_id}">Autor</a>
			<button class="btn">Buy</button>
		`
			productsGrid.append(pElem);

	});
}
xhr.send();





