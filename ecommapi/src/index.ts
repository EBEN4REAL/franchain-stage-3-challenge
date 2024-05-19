import cors from 'cors';
import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

app.use(cors());

// Global state variables
let products: { id: number; name: string; price: number, reviews: number, desc: string }[] = [
  { id: 1, name: 'AF VR ZOOM-NIKKOR 80-400MM F/4.5-5.6D ED', price: 1849.95, reviews: 84, desc: "An Awesome Camera with great lens" },
  { id: 2, name: 'NIKON D500', price: 2849.95, reviews: 50 , desc: "An Excellent Camera that provides great experience" },
  { id: 3, name: 'NIKON D800', price: 1649.95, reviews: 100 , desc: "Camera doing wonders since the 90s" },
  { id: 4, name: 'NF VR ZOOM-NIKKOR 190-400MM F/4.5-5.6D ED', price: 3649.95, reviews: 500, desc: "Works perfectly for people who are long sighted"  },
];

let cart: { [id: number]: { quantity: number } } = {};

// API Endpoints
app.get('/products', (req: Request, res: Response) => {
  res.json(products);
});

app.post('/cart', (req: Request, res: Response) => {
  const productId = req.body.productId;
  if (!productId) {
    return res.status(400).json({ error: 'Product ID is required' });
  }
  const product = products.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).json({ error: `Product not found` });
  }
  cart[productId] = { quantity: (cart[productId]?.quantity || 0) + 1 };
  res.json({ message: 'Product added to cart' });
});

app.get('/cart', (req: Request, res: Response) => {
  const cartItems = Object.keys(cart).map((id) => ({
    id: parseInt(id),
    quantity: cart[parseInt(id)].quantity,
    product: products.find((p) => p.id === parseInt(id)),
  }));
  res.json(cartItems);
});

app.delete('/cart/:productId', (req: Request, res: Response) => {
  const productId = parseInt(req.params.productId);
  if (!productId) {
    return res.status(400).json({ error: 'Product ID is required' });
  }
  delete cart[productId];
  res.json({ message: 'Product removed from cart' });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
