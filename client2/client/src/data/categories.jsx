import {
  Wrench,
  Zap,
  Paintbrush,
  Hammer,
  Fan,
  BrushCleaning,
  Sofa,
  Droplets,
} from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Electrician",
    description: "Electrical installation & repair",
    icon: Zap,
  },
  {
    id: 2,
    title: "Plumber",
    description: "Pipe & water leakage repair",
    icon: Droplets,
  },
  {
    id: 3,
    title: "Carpenter",
    description: "Furniture & wood work",
    icon: Hammer,
  },
  {
    id: 4,
    title: "Painter",
    description: "Interior & exterior painting",
    icon: Paintbrush,
  },
  {
    id: 5,
    title: "AC Repair",
    description: "AC installation & servicing",
    icon: Fan,
  },
  {
    id: 6,
    title: "Cleaning",
    description: "Deep home cleaning",
    icon: BrushCleaning,
  },
  {
    id: 7,
    title: "Appliance Repair",
    description: "Home appliance services",
    icon: Wrench,
  },
  {
    id: 8,
    title: "Sofa Cleaning",
    description: "Professional sofa cleaning",
    icon: Sofa,
  },
];

export default categories;