import { Product } from "./Product.js";
import { UI } from "./UI.js";

// DOM Events
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Getting Form Values
    const nombre = document.getElementById("nombre").value,
      precio = document.getElementById("precio").value,
      año = document.getElementById("año").value;

    // Create a new Product Object
    const producto = new Product(nombre, precio, año);

    // Create a new UI instance
    const ui = new UI();

    // Input User Validation
    if (nombre === "" || precio === "" || año === "") {
      ui.showMessage("Please Insert data in all fields", "danger");
      return; // Detiene la ejecución
    }

    // Save Product
    ui.addProduct(producto);
    ui.showMessage("Producto añadido exitosamente", "success");
    ui.resetForm();
  });

// Delete Product
document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});
