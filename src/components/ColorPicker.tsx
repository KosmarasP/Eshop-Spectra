import { cn } from "@/lib/utils";

interface Color {
  name: string;
  value: string;
}

interface ColorPickerProps {
  colors: Color[];
  selectedColor: string;
  onColorChange: (color: string) => void;
}

export const ColorPicker = ({
  colors,
  selectedColor,
  onColorChange,
}: ColorPickerProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">Color: {selectedColor}</label>
      <div className="flex gap-2">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => onColorChange(color.name)}
            className={cn(
              "w-8 h-8 rounded-full border-2",
              selectedColor === color.name
                ? "border-accent ring-2 ring-accent/50"
                : "border-muted"
            )}
            style={{ backgroundColor: color.value }}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );
};