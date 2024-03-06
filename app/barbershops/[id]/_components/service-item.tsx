import { Card, CardContent } from "@/app/_components/ui/card";
import { Service } from "@prisma/client";
import Image from "next/image";

interface ServiceItemProps {
  service: Service;
}
const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <Card>
      <CardContent>
        <div className="flex">
          <div className="relative h-[110px] w-[110px]">
            <Image
              src={service.imageUrl}
              alt={service.name}
              style={{
                objectFit: "contain",
              }}
              fill
              className="opacity-85"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceItem;
