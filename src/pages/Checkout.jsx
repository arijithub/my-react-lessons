import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Stack,
  TextField,
  Button,
  Divider,
  Avatar,
} from '@mui/material';
import { CartContext } from '../context/CartContext';

const NEON_GOLD = '#FFD700';

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart, setCartOpen, clearCart } = useContext(CartContext);
  const passedCart = location.state?.cart;
  const cartItems = Array.isArray(passedCart) && passedCart.length ? passedCart : cart;
  const derivedTotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0),
    [cartItems],
  );

  const [shipping, setShipping] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });
  const [payment, setPayment] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  useEffect(() => {
    // Ensure cart drawer is closed when on the checkout page
    setCartOpen(false);
  }, [setCartOpen]);

  const handleChange = (setFn) => (event) => {
    const { name, value } = event.target;
    setFn((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    // N.B. In a real app, this would call an API.
    alert('Order placed! Thank you for shopping with us.');
    clearCart();
    navigate('/');
  };

  const shippingComplete = Object.values(shipping).every((v) => v.trim());
  const paymentComplete = Object.values(payment).every((v) => v.trim());

  if (!cartItems.length) {
    return (
      <Box sx={{ pt: 14, pb: 8, px: { xs: 3, md: 6 } }}>
        <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>
          Your cart is empty
        </Typography>
        <Typography sx={{ opacity: 0.75, mb: 4 }}>
          Add items to your cart and return to checkout when you&apos;re ready.
        </Typography>
        <Button
          variant="contained"
          sx={{ bgcolor: NEON_GOLD, color: 'black', '&:hover': { bgcolor: '#fff' } }}
          onClick={() => navigate('/shop')}
        >
          Start Shopping
        </Button>
      </Box>
    );
  }

  return (
    <Box component="main" sx={{ bgcolor: 'background.default', color: 'text.primary', pt: 14, pb: 10, px: { xs: 3, md: 6 } }}>
      <Typography variant="h3" sx={{ fontWeight: 900, mb: 1 }}>
        Checkout
      </Typography>
      <Typography sx={{ opacity: 0.7, mb: 5 }}>
        Review your order, add shipping details, and finish your purchase.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 4, bgcolor: 'rgba(255,255,255,0.04)', borderRadius: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 900, mb: 2 }}>
              Shipping Details
            </Typography>
            <Stack spacing={2}>
              <TextField
                name="fullName"
                label="Full name"
                variant="filled"
                fullWidth
                value={shipping.fullName}
                onChange={handleChange(setShipping)}
              />
              <TextField
                name="email"
                label="Email"
                variant="filled"
                fullWidth
                value={shipping.email}
                onChange={handleChange(setShipping)}
              />
              <TextField
                name="address"
                label="Street address"
                variant="filled"
                fullWidth
                value={shipping.address}
                onChange={handleChange(setShipping)}
              />
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  name="city"
                  label="City"
                  variant="filled"
                  fullWidth
                  value={shipping.city}
                  onChange={handleChange(setShipping)}
                />
                <TextField
                  name="postalCode"
                  label="Postal code"
                  variant="filled"
                  fullWidth
                  value={shipping.postalCode}
                  onChange={handleChange(setShipping)}
                />
              </Stack>
              <TextField
                name="country"
                label="Country"
                variant="filled"
                fullWidth
                value={shipping.country}
                onChange={handleChange(setShipping)}
              />
            </Stack>
          </Paper>

          <Paper sx={{ p: 4, mt: 4, bgcolor: 'rgba(255,255,255,0.04)', borderRadius: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 900, mb: 2 }}>
              Payment
            </Typography>
            <Stack spacing={2}>
              <TextField
                name="cardName"
                label="Name on card"
                variant="filled"
                fullWidth
                value={payment.cardName}
                onChange={handleChange(setPayment)}
              />
              <TextField
                name="cardNumber"
                label="Card number"
                variant="filled"
                fullWidth
                value={payment.cardNumber}
                onChange={handleChange(setPayment)}
              />
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  name="expiry"
                  label="Expiry (MM/YY)"
                  variant="filled"
                  fullWidth
                  value={payment.expiry}
                  onChange={handleChange(setPayment)}
                />
                <TextField
                  name="cvc"
                  label="CVC"
                  variant="filled"
                  fullWidth
                  value={payment.cvc}
                  onChange={handleChange(setPayment)}
                />
              </Stack>
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 4, bgcolor: 'rgba(255,255,255,0.04)', borderRadius: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 900, mb: 2 }}>
              Order Summary
            </Typography>
            <Stack spacing={2}>
              {cartItems.map((item) => {
                const quantity = item.quantity || 1;
                const lineTotal = (item.price || 0) * quantity;

                return (
                  <Stack
                    key={item.cid}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ gap: 2 }}
                  >
                    <Stack direction="row" alignItems="center" spacing={2} sx={{ flex: 1 }}>
                      <Avatar
                        src={item.image}
                        variant="rounded"
                        sx={{ width: 56, height: 56, border: '1px solid rgba(255,255,255,0.15)' }}
                      />
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 900 }}>
                          {item.name}
                        </Typography>
                        <Typography variant="caption" sx={{ opacity: 0.6 }}>
                          Qty {quantity}
                        </Typography>
                      </Box>
                    </Stack>
                    <Typography sx={{ fontWeight: 900 }}>${lineTotal.toFixed(2)}</Typography>
                  </Stack>
                );
              })}

              <Divider sx={{ borderColor: 'rgba(255,255,255,0.15)' }} />

              <Stack direction="row" justifyContent="space-between">
                <Typography sx={{ opacity: 0.7 }}>Subtotal</Typography>
                <Typography sx={{ fontWeight: 900 }}>${derivedTotal.toFixed(2)}</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography sx={{ opacity: 0.7 }}>Estimated shipping</Typography>
                <Typography sx={{ fontWeight: 900 }}>$5.00</Typography>
              </Stack>

              <Divider sx={{ borderColor: 'rgba(255,255,255,0.15)' }} />

              <Stack direction="row" justifyContent="space-between" sx={{ mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 900 }}>
                  Total
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 900 }}>
                  ${(derivedTotal + 5).toFixed(2)}
                </Typography>
              </Stack>

              <Button
                fullWidth
                disabled={!shippingComplete || !paymentComplete}
                variant="contained"
                sx={{
                  py: 1.8,
                  bgcolor: NEON_GOLD,
                  color: 'black',
                  fontWeight: 900,
                  borderRadius: '15px',
                  '&:hover': { bgcolor: '#fff' },
                  opacity: !shippingComplete || !paymentComplete ? 0.6 : 1,
                }}
                onClick={handlePlaceOrder}
              >
                Place order
              </Button>

              <Button
                fullWidth
                variant="text"
                sx={{ color: 'rgba(255,255,255,0.7)' }}
                onClick={() => navigate('/shop')}
              >
                Continue shopping
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Checkout;
