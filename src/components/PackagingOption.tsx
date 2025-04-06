
import { Check } from "lucide-react";

interface PackagingOptionProps {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  selected: boolean;
  onClick: () => void;
}

const PackagingOption = ({
  id,
  title,
  description,
  image,
  features,
  selected,
  onClick,
}: PackagingOptionProps) => {
  return (
    <div
      className={`bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 cursor-pointer ${
        selected
          ? "ring-2 ring-spice-500 transform scale-[1.02]"
          : "hover:shadow-lg"
      }`}
      onClick={onClick}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-spice-700">{title}</h3>
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center ${
              selected ? "bg-spice-500" : "bg-gray-200"
            }`}
          >
            {selected && <Check size={16} className="text-white" />}
          </div>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check
                size={18}
                className="text-leaf-500 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PackagingOption;
