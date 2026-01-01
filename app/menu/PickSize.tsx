import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { formatCurrency } from "@/lib/formatter";
import { ProductSize } from "@/types/Products";

export function PickSize({
  sizes,
  itemPrice,
}: {
  sizes: ProductSize[];
  itemPrice: number;
}) {
  return (
    <RadioGroup defaultValue="comfortable" className="mb-5">
      <p className="text-primary mx-auto font-bold">Pick your Size</p>
      {sizes.map((size) => (
        <div
          key={size.id}
          className="flex items-center space-x-2 border border-gray-100 rounded-md p-4"
        >
          <RadioGroupItem
            value={size.size}
            // checked={selectedSize.id === size.id}
            // onClick={() => setSelectedSize(size)}
            id={size.id.toString()}
          />
          <Label htmlFor={size.id.toString()}>
            {size.size} {formatCurrency(size.price + itemPrice)}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
