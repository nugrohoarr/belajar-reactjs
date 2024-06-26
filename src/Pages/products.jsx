import { Fragment, useEffect, useState } from 'react';
import CardProduct from '../components/Fragments/CardProduct';
import Button from '../components/Elements/Button';
import Counter from '../components/Fragments/Counter';

const products = [
  {
    id: 1,
    name: 'Addidas',
    price: 1000000,
    image: '/images/shoes-3.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iusto hic reiciendis explicabo fugit eius minima.',
  },
  {
    id: 2,
    name: 'New Balance',
    price: 2000000,
    image: '/images/shoes-4.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsum inventore quisquam est, quo harum voluptate nesciunt impedit corporis tempore cupiditate, quod deleniti illum exercitationem vero commodi ad nemo unde?',
  },
  {
    id: 3,
    name: 'Nike',
    price: 9000000,
    image: '/images/shoes-5.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iusto hic reiciendis explicabo fugit eius minima.',
  },
];

const email = localStorage.getItem('email');


function ProductPage() {
    const [cart, setCart] = useState([
      {
        id: "1",
        qty: 1,
      },
    ])

    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
      setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }, []);

    useEffect(() => {
      if (cart.length > 0) {
        const sum = cart.reduce((acc, item) => {
          const product = products.find((product) => product.id === item.id);
          if (product) { // Check if product exists
            return acc + product.price * item.qty;
          } else {
            return acc; // Return accumulator unchanged if product is undefined
          }
        }, 0); // Moved the closing parenthesis here
        setTotalPrice(sum);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }, [cart, products]);
    

    const handleLogin = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = "/login";
    }

    const handleAddToCart = (id) => {
      setCart([
        ...cart,
        {
          id,
          qty: 1,
        },
      ])
    }


  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogin}>Logout</Button>
      </div>
      <div className="flex justify-center py-10">
        <div className='w-3/4 flex flex-wrap'>
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body title={product.name}>{product.description}</CardProduct.Body>
            <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
          </CardProduct>
        ))}
        </div>
        <div className='w-1/2'>
          <h1 className='text-3xl font-bold text-blue-600 items-center py-5'>Cart </h1>
          <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {cart.map((item) => {
              const product = products.find((product) => product.id === item.id);
              if (!product) {
                return null; // or handle this case as appropriate
              }
              return (
                <tr key={item.id} class="hover:bg-gray-100">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-gray-900">{product.name}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{product.price}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{item.qty}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{item.qty * product.price}</div>
                  </td>
                </tr>
              );
            })}
            {/* Total Row */}
            <tr class="bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap text-right" colspan="3">
                <div class="text-sm font-medium text-gray-900">Total</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900">
                  {cart.reduce((total, item) => {
                    const product = products.find((product) => product.id === item.id);
                    if (!product) {
                      return null; // or handle this case as appropriate
                    }
                    return total + item.qty * product.price;
                  }, 0)}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductPage;
