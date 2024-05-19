# Ecommerce API

This is a sample backend that you can use to develop a frontend against.

You require typescript to run it, and below you will find API documentation
for each of the endpoints showing you how you can integrate with it.

You do not need any databases installed, and no changes are needed to this
codebase at all.

## Endpoints

1. GET /products

- Returns a list of products in JSON format.
- Example Response:

```json
[
  { "id": 1, "name": "Product 1", "price": 10.99 },
  { "id": 2, "name": "Product 2", "price": 9.99 },
  { "id": 3, "name": "Product 3", "price": 7.99 }
]
```

2. POST /cart

- Adds a product to the cart.
- Request body (JSON):
  - productId: The ID of the product to add (required)
- Example request:

```json
{
  "productId": 1
}
```

- Example response

```json
{
  "message": "Product added to cart"
}
```

3. GET /cart

- Returns the current contents of the cart in JSON format.
- Example response:

```json
[
  { "id": 1, "quantity": 2, "product": { "id": 1, "name": "AF VR ZOOM-NIKKOR 80-400MM F/4.5-5.6D ED", "price": 1849.95, "reviews": 84 } },
  { "id": 2, "quantity": 1, "product": { "id": 2, "name": "NIKON D500", "price": 2400, "reviews": 84  } }
  { "id": 3, "quantity": 2, "product": { "id": 1, "name": "AF VR ZOOM-NIKKOR 80-400MM F/4.5-5.6D ED", "price": 1849.95, "reviews": 84 } },
  { "id": 4, "quantity": 1, "product": { "id": 2, "name": "NIKON D500", "price": 2400, "reviews": 84  } }
]
```

4. DELETE /cart/:productId

- Removes a product from the cart
- Path parameters:
  - productId: The ID of the product to delete (required)
- Example response:

```json
{
  "message": "Product removed from cart"
}
```
