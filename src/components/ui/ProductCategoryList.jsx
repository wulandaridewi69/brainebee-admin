import Card from "./AgeCard";



const AgeCategoryList = () => {
  const categories = [
    { title: "TODDLER"},
    { title: "PRESCHOOL"},
    { title: "KINDERGARTEN"},
    { title: "SCHOOL AGE"},
    { title: "TWEEN"},
    { title: "TEENAGER"},
  ];
  

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <AgeCard
            key={cat.title}
            title={cat.title}
            image={cat.image}
          />
        ))}
      </div>
    </div>
  );
};

export default AgeCategoryList;
