const CategoryCard = ({ title, description, icon }) => {
  return (
    <div className="border rounded-xl p-6 hover:shadow-md transition">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{description}</p>
      <button className="mt-4 text-blue-600 font-medium">
        Explore →
      </button>
    </div>
  );
};

export default CategoryCard;
