import React from "react";


function Bai8_BT2() {
    const products = [
        { id: 1, name: 'Product A', type: 'clothing', price: 10 },
        { id: 2, name: 'Product B', type: 'food', price: 5 },
        { id: 3, name: 'Product C', type: 'electronics', price: 20 },
    ];

    const user = {
        name: 'Tuan Anh',
        age: 20,
        isAdmin: true,
    };
    return (
        <div>
            <h1>Welcome {user.name}!</h1>
            {user.isAdmin && <p>You are an admin</p>}
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.price} USD
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Bai8_BT2;