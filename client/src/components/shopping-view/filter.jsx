// ProductFilter.jsx
import { filterOptions } from "@/config";
import { Fragment } from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
import PropTypes from "prop-types";

function ProductFilter({ filters, handleFilter }) {
  // Helper function to render options
  const renderOptions = (keyItem, options, subCategory = null) => {
    return options.map((option) => {
      // Determine if the checkbox should be checked
      const isChecked = subCategory
        ? filters?.[keyItem]?.[subCategory]?.includes(option.id)
        : filters?.[keyItem]?.includes(option.id);

      // Handle checkbox change
      const onChange = () => {
        handleFilter(keyItem, option.id, subCategory);
      };

      return (
        <Label key={option.id} className="flex font-medium items-center gap-2">
          <Checkbox checked={isChecked} onCheckedChange={onChange} />
          {option.label}
        </Label>
      );
    });
  };

  return (
    <div className="bg-background rounded-lg shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-lg font-extrabold">Filters</h2>
      </div>

      <div className="p-4 space-y-4">
        {/* Loop over filterOption categories: "category", "price", etc. */}
        {Object.keys(filterOptions).map((keyItem) => (
          <Fragment key={keyItem}>
            <div>
              {/* Display the key, e.g., "category" or "price" */}
              <h3 className="text-base font-bold capitalize">
                {keyItem.replace("_", " ")}
              </h3>

              <div className="grid gap-2 mt-2">
                {/* Check if the current filter category is an array or object */}
                {Array.isArray(filterOptions[keyItem]) ? (
                  // If it's an array, render options directly
                  renderOptions(keyItem, filterOptions[keyItem])
                ) : (
                  // If it's an object, iterate over its subcategories
                  Object.keys(filterOptions[keyItem]).map((subCategory) => (
                    <div key={subCategory} className="ml-4">
                      <h4 className="text-sm font-semibold capitalize">
                        {subCategory}
                      </h4>
                      <div className="grid gap-2 mt-1">
                        {renderOptions(
                          keyItem,
                          filterOptions[keyItem][subCategory],
                          subCategory
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            <Separator />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

// Define PropTypes for better type checking
ProductFilter.propTypes = {
  filters: PropTypes.object.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default ProductFilter;
