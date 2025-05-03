import { HiOutlineDesktopComputer } from "react-icons/hi";

import WhyChooseItem from "./WhyChooseItem";

const whyChooseItems = [
  {
    id: "w1",
    icon: HiOutlineDesktopComputer,
    title: "Accurate Calculation",
    content:
      "Easily calculate your zakat obligations across all asset types, including digital assets, with updated nisab rates.",
  },
  {
    id: "w2",
    icon: HiOutlineDesktopComputer,
    title: "Global Reach",
    content:
      "Support verified campaigns and beneficiaries worldwide, making a difference across communities.",
  },
  {
    id: "w3",
    icon: HiOutlineDesktopComputer,
    title: "Real-Time Transparency",
    content:
      "Track your donations and see the impact they’re creating in real-time through detailed dashboards.",
  },
  {
    id: "w4",
    icon: HiOutlineDesktopComputer,
    title: "Secure and Flexible",
    content:
      "Enjoy safe and flexible payment options, ensuring your donations are handled with care and privacy.",
  },
];

const WhyChooseItems = () => {
  return (
    
      <ul className="grid grid-cols-2 gap-[30px]">
        {whyChooseItems.map((item) => (
          <WhyChooseItem key={item.id} {...item} />
        ))}
      </ul>
      
  );
};
export default WhyChooseItems;
