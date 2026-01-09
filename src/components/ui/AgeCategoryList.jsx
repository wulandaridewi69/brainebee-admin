import Card from "./AgeCard";

import Toddler from "@/../public/assets/toddler.png";
import Preschool from "@/../public/assets/preschool.png";
import Kindergarten from "@/../public/assets/kindergarten.png";
import SchoolAge from "@/../public/assets/school.png";
import Tween from "@/../public/assets/tween.png";
import Teeneger from "@/../public/assets/teeneger.png";

const AgeCategoryList = () => {
  const categories = [
    { title: "TODDLER", image: Toddler },
    { title: "PRESCHOOL", image: Preschool },
    { title: "KINDERGARTEN", image: Kindergarten },
    { title: "SCHOOL AGE", image: SchoolAge },
    { title: "TWEEN", image: Tween },
    { title: "TEENAGER", image: Teeneger },
  ];
  

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <Card
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
