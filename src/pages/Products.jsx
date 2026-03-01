import React, { useMemo, useState, useContext } from 'react';
import { Box, Typography, Container, Stack, Card, TextField, MenuItem, Button } from '@mui/material';
import { CartContext } from '../context/CartContext';
import { motion } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const NEON_GOLD = '#FFD700';
const BORDER = '1px solid rgba(255, 215, 0, 0.2)';
const GLASS = 'rgba(15, 15, 15, 0.7)';

const Products = () => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const allProducts = useMemo(() => [
    { id: 1, name: 'Cyber Mobile', price: 1300, category: 'electronics', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400' },
    { id: 2, name: 'Noir Drapery', price: 450, category: 'fashion', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400' },
    { id: 3, name: 'Titanium Logic', price: 2500, category: 'electronics', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400' },
    { id: 4, name: 'Royal Jhumka', price: 890, category: 'jewelry', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400' },
    { id: 5, name: 'Gold Necklace', price: 2200, category: 'jewelry', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400' },
    { id: 6, name: 'Cyber Computer', price: 3200, category: 'electronics', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400' },
    { id: 7, name: 'V-Neck Tee', price: 1200, category: 'fashion', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400' },
    { id: 8, name: 'Women Jacket', price: 2400, category: 'fashion', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400' },
    { id: 9, name: 'Kangan Set', price: 800, category: 'jewelry', image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400' },
    { id: 10, name: 'Wireless Headphones', price: 1800, category: 'electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400' },
    { id: 11, name: 'Smart Watch', price: 2100, category: 'electronics', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400' },
    { id: 12, name: 'Vintage Camera', price: 1600, category: 'electronics', image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400' },
    { id: 13, name: 'Men Shoes', price: 950, category: 'fashion', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400' },
    { id: 14, name: 'Designer Bag', price: 1850, category: 'fashion', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400' },
    { id: 15, name: 'Diamond Ring', price: 3500, category: 'jewelry', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400' }
  ], []);

  const filteredProducts = useMemo(() => {
    return allProducts.filter(p => {
      const matchesFilter = filter === 'all' || p.category === filter;
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, search, allProducts]);

  return (
    <Box sx={{ bgcolor: '#000', color: '#fff', minHeight: '100vh', pt: { xs: 12, md: 15 }, pb: { xs: 6, md: 10 }, px: { xs: 1.5, md: 0 } }}>
    
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
            <Typography sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '3.5rem' }, fontWeight: 900, mb: 3, textTransform: 'uppercase', letterSpacing: 2 }}>
              ALL <span style={{ color: NEON_GOLD, textShadow: `0 0 30px ${NEON_GOLD}66` }}>PRODUCTS</span>
            </Typography>
          </Box>
        </motion.div>

        {/* Filters and Search */}
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1.5, md: 2 }} sx={{ mb: { xs: 5, md: 8 }, alignItems: 'stretch' }}>
          <TextField
            fullWidth
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon sx={{ mr: 1, color: NEON_GOLD }} />,
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: '#fff',
                borderRadius: '12px',
                backgroundColor: GLASS,
                border: `1px solid ${NEON_GOLD}50`,
                '& fieldset': { borderColor: 'transparent' },
                '&:hover fieldset': { borderColor: NEON_GOLD },
                '&.Mui-focused fieldset': { borderColor: NEON_GOLD }
              },
              '& .MuiOutlinedInput-input::placeholder': {
                opacity: 0.5,
                color: '#fff'
              }
            }}
          />
          <TextField
            select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            sx={{
              minWidth: { xs: '100%', md: 200 },
              '& .MuiOutlinedInput-root': {
                color: '#fff',
                borderRadius: '12px',
                backgroundColor: GLASS,
                border: `1px solid ${NEON_GOLD}50`,
                '& fieldset': { borderColor: 'transparent' },
                '&:hover fieldset': { borderColor: NEON_GOLD },
                '&.Mui-focused fieldset': { borderColor: NEON_GOLD }
              }
            }}
          >
            <MenuItem value="all" sx={{ bgcolor: '#080808', color: '#fff' }}>All Categories</MenuItem>
            <MenuItem value="electronics" sx={{ bgcolor: '#080808', color: '#fff' }}>Electronics</MenuItem>
            <MenuItem value="fashion" sx={{ bgcolor: '#080808', color: '#fff' }}>Fashion</MenuItem>
            <MenuItem value="jewelry" sx={{ bgcolor: '#080808', color: '#fff' }}>Jewelry</MenuItem>
          </TextField>
        </Stack>

        {/* Products Grid */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, md: 3 }} sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
            >
              <Card
                sx={{
                  width: { xs: '100%', sm: 'calc(50% - 8px)', md: 250 },
                  bgcolor: GLASS,
                  border: BORDER,
                  borderRadius: '20px',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    borderColor: NEON_GOLD,
                    transform: { xs: 'translateY(-5px)', md: 'translateY(-10px)' },
                    boxShadow: `0 20px 50px ${NEON_GOLD}30`
                  }
                }}
              >
                <Box sx={{ height: { xs: 150, md: 200 }, bgcolor: `${NEON_GOLD}10`, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <motion.img src={product.image} alt={product.name} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} />
                </Box>
                <Box sx={{ p: { xs: 2, md: 3 }, width: '100%' }}>
                  <Typography sx={{ fontWeight: 900, fontSize: { xs: '0.9rem', md: '1rem' }, mb: 1 }}>{product.name}</Typography>
                  <Typography sx={{ fontSize: { xs: '0.75rem', md: '0.85rem' }, opacity: 0.6, mb: 2, textTransform: 'uppercase' }}>
                    {product.category}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' }, fontWeight: 900, color: NEON_GOLD, mb: 2 }}>
                    ${product.price}
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<ShoppingBagIcon sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }} />} 
                    onClick={() => handleAddToCart(product)}
                    sx={{
                      bgcolor: NEON_GOLD,
                      color: 'black',
                      fontWeight: 900,
                      borderRadius: '8px',
                      textTransform: 'uppercase',
                      fontSize: { xs: '0.7rem', md: '0.8rem' },
                      py: { xs: 0.8, md: 1 },
                      '&:hover': { bgcolor: '#fff', transform: 'scale(1.05)' }
                    }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Card>
            </motion.div>
          ))}
        </Stack>

        {filteredProducts.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 10 }}>
            <Typography sx={{ fontSize: '1.2rem', opacity: 0.5 }}>No products found</Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Products;
