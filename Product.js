/**
 * Representa un producto dentro de la aplicación.
 */
export class Product {
  /**
   * @param {string} nombre - Nombre del producto
   * @param {number|string} precio - Precio del producto
   * @param {number|string} año - Año de creación o fabricación
   */
  constructor(nombre, precio, año) {
    this.nombre = nombre;
    this.precio = Number(precio);
    this.año = Number(año);
  }
}
