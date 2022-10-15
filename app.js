class Product {
	constructor(name,price,year) {
     this.name = name
     this.price = price
     this.year = year
	}
}
class UI {
	addProduct(product) {
     const productList = document.getElementById("product-list")
	 const element = document.createElement("div")
	 element.innerHTML =  `
      <div class="card text-center mb-4">
 		<div class="card-body">
 		 	<strong>Product</strong>: ${product.name}
 		 	<strong>Price</strong>: ${product.price}
 		 	<strong></strong: ${product.year}
 		 	
 		<div>
 		<a href="#" name="delete" class="btn btn-danger" style="border-radius:1rem;">ELIMINAR</a>
      </div>
	 `
	 productList.appendChild(element)
	 this.resetForm()
	}
	deleteProduct(element) {
        if(element.name === "delete") {
        	element.parentElement.parentElement.parentElement.remove()
        }
	}
	resetForm() {
		document.getElementById("product-form").reset()
	}
	
}
document.getElementById("product-form").addEventListener("submit",(e) =>{ 
    const name = document.getElementById("name").value
	const year = document.getElementById("year").value
	const price = document.getElementById("price").value
	e.preventDefault()
	const product = new Product(name,price,year)
	const ui = new UI()
	ui.addProduct(product)
	
	})
document.getElementById("product-list").addEventListener("click",(e) => {
	const ui = new UI()
	ui.deleteProduct(e.target)
})