import Header from '../components/Header'
import Banner from '../components/Banner'
import ProductSection from '../components/ProductSection'
import Footer from '../components/Footer'

const Home = () => {
  const dummyProducts = [
    { name: 'Man T-Shirt', price: 30 }, { name: 'Man Shirt', price: 40 }, { name: 'Woman Scart', price: 50 }
  ];
  return (
    <Box>
      <Box sx={{ bgcolor: '#f0f0f0', py: 10, textAlign: 'center' }}>
        <Typography variant="h2" sx={{ color: '#f26522' }}>Get Start</Typography>
        <Typography variant="h2" gutterBottom>Your favorite shopping</Typography>
        <Button variant="contained" size="large" sx={{ bgcolor: '#252525' }}>Buy Now</Button>
      </Box>
      <ProductSlider title="Man & Woman Fashion" products={dummyProducts} />
      <ProductSlider title="Electronics" products={dummyProducts} />
    </Box>
  );
};