import React from 'react';

function Cart({ cartItems, removeFromCart, increaseQuantity, decreaseQuantity }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Your Cart ({cartItems.length} items)</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cartItems.map((product) => (
          <div key={product.id} className="border border-gray-200 rounded-lg p-4 flex flex-col items-center">
            <img src={product.product_img} alt={product.title} className="w-32 h-32 object-cover mb-4" />
            <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
            <p className="text-sm text-gray-600 mb-2">Rs. {product.price}</p>
            <div className="flex items-center justify-center mb-2">
              <button onClick={() => decreaseQuantity(product.id)} className="text-sm text-gray-600 p-1 bg-gray-200 rounded-full mr-2">-</button>
              <span className="text-lg font-semibold">{product.quantity}</span>
              <button onClick={() => increaseQuantity(product.id)} className="text-sm text-gray-600 p-1 bg-gray-200 rounded-full ml-2">+</button>
            </div>
            <p className="text-sm text-gray-600">Total: Rs. {product.quantity * product.price}</p>
            <button onClick={() => removeFromCart(product.id)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
