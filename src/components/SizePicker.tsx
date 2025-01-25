import { cn } from "@/lib/utils";

interface SizePickerProps {
  sizes: string[];
  selectedSize: string;
  onSizeChange: (size: string) => void;
}

export const SizePicker = ({
  sizes,
  selectedSize,
  onSizeChange,
}: SizePickerProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">Size</label>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSizeChange(size)}
            className={cn(
              "px-4 py-2 rounded-md border-2 text-sm font-medium transition-colors",
              selectedSize === size
                ? "border-accent bg-accent text-white"
                : "border-muted hover:border-accent/50"
            )}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};