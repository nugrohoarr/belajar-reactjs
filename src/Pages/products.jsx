import { Fragment, useState } from 'react';
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
        <div className='w-1/4'>
          <h1 className='text-3xl font-bold text-blue-600'>Cart </h1>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            {/* <tbody>
              {cart.map((item) => {
                const product = products.find((product) => 
                product.id === item.id);
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{item.qty}</td>
                    <td>{item.qty * product.price}</td>
                  </tr>
                )
              })}
            </tbody> */}
          </table>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductPage;
