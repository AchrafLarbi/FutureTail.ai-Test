import { Card, CardBody } from "@heroui/react";
import { ReactNode } from "react";

interface ExampleCardProps {
  title: string;
  icon: ReactNode;
}

export const ExampleCard = ({ title, icon }: ExampleCardProps) => {
  return (
    <Card
      isPressable
      className="bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-200 cursor-pointer"
    >
      <CardBody className="p-4 flex flex-col gap-4 h-full min-h-[120px]">
        <p className="text-sm text-gray-700 font-normal leading-relaxed flex-grow">
          {title}
        </p>
        <div className="text-gray-400 mt-auto">{icon}</div>
      </CardBody>
    </Card>
  );
};
