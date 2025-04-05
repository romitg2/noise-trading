import { Prisma } from "@prisma/client";

export type { 
  User, 
  Trades as Trade, 
  BuyOrders as BuyOrder, 
  SellOrders as SellOrder, 
  Holdings as Holding,
  Noises as Noise
} from "@prisma/client";

export type UserWithOpenPosition = Prisma.UserGetPayload<{
    include: {
        holdings: true;
    }
}>;