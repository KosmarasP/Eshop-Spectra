import { ProductGallery } from "@/components/ProductGallery";
import { ProductInfo } from "@/components/ProductInfo";
import { ReviewSection } from "@/components/ReviewSection";
import { RelatedProducts } from "@/components/RelatedProducts";

// Mock data
const productImages = [
  {
    url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    alt: "Product image 1",
  },
  {
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    alt: "Product image 2",
  },
  {
    url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    alt: "Product image 3",
  },
];

const mockReviews = [
  {
    id: 1,
    author: "John Doe",
    rating: 5,
    comment: "Amazing product! Exactly what I was looking for.",
    date: "2024-02-15",
  },
  {
    id: 2,
    author: "Jane Smith",
    rating: 4,
    comment: "Great quality, but shipping took a bit longer than expected.",
    date: "2024-02-10",
  },
];

const relatedProducts = [
  {
    id: 1,
    name: "Similar Product 1",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    id: 2,
    name: "Similar Product 2",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    id: 3,
    name: "Similar Product 3",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  },
  {
    id: 4,
    name: "Similar Product 4",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
  },
];

const Index = () => {
  return (
    <div className="container py-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <ProductGallery images={productImages} />
        <ProductInfo
          name="Premium Laptop Stand"
          price={149.99}
          description="Elevate your workspace with our Premium Laptop Stand. Crafted from premium materials, this ergonomic stand provides optimal viewing angles and improved airflow for your device. Perfect for both home office and professional settings."
        />
      </div>
      <div className="border-t border-muted">
        <ReviewSection reviews={mockReviews} />
      </div>
      <div className="border-t border-muted">
        <RelatedProducts products={relatedProducts} />
      </div>
    </div>
  );
};

export default Index;