import { useState } from "react";
import { ColorPicker } from "./ColorPicker";
import { SizePicker } from "./SizePicker";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ProductInfoProps {
  name: string;
  price: number;
  description: string;
}

const COLORS = [
  { name: "Black", value: "#000000" },
  { name: "White", value: "#FFFFFF" },
  { name: "Navy", value: "#000080" },
];

const SIZES = ["XS", "S", "M", "L", "XL"];

export const ProductInfo = ({ name, price, description }: ProductInfoProps) => {
  const [selectedColor, setSelectedColor] = useState(COLORS[0].name);
  const [selectedSize, setSelectedSize] = useState(SIZES[2]);

  const handleAddToCart = () => {
    toast.success("Added to cart!", {
      description: `${name} - ${selectedColor}, Size ${selectedSize}`,
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-2xl font-medium mt-2">${price}</p>
      </div>
      
      <p className="text-secondary text-sm">{description}</p>
      
      <ColorPicker
        colors={COLORS}
        selectedColor={selectedColor}
        onColorChange={setSelectedColor}
      />
      
      <SizePicker
        sizes={SIZES}
        selectedSize={selectedSize}
        onSizeChange={setSelectedSize}
      />
      
      <Button
        className="w-full bg-primary hover:bg-primary/90 text-white"
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>
    </div>
  );
};