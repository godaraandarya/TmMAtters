import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './store/cartSlice';
import { Link } from 'react-router-dom';

// Image imports
import photo1 from '../src/assets/100Pcs_Custom_Logo_Tag.jpg';
import photo2 from '../src/assets/50Pcs Custom DIY Heat Transfer Iron.jpg';
import photo3 from '../src/assets/Car Strobe Warning Light Emergency Signal Lamp.jpg';
import photo4 from '../src/assets/products-t0213m144-cycle-runners-walkers-full.jpg';
import photo5 from '../src/assets/products-mp19-141-edge-marker-post-yellow-delineator-roll-full.jpg';
import photo6 from '../src/assets/products-mi5-18044s-mirrors-heavy-duty-acrylic-450mm-18044s-full.jpg';
import photo7 from '../src/assets/Mini Kwik-Lok (MKL) Folding Base.jpeg';
import photo8 from '../src/assets/products-tl85658a-narva-optimax-beacon-dual-volt-magnetic-base-85658-full (1).jpg';
import photo9 from '../src/assets/products-to10-00190-900mm-portacone-with-base-full.jpg';
import photo10 from '../src/assets/products-t01-m144-t1a-full.jpg';
import photo11 from '../src/assets/products-cidws26347s-saris-range-deluxe-public-work-stand-full (1).jpg';
import photo12 from '../src/assets/products-pc02-01-school-patrol-range-single-arm-web-full (1).jpg';
import photo13 from '../src/assets/products-rg0130-132-rs1-30-full.jpg';
import photo14 from '../src/assets/products-t33-212-tw-33-stop-go-paddle-full.jpg';
import photo15 from '../src/assets/products-rg171c442-rd6l-rg171-twin-disc-cone-mount-1000x1000-full (1).jpg';
import photo16 from '../src/assets/products-tp00-13-premium-led-ultra-traffic-wands-red-tp00-13-full.jpg';
import photo17 from '../src/assets/products-t16-m142-tg2-full.jpg';

// Products list
const products = [
  { name: "100Pcs Custom Logo Tag", price: "$0.00", image: photo1 },
  { name: "50Pcs Custom DIY Heat Transfer Iron", price: "$0.00", image: photo2 },
  { name: "Car Strobe Warning Light Emergency Signal Lamp", price: "$0.00", image: photo3 },
  { name: "Cycle Race/Runners/Walkers", price: "$0.00", image: photo4 },
  { name: "Edge Marker Post – Yellow HI Roll of Delineators (Approx 350)", price: "$0.00", image: photo5 },
  { name: "Heavy Duty Acrylic Mirrors", price: "$0.00", image: photo6 },
  { name: "Mini Kwik-Lok (MKL) Folding Base", price: "$300.00", image: photo7 },
  { name: "Optimax Rotating Beacon – Magnetic Base", price: "$0.00", image: photo8 },
  { name: "PortaCone Collapsible Road Cone (900mm)", price: "$0.00", image: photo9 },
  { name: "Road Works Level 1", price: "$0.00", image: photo10 },
  { name: "Saris Deluxe Bike Repair Stand", price: "$0.00", image: photo11 },
  { name: "Single Arm School Patrol System", price: "$0.00", image: photo12 },
  { name: "Speed Limit Signs", price: "$0.00", image: photo13 },
  { name: "Stop / Go Paddle", price: "$0.00", image: photo14 },
  { name: "Twin Disc Keep Left Sign (Cone Mounted)", price: "$0.00", image: photo15 },
  { name: "Ultra Wand – Red", price: "$0.00", image: photo16 },
  { name: "Works End Supplementary", price: "$0.00", image: photo17 },
];

const ProductCard = React.memo(({ name, price, image, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart({ name, price, image, quantity });
    setQuantity(1);
    alert(`Added ${quantity}x ${name} to cart!`);
  };

  const handleBuyNow = () => {
    onAddToCart({ name, price, image, quantity });
  };

  return (
    <div className="relative bg-gray-900 rounded-lg p-6 shadow-lg group border border-gray-700 hover:border-amber-500">
      <div className="relative overflow-hidden rounded-md mb-4">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-64 object-contain transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1 bg-white rounded-md"
        />
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
      </div>
      <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">{name}</h3>
      <p className="text-gray-300 mt-2">{price}</p>
      <div className="mt-4 flex items-center space-x-4">
        <label className="text-gray-200">Qty:</label>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="bg-gray-800 text-white border border-gray-600 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          {Array.from({ length: 10 }, (_, i) => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
          ))}
        </select>
      </div>
      <div className="mt-4 flex space-x-4">
        <button
          onClick={handleAddToCart}
          className="px-4 py-2 bg-amber-500 text-gray-900 rounded-md hover:bg-amber-400 transition-colors"
        >
          Add to Cart
        </button>
        <Link
          to="/checkout"
          onClick={handleBuyNow}
          className="px-4 py-2 bg-green-500 text-gray-900 rounded-md hover:bg-green-400 transition-colors"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
});

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center space-x-4 mt-8">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-amber-500 hover:text-gray-900 disabled:opacity-50"
    >
      Previous
    </button>
    <span className="text-gray-200">Page {currentPage} of {totalPages}</span>
    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-amber-500 hover:text-gray-900 disabled:opacity-50"
    >
      Next
    </button>
  </div>
);

const ProductionSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const totalPages = Math.ceil(products.length / productsPerPage);
  const currentProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    return products.slice(startIndex, startIndex + productsPerPage);
  }, [currentPage]);

  return (
    <section className="relative bg-[#0F0F0F] py-16 overflow-hidden">
      <div className="bg-orb bg-amber-500 w-64 h-64 top-10 left-10 animate-glow absolute" style={{ opacity: 0.20 }}></div>
      <div className="bg-orb bg-blue-500 w-80 h-80 bottom-20 right-20 animate-glow absolute" style={{ opacity: 0.15 }}></div>
      <div className="bg-orb bg-green-500 w-48 h-48 top-1/2 left-1/3 animate-glow absolute" style={{ opacity: 0.10 }}></div>

      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-white mb-12">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Products</span>
        </h2>
        <div className="flex justify-between items-center mb-8">
          <div className="text-gray-200 text-lg">
            Cart: {cart.length} item{cart.length !== 1 ? 's' : ''}
          </div>
          {cart.length > 0 && (
            <Link
              to="/checkout"
              className="px-6 py-3 bg-amber-500 text-gray-900 rounded-md hover:bg-amber-400 transition-colors"
            >
              Proceed to Checkout
            </Link>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProducts.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </section>
  );
};

export default ProductionSection;
