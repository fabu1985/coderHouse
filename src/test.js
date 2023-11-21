async function asyncThings(){

    const ProductManager = require("./productManager");

    // Instance new class
    const product = new ProductManager("./products.json");

    await productManager.addProduct("Nexus 6", "Motorola Nexus 6", 1000, "https://www.demoblaze.com/imgs/Nexus_6.jpg", "N6", 12);
    await productManager.addProduct("Iphone 6", "Iphone 6", 2500, "https://www.demoblaze.com/imgs/iphone_6.jpg", "I6", 1);
  
    //await product.updateProduct(2, "Product update test", "This a test product update", 1000, "Without image", "abc789", 100);
    //await product.deleteProduct(2);

    console.log("Products: ");
    const products = await product.getProducts();
    console.log(products);
    /* console.log("Product found: ")
    const productsById = await product.getProductById(2);
    console.log(productsById);
    const productsById_2 = await product.getProductById(4);
    console.log(productsById_2); */
    /* console.log("Product updated: ")
    const pruductUpdated = await product.getProducts()
    console.log(pruductUpdated); */
    /* const newProducts = await product.getProducts();
    console.log(newProducts); */
}

asyncThings();