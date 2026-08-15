import { Product } from "./Product.js";
import { UI } from "./UI.js";

// DOM Events
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    // Override the default Form behaviour
    e.preventDefault();

    // Getting Form Values
    const name = document.getElementById("name").value,
      price = document.getElementById("price").value,
      year = document.getElementById("year").value;

    // Create a new Oject Product
    const product = new Product(name, price, year);

    // Create a new UI instance
    const ui = new UI();

    // Input User Validation
    if (name === "" || price === "" || year === "") {
      ui.showMessage("Por favor rellena los campos que se le solicitan", "danger");
    }

    // Save Product
    ui.addProduct(product);
    ui.showMessage("Producto añadido correctamente", "success");
    ui.resetForm();
  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.eliminarProduct(e.target);
  e.preventDefault();
});
