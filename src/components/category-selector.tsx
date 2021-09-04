import categories from "../categories";

type CategorySelectorProps = {
  category: string;
  selectCategory: (value: string) => void;
};

export default function CategorySelector({
  category,
  selectCategory,
}: CategorySelectorProps) {
  return (
    <div className="category-selector">
      <p>Select Category</p>
      <select value={category} onChange={(e) => selectCategory(e.target.value)}>
        {categories.map((category, index) => (
          <option
            key={index}
            value={category.id}
            dangerouslySetInnerHTML={{ __html: category.name }}
          />
        ))}
      </select>
    </div>
  );
}
