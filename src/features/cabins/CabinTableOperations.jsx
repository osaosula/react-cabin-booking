import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        filterOptions={[
          { label: "All", value: "all" },
          { label: "No discount", value: "no-discount" },
          { label: "With discount", value: "with-discount" },
        ]}
      />
      <SortBy
        sortOptions={[
          { value: "name-asc", label: "Sort by name a-z" },
          { value: "name-desc", label: "Sort by name z-a" },
          { value: "regularPrice-asc", label: "Sort by price (low to high)" },
          { value: "regularPrice-desc", label: "Sort by price (high to low" },
          {
            value: "maxCapacity-asc",
            label: "Sort by capacity (low to high)",
          },
          {
            value: "maxCapacity-desc",
            label: "Sort by capacity (high to low",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
