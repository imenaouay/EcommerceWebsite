import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, User } from 'lucide-react';
import { useStore } from '../store/useStore';

type CheckoutStep = 'shipping' | 'payment' | 'confirmation';

interface ShippingForm {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  phone: string;
}

interface PaymentForm {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}

const initialShippingForm: ShippingForm = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  city: '',
  country: '',
  postalCode: '',
  phone: '',
};

const initialPaymentForm: PaymentForm = {
  cardNumber: '',
  cardHolder: '',
  expiryDate: '',
  cvv: '',
};

export const Checkout = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('shipping');
  const [shippingForm, setShippingForm] = useState<ShippingForm>(initialShippingForm);
  const [paymentForm, setPaymentForm] = useState<PaymentForm>(initialPaymentForm);
  
  const { cart } = useStore();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('confirmation');
    // Here you would typically process the payment
    // and create the order in your backend
  };

  const handleConfirmOrder = () => {
    // Here you would typically:
    // 1. Send the order to your backend
    // 2. Clear the cart
    // 3. Redirect to order confirmation
    navigate('/order-success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-4">
          <div className={`flex items-center ${currentStep === 'shipping' ? 'text-blue-600' : 'text-gray-500'}`}>
            <Truck className="h-6 w-6 mr-2" />
            <span className="font-medium">Shipping</span>
          </div>
          <div className="w-16 h-1 bg-gray-200">
            <div className={`h-full bg-blue-600 transition-all ${currentStep !== 'shipping' ? 'w-full' : 'w-0'}`} />
          </div>
          <div className={`flex items-center ${currentStep === 'payment' ? 'text-blue-600' : 'text-gray-500'}`}>
            <CreditCard className="h-6 w-6 mr-2" />
            <span className="font-medium">Payment</span>
          </div>
          <div className="w-16 h-1 bg-gray-200">
            <div className={`h-full bg-blue-600 transition-all ${currentStep === 'confirmation' ? 'w-full' : 'w-0'}`} />
          </div>
          <div className={`flex items-center ${currentStep === 'confirmation' ? 'text-blue-600' : 'text-gray-500'}`}>
            <User className="h-6 w-6 mr-2" />
            <span className="font-medium">Confirmation</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            {currentStep === 'shipping' && (
              <form onSubmit={handleShippingSubmit}>
                <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingForm.firstName}
                      onChange={(e) => setShippingForm({ ...shippingForm, firstName: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingForm.lastName}
                      onChange={(e) => setShippingForm({ ...shippingForm, lastName: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={shippingForm.email}
                      onChange={(e) => setShippingForm({ ...shippingForm, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      value={shippingForm.phone}
                      onChange={(e) => setShippingForm({ ...shippingForm, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingForm.address}
                      onChange={(e) => setShippingForm({ ...shippingForm, address: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingForm.city}
                      onChange={(e) => setShippingForm({ ...shippingForm, city: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingForm.postalCode}
                      onChange={(e) => setShippingForm({ ...shippingForm, postalCode: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  Continue to Payment
                </button>
              </form>
            )}

            {currentStep === 'payment' && (
              <form onSubmit={handlePaymentSubmit}>
                <h2 className="text-2xl font-semibold mb-6">Payment Information</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="1234 5678 9012 3456"
                      value={paymentForm.cardNumber}
                      onChange={(e) => setPaymentForm({ ...paymentForm, cardNumber: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Holder Name
                    </label>
                    <input
                      type="text"
                      required
                      value={paymentForm.cardHolder}
                      onChange={(e) => setPaymentForm({ ...paymentForm, cardHolder: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="MM/YY"
                        value={paymentForm.expiryDate}
                        onChange={(e) => setPaymentForm({ ...paymentForm, expiryDate: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="123"
                        value={paymentForm.cvv}
                        onChange={(e) => setPaymentForm({ ...paymentForm, cvv: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep('shipping')}
                    className="w-full bg-gray-200 text-gray-800 py-3 px-4 rounded-full font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Review Order
                  </button>
                </div>
              </form>
            )}

            {currentStep === 'confirmation' && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">Review Your Order</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Shipping Information</h3>
                    <div className="text-gray-600">
                      <p>{shippingForm.firstName} {shippingForm.lastName}</p>
                      <p>{shippingForm.address}</p>
                      <p>{shippingForm.city}, {shippingForm.postalCode}</p>
                      <p>{shippingForm.country}</p>
                      <p>{shippingForm.phone}</p>
                      <p>{shippingForm.email}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Payment Information</h3>
                    <div className="text-gray-600">
                      <p>Card ending in {paymentForm.cardNumber.slice(-4)}</p>
                      <p>{paymentForm.cardHolder}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setCurrentStep('payment')}
                      className="w-full bg-gray-200 text-gray-800 py-3 px-4 rounded-full font-semibold hover:bg-gray-300 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleConfirmOrder}
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900 font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900 font-medium">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-2">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-semibold text-gray-900">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};