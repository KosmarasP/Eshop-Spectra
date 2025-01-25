import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface RelatedProductsProps {
  products: Product[];
}

export const RelatedProducts = ({ products }: RelatedProductsProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("related-products");
    if (!container) return;

    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setScrollPosition(container.scrollLeft + scrollAmount);
  };

  return (
    <div className="py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Related Products</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            disabled={scrollPosition <= 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            disabled={scrollPosition >= (products.length - 4) * 300}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div
        id="related-products"
        className="flex gap-6 overflow-x-hidden scroll-smooth"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-none w-[280px]"
          >
            <div className="aspect-square rounded-lg overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-medium mb-1">{product.name}</h3>
            <p className="text-secondary">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};