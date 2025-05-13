import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from './store/cartSlice';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.items);
  const [billingDetails, setBillingDetails] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails({ ...billingDetails, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!billingDetails.name.trim()) newErrors.name = 'Full Name is required';
    if (!billingDetails.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(billingDetails.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!billingDetails.address.trim()) newErrors.address = 'Address is required';
    if (!billingDetails.city.trim()) newErrors.city = 'City is required';
    if (!billingDetails.postalCode.trim()) newErrors.postalCode = 'Postal Code is required';
    if (!billingDetails.country.trim()) newErrors.country = 'Country is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateTotalPrice = () => {
    return cart
      .reduce((sum, item) => {
        const price = Number(item.price) || 0;
        const quantity = Number(item.quantity) || 1;
        return sum + price * quantity;
      }, 0)
      .toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      toast.error('Your cart is empty!', { autoClose: 3000 });
      return;
    }
    if (!validateForm()) {
      toast.error('Please fill in all required fields correctly.', { autoClose: 3000 });
      return;
    }

    const toastId = toast.loading('Processing your order...');

    const templateParams = {
      name: billingDetails.name,
      email: billingDetails.email,
      address: `${billingDetails.address}, ${billingDetails.city}, ${billingDetails.postalCode}, ${billingDetails.country}`,
      cartItems: cart
        .map((item) => {
          const price = Number(item.price) || 0;
          return `${item.name} (Qty: ${item.quantity}, Price: $${price.toFixed(2)})`;
        })
        .join('\n'),
      totalItems: cart.reduce((sum, item) => sum + Number(item.quantity) || 1, 0),
      totalPrice: calculateTotalPrice(),
    };

    emailjs
      .send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
        templateParams,
        'YOUR_USER_ID' // Replace with your EmailJS User ID
      )
      .then(
        () => {
          toast.update(toastId, {
            render: 'Checkout successful! A bill has been sent to your email.',
            type: 'success',
            isLoading: false,
            autoClose: 3000,
          });
          dispatch(clearCart());
          navigate('/');
        },
        (error) => {
          toast.update(toastId, {
            render: 'Checkout completed, but failed to send email. Please contact support.',
            type: 'error',
            isLoading: false,
            autoClose: 3000,
          });
          dispatch(clearCart());
          navigate('/');
        }
      );
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
    toast.info('Item removed from cart.', { autoClose: 2000 });
  };

  return (
    <section className="bg-[#0F0F0F] py-12 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
            Checkout
          </span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Cart Summary */}
          <div className="bg-gray-900 rounded-lg p-6 border border-amber-500/30 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Cart Summary</h3>
            {cart.length === 0 ? (
              <p className="text-gray-300">
                Your cart is empty.{' '}
                <Link to="/products" className="text-amber-400 hover:text-amber-300 transition-colors">
                  Continue shopping
                </Link>
                .
              </p>
            ) : (
              <>
                <ul className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between items-center text-gray-200 border-b border-gray-700 pb-2"
                    >
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <p className="text-sm text-gray-400">
                          Qty: {Number(item.quantity) || 1} x $
                          {(Number(item.price) || 0).toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="font-semibold">
                          ${((Number(item.price) || 0) * (Number(item.quantity) || 1)).toFixed(2)}
                        </span>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-400 hover:text-red-300 text-sm transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="text-gray-200 font-semibold">
                  <p>Total Items: {cart.reduce((sum, item) => sum + (Number(item.quantity) || 1), 0)}</p>
                  <p className="text-lg mt-2">
                    Total Price: <span className="text-amber-400">${calculateTotalPrice()}</span>
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Billing Details */}
          <div className="bg-gray-900 rounded-lg p-6 border border-amber-500/30 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Billing Details</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={billingDetails.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-sm bg-gray-800 border ${
                    errors.name ? 'border-red-500' : 'border-gray-600'
                  } rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors`}
                  required
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={billingDetails.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-sm bg-gray-800 border ${
                    errors.email ? 'border-red-500' : 'border-gray-600'
                  } rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors`}
                  required
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Address *</label>
                <input
                  type="text"
                  name="address"
                  value={billingDetails.address}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-sm bg-gray-800 border ${
                    errors.address ? 'border-red-500' : 'border-gray-600'
                  } rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors`}
                  required
                />
                {errors.address && <p className="text-red-400 text-xs mt-1">{errors.address}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">City *</label>
                <input
                  type="text"
                  name="city"
                  value={billingDetails.city}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-sm bg-gray-800 border ${
                    errors.city ? 'border-red-500' : 'border-gray-600'
                  } rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors`}
                  required
                />
                {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Postal Code *</label>
                <input
                  type="text"
                  name="postalCode"
                  value={billingDetails.postalCode}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-sm bg-gray-800 border ${
                    errors.postalCode ? 'border-red-500' : 'border-gray-600'
                  } rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors`}
                  required
                />
                {errors.postalCode && <p className="text-red-400 text-xs mt-1">{errors.postalCode}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Country *</label>
                <input
                  type="text"
                  name="country"
                  value={billingDetails.country}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-sm bg-gray-800 border ${
                    errors.country ? 'border-red-500' : 'border-gray-600'
                  } rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors`}
                  required
                />
                {errors.country && <p className="text-red-400 text-xs mt-1">{errors.country}</p>}
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-amber-500 text-gray-900 text-sm font-semibold rounded-md hover:bg-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                Complete Checkout
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastClassName="text-sm"
        progressClassName="bg-amber-500"
      />
    </section>
  );
};

// Error Boundary Component
class CheckoutErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('CheckoutPage error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-[#0F0F0F] py-12 min-h-screen flex items-center justify-center">
          <div className="text-center text-gray-200">
            <h2 className="text-2xl font-semibold mb-4">Something went wrong</h2>
            <p className="mb-4">Please try again or contact support.</p>
            <Link
              to="/products"
              className="px-6 py-3 bg-amber-500 text-gray-900 rounded-md hover:bg-amber-400 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Wrap CheckoutPage with ErrorBoundary
const WrappedCheckoutPage = () => (
  <CheckoutErrorBoundary>
    <CheckoutPage />
  </CheckoutErrorBoundary>
);

export default WrappedCheckoutPage;