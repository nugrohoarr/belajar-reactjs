import Button from '../Elements/Button';

function CardProduct(props) {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
}

function Header(props) {
    const { image } = props;
  return (
    <a href="">
      <img src={image} alt="product" className="p-8 rounded-t-lg" />
    </a>
  );
}

function Body(props) {
  const { children, name } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-light text-white">{name}</h5>
        <p className="text-s text-white">{children}</p>
      </a>
    </div>
  );
}

function Footer(props) {
    const { price, handleAddToCart, id } = props;
  return (
    <div className="flex item-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">
      {price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</span>
      <Button classname="bg-blue-600" onClick = {() => handleAddToCart(id)}>Add To Cart</Button>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
