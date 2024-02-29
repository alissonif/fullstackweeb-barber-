import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import Image from "next/image";

interface BarberShopItemProps {
  barbershop: Barbershop;
}

const BarberShopItem = ({ barbershop }: BarberShopItemProps) => {
  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="p-1">
        <Image
          src={barbershop.imageUrl}
          height={0}
          width={0}
          className="h-[159px] w-full rounded-2xl"
          alt={barbershop.name}
        />
        <h2 className="font-bold">{barbershop.name}</h2>
        <p className="text-sm text-gray-400">{barbershop.address}</p>
      </CardContent>
    </Card>
  );
};

export default BarberShopItem;
