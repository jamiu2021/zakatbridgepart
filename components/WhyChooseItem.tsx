import { ComponentType, SVGProps } from 'react';

type WhyChooseItemProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  content: string;
};

const WhyChooseItem = ({ icon: Icon, title, content }: WhyChooseItemProps) => {
  return (
    <li className='bg-[#ffff] px-7 py-6 rounded-2xl shadow-md shadow-[#D9D9D9]'>
      
        <Icon className='text-4xl text-[#0098CC]' />
      
      <h2 className="text-xl font-bold mt-4 mb-4">{title}</h2>
      <p className="text-base">{content}</p>
    </li>
  );
};

export default WhyChooseItem;