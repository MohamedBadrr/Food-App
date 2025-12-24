import { Button } from "@/components/ui/button";
import Image from "next/image";
import MenuCard from "./MenuCard";

const BrowseOurMenu = () => {
  return (
    <div className="container my-23 mp-30">
      <div className="flex items-center justify-center flex-col gap-16">
        <h2 className="font-playfair text-[50px] text-primary">Browse Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full justify-center items-center place-items-center">
          {menuItems.map((item) => (
            <MenuCard
              key={item.title}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseOurMenu;

const menuItems = [
  {
    title: "Breakfast",
    description:
      "In the new era of technology we look in the future with certainty and pride for our life.",
    imageSrc: "/assets/icons/teaIcon.svg",
  },
  {
    title: "Main Dishes",
    description:
      "In the new era of technology we look in the future with certainty and pride for our life.",
    imageSrc: "/assets/icons/DishesIcon.svg",
  },
  {
    title: "Drinks",
    description:
      "In the new era of technology we look in the future with certainty and pride for our life.",
    imageSrc: "/assets/icons/DrinkIcon.svg",
  },
  {
    title: "Desserts",
    description:
      "In the new era of technology we look in the future with certainty and pride for our life.",
    imageSrc: "/assets/icons/DesertIcon.svg",
  },
];
