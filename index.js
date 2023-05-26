const cart = ["shoe", "ankara", "bag", "shirt"];

const addItemToCart = (item) => {
  if (!cart.includes(item)) {
    cart.push(item);
  }

  return cart;
};

console.log(addItemToCart("trouser"));

const deleteItemfromCart = (item) => {
  let index;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i] === item) {
      index = i;
    }
  }
  cart.splice(index, 1);
  return cart;
};

console.log(deleteItemfromCart("trouser"));
