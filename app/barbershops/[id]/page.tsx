import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPin, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";

interface BarbershopDetailsPageProps {
  params: {
    id?: string;
  };
}
const BarbershopDetailsPage = async ({
  params,
}: BarbershopDetailsPageProps) => {
  if (!params.id) {
    return null;
  }
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      Service: true,
    },
  });

  if (!barbershop) {
    // TODO redirecionar para home page
    return null;
  }
  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />
      {barbershop.Service.map((item) => (
        <ServiceItem key={item.id} service={item} />
      ))}
    </div>
  );
};

export default BarbershopDetailsPage;
