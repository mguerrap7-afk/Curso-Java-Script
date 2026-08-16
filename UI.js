export class UI {
  addProduct(producto) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");

    element.innerHTML = `
      <div class="card text-center mb-4">
        <div class="card-body">
          <strong>Producto</strong>: ${producto.nombre} -
          <strong>Precio</strong>: ${producto.precio} -
          <strong>Año</strong>: ${producto.año}
          <a href="#" class="btn btn-danger" data-action="delete">Delete</a>
        </div>
      </div>
    `;

    productList.appendChild(element);
  }

  resetForm() {
    document.getElementById("product-form").reset();
  }

  deleteProduct(element) {
    if (element.dataset.action === "delete") {
      element.closest(".card").remove();
      this.showMessage("Producto eliminado exitosamente", "success");
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".container");
    const app = document.querySelector("#App");

    container.insertBefore(div, app);

    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}
