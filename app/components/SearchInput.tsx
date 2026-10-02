import { forwardRef, InputHTMLAttributes } from "react";
import { Search } from "lucide-react";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ placeholder = "Search...", ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full md:w-[481px] h-[52px] border border-shuttle-gray-200  py-3 px-6 bg-white font-satoshi-400 rounded-full ">
        <div className="absolute left-4 w-6 h-6 top-4">
          {" "}
          <Search className="w-[18px] h-[18px]" />
        </div>
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          className="ml-5 mb-1 text-[18px]"
          {...props}
        />
      </div>
    );
  },
);

SearchInput.displayName = "SearchInput";
