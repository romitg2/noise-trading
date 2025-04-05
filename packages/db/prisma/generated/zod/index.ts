import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','email','name']);

export const TradesScalarFieldEnumSchema = z.enum(['id','noise','userId','buyPrice','sellPrice','quantity']);

export const NoiseDataScalarFieldEnumSchema = z.enum(['id','noise','timestamp','value']);

export const BuyOrdersScalarFieldEnumSchema = z.enum(['id','userId','noise','quantity','price','createdAt','updatedAt']);

export const SellOrdersScalarFieldEnumSchema = z.enum(['id','userId','noise','quantity','price','createdAt','updatedAt']);

export const HoldingsScalarFieldEnumSchema = z.enum(['id','userId','noise','quantity','createdAt','updatedAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NoisesSchema = z.enum(['Random','Sine','Square','Sawtooth','Triangle']);

export type NoisesType = `${z.infer<typeof NoisesSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().cuid(),
  email: z.string(),
  name: z.string(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// TRADES SCHEMA
/////////////////////////////////////////

export const TradesSchema = z.object({
  noise: NoisesSchema,
  id: z.string().cuid(),
  userId: z.string(),
  buyPrice: z.number(),
  sellPrice: z.number(),
  quantity: z.number().int(),
})

export type Trades = z.infer<typeof TradesSchema>

/////////////////////////////////////////
// NOISE DATA SCHEMA
/////////////////////////////////////////

export const NoiseDataSchema = z.object({
  noise: NoisesSchema,
  id: z.string().cuid(),
  timestamp: z.coerce.date(),
  value: z.number(),
})

export type NoiseData = z.infer<typeof NoiseDataSchema>

/////////////////////////////////////////
// BUY ORDERS SCHEMA
/////////////////////////////////////////

export const BuyOrdersSchema = z.object({
  noise: NoisesSchema,
  id: z.string().cuid(),
  userId: z.string(),
  quantity: z.number().int(),
  price: z.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type BuyOrders = z.infer<typeof BuyOrdersSchema>

/////////////////////////////////////////
// SELL ORDERS SCHEMA
/////////////////////////////////////////

export const SellOrdersSchema = z.object({
  noise: NoisesSchema,
  id: z.string().cuid(),
  userId: z.string(),
  quantity: z.number().int(),
  price: z.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type SellOrders = z.infer<typeof SellOrdersSchema>

/////////////////////////////////////////
// HOLDINGS SCHEMA
/////////////////////////////////////////

export const HoldingsSchema = z.object({
  noise: NoisesSchema,
  id: z.string().cuid(),
  userId: z.string(),
  quantity: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Holdings = z.infer<typeof HoldingsSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  trades: z.union([z.boolean(),z.lazy(() => TradesFindManyArgsSchema)]).optional(),
  buyOrders: z.union([z.boolean(),z.lazy(() => BuyOrdersFindManyArgsSchema)]).optional(),
  sellOrders: z.union([z.boolean(),z.lazy(() => SellOrdersFindManyArgsSchema)]).optional(),
  holdings: z.union([z.boolean(),z.lazy(() => HoldingsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  trades: z.boolean().optional(),
  buyOrders: z.boolean().optional(),
  sellOrders: z.boolean().optional(),
  holdings: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  trades: z.union([z.boolean(),z.lazy(() => TradesFindManyArgsSchema)]).optional(),
  buyOrders: z.union([z.boolean(),z.lazy(() => BuyOrdersFindManyArgsSchema)]).optional(),
  sellOrders: z.union([z.boolean(),z.lazy(() => SellOrdersFindManyArgsSchema)]).optional(),
  holdings: z.union([z.boolean(),z.lazy(() => HoldingsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// TRADES
//------------------------------------------------------

export const TradesIncludeSchema: z.ZodType<Prisma.TradesInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const TradesArgsSchema: z.ZodType<Prisma.TradesDefaultArgs> = z.object({
  select: z.lazy(() => TradesSelectSchema).optional(),
  include: z.lazy(() => TradesIncludeSchema).optional(),
}).strict();

export const TradesSelectSchema: z.ZodType<Prisma.TradesSelect> = z.object({
  id: z.boolean().optional(),
  noise: z.boolean().optional(),
  userId: z.boolean().optional(),
  buyPrice: z.boolean().optional(),
  sellPrice: z.boolean().optional(),
  quantity: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// NOISE DATA
//------------------------------------------------------

export const NoiseDataSelectSchema: z.ZodType<Prisma.NoiseDataSelect> = z.object({
  id: z.boolean().optional(),
  noise: z.boolean().optional(),
  timestamp: z.boolean().optional(),
  value: z.boolean().optional(),
}).strict()

// BUY ORDERS
//------------------------------------------------------

export const BuyOrdersIncludeSchema: z.ZodType<Prisma.BuyOrdersInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const BuyOrdersArgsSchema: z.ZodType<Prisma.BuyOrdersDefaultArgs> = z.object({
  select: z.lazy(() => BuyOrdersSelectSchema).optional(),
  include: z.lazy(() => BuyOrdersIncludeSchema).optional(),
}).strict();

export const BuyOrdersSelectSchema: z.ZodType<Prisma.BuyOrdersSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  noise: z.boolean().optional(),
  quantity: z.boolean().optional(),
  price: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// SELL ORDERS
//------------------------------------------------------

export const SellOrdersIncludeSchema: z.ZodType<Prisma.SellOrdersInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const SellOrdersArgsSchema: z.ZodType<Prisma.SellOrdersDefaultArgs> = z.object({
  select: z.lazy(() => SellOrdersSelectSchema).optional(),
  include: z.lazy(() => SellOrdersIncludeSchema).optional(),
}).strict();

export const SellOrdersSelectSchema: z.ZodType<Prisma.SellOrdersSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  noise: z.boolean().optional(),
  quantity: z.boolean().optional(),
  price: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// HOLDINGS
//------------------------------------------------------

export const HoldingsIncludeSchema: z.ZodType<Prisma.HoldingsInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const HoldingsArgsSchema: z.ZodType<Prisma.HoldingsDefaultArgs> = z.object({
  select: z.lazy(() => HoldingsSelectSchema).optional(),
  include: z.lazy(() => HoldingsIncludeSchema).optional(),
}).strict();

export const HoldingsSelectSchema: z.ZodType<Prisma.HoldingsSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  noise: z.boolean().optional(),
  quantity: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  trades: z.lazy(() => TradesListRelationFilterSchema).optional(),
  buyOrders: z.lazy(() => BuyOrdersListRelationFilterSchema).optional(),
  sellOrders: z.lazy(() => SellOrdersListRelationFilterSchema).optional(),
  holdings: z.lazy(() => HoldingsListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  trades: z.lazy(() => TradesOrderByRelationAggregateInputSchema).optional(),
  buyOrders: z.lazy(() => BuyOrdersOrderByRelationAggregateInputSchema).optional(),
  sellOrders: z.lazy(() => SellOrdersOrderByRelationAggregateInputSchema).optional(),
  holdings: z.lazy(() => HoldingsOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    email: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  trades: z.lazy(() => TradesListRelationFilterSchema).optional(),
  buyOrders: z.lazy(() => BuyOrdersListRelationFilterSchema).optional(),
  sellOrders: z.lazy(() => SellOrdersListRelationFilterSchema).optional(),
  holdings: z.lazy(() => HoldingsListRelationFilterSchema).optional()
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const TradesWhereInputSchema: z.ZodType<Prisma.TradesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TradesWhereInputSchema),z.lazy(() => TradesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TradesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TradesWhereInputSchema),z.lazy(() => TradesWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  noise: z.union([ z.lazy(() => EnumNoisesFilterSchema),z.lazy(() => NoisesSchema) ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  buyPrice: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  sellPrice: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const TradesOrderByWithRelationInputSchema: z.ZodType<Prisma.TradesOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  noise: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  buyPrice: z.lazy(() => SortOrderSchema).optional(),
  sellPrice: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const TradesWhereUniqueInputSchema: z.ZodType<Prisma.TradesWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => TradesWhereInputSchema),z.lazy(() => TradesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TradesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TradesWhereInputSchema),z.lazy(() => TradesWhereInputSchema).array() ]).optional(),
  noise: z.union([ z.lazy(() => EnumNoisesFilterSchema),z.lazy(() => NoisesSchema) ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  buyPrice: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  sellPrice: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const TradesOrderByWithAggregationInputSchema: z.ZodType<Prisma.TradesOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  noise: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  buyPrice: z.lazy(() => SortOrderSchema).optional(),
  sellPrice: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TradesCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TradesAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TradesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TradesMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TradesSumOrderByAggregateInputSchema).optional()
}).strict();

export const TradesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TradesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TradesScalarWhereWithAggregatesInputSchema),z.lazy(() => TradesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TradesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TradesScalarWhereWithAggregatesInputSchema),z.lazy(() => TradesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  noise: z.union([ z.lazy(() => EnumNoisesWithAggregatesFilterSchema),z.lazy(() => NoisesSchema) ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  buyPrice: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  sellPrice: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  quantity: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const NoiseDataWhereInputSchema: z.ZodType<Prisma.NoiseDataWhereInput> = z.object({
  AND: z.union([ z.lazy(() => NoiseDataWhereInputSchema),z.lazy(() => NoiseDataWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NoiseDataWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NoiseDataWhereInputSchema),z.lazy(() => NoiseDataWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  noise: z.union([ z.lazy(() => EnumNoisesFilterSchema),z.lazy(() => NoisesSchema) ]).optional(),
  timestamp: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  value: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
}).strict();

export const NoiseDataOrderByWithRelationInputSchema: z.ZodType<Prisma.NoiseDataOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  noise: z.lazy(() => SortOrderSchema).optional(),
  timestamp: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NoiseDataWhereUniqueInputSchema: z.ZodType<Prisma.NoiseDataWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => NoiseDataWhereInputSchema),z.lazy(() => NoiseDataWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NoiseDataWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NoiseDataWhereInputSchema),z.lazy(() => NoiseDataWhereInputSchema).array() ]).optional(),
  noise: z.union([ z.lazy(() => EnumNoisesFilterSchema),z.lazy(() => NoisesSchema) ]).optional(),
  timestamp: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  value: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
}).strict());

export const NoiseDataOrderByWithAggregationInputSchema: z.ZodType<Prisma.NoiseDataOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  noise: z.lazy(() => SortOrderSchema).optional(),
  timestamp: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => NoiseDataCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => NoiseDataAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => NoiseDataMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => NoiseDataMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => NoiseDataSumOrderByAggregateInputSchema).optional()
}).strict();

export const NoiseDataScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.NoiseDataScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => NoiseDataScalarWhereWithAggregatesInputSchema),z.lazy(() => NoiseDataScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => NoiseDataScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NoiseDataScalarWhereWithAggregatesInputSchema),z.lazy(() => NoiseDataScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  noise: z.union([ z.lazy(() => EnumNoisesWithAggregatesFilterSchema),z.lazy(() => NoisesSchema) ]).optional(),
  timestamp: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  value: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const BuyOrdersWhereInputSchema: z.ZodType<Prisma.BuyOrdersWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BuyOrdersWhereInputSchema),z.lazy(() => BuyOrdersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BuyOrdersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BuyOrdersWhereInputSchema),z.lazy(() => BuyOrdersWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  noise: z.union([ z.lazy(() => EnumNoisesFilterSchema),z.lazy(() => NoisesSchema) ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const BuyOrdersOrderByWithRelationInputSchema: z.ZodType<Prisma.BuyOrdersOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  noise: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const BuyOrdersWhereUniqueInputSchema: z.ZodType<Prisma.BuyOrdersWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => BuyOrdersWhereInputSchema),z.lazy(() => BuyOrdersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BuyOrdersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BuyOrdersWhereInputSchema),z.lazy(() => BuyOrdersWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  noise: z.union([ z.lazy(() => EnumNoisesFilterSchema),z.lazy(() => NoisesSchema) ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const BuyOrdersOrderByWithAggregationInputSchema: z.ZodType<Prisma.BuyOrdersOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  noise: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BuyOrdersCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => BuyOrdersAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BuyOrdersMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BuyOrdersMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => BuyOrdersSumOrderByAggregateInputSchema).optional()
}).strict();

export const BuyOrdersScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BuyOrdersScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BuyOrdersScalarWhereWithAggregatesInputSchema),z.lazy(() => BuyOrdersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BuyOrdersScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BuyOrdersScalarWhereWithAggregatesInputSchema),z.lazy(() => BuyOrdersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  noise: z.union([ z.lazy(() => EnumNoisesWithAggregatesFilterSchema),z.lazy(() => NoisesSchema) ]).optional(),
  quantity: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  price: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const SellOrdersWhereInputSchema: z.ZodType<Prisma.SellOrdersWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SellOrdersWhereInputSchema),z.lazy(() => SellOrdersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SellOrdersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SellOrdersWhereInputSchema),z.lazy(() => SellOrdersWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  noise: z.union([ z.lazy(() => EnumNoisesFilterSchema),z.lazy(() => NoisesSchema) ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const SellOrdersOrderByWithRelationInputSchema: z.ZodType<Prisma.SellOrdersOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  noise: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const SellOrdersWhereUniqueInputSchema: z.ZodType<Prisma.SellOrdersWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => SellOrdersWhereInputSchema),z.lazy(() => SellOrdersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SellOrdersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SellOrdersWhereInputSchema),z.lazy(() => SellOrdersWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  noise: z.union([ z.lazy(() => EnumNoisesFilterSchema),z.lazy(() => NoisesSchema) ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const SellOrdersOrderByWithAggregationInputSchema: z.ZodType<Prisma.SellOrdersOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  noise: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SellOrdersCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SellOrdersAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SellOrdersMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SellOrdersMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SellOrdersSumOrderByAggregateInputSchema).optional()
}).strict();

export const SellOrdersScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SellOrdersScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SellOrdersScalarWhereWithAggregatesInputSchema),z.lazy(() => SellOrdersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SellOrdersScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SellOrdersScalarWhereWithAggregatesInputSchema),z.lazy(() => SellOrdersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  noise: z.union([ z.lazy(() => EnumNoisesWithAggregatesFilterSchema),z.lazy(() => NoisesSchema) ]).optional(),
  quantity: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  price: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const HoldingsWhereInputSchema: z.ZodType<Prisma.HoldingsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => HoldingsWhereInputSchema),z.lazy(() => HoldingsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HoldingsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HoldingsWhereInputSchema),z.lazy(() => HoldingsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  noise: z.union([ z.lazy(() => EnumNoisesFilterSchema),z.lazy(() => NoisesSchema) ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const HoldingsOrderByWithRelationInputSchema: z.ZodType<Prisma.HoldingsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  noise: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const HoldingsWhereUniqueInputSchema: z.ZodType<Prisma.HoldingsWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => HoldingsWhereInputSchema),z.lazy(() => HoldingsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HoldingsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HoldingsWhereInputSchema),z.lazy(() => HoldingsWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  noise: z.union([ z.lazy(() => EnumNoisesFilterSchema),z.lazy(() => NoisesSchema) ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const HoldingsOrderByWithAggregationInputSchema: z.ZodType<Prisma.HoldingsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  noise: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => HoldingsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => HoldingsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => HoldingsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => HoldingsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => HoldingsSumOrderByAggregateInputSchema).optional()
}).strict();

export const HoldingsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.HoldingsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => HoldingsScalarWhereWithAggregatesInputSchema),z.lazy(() => HoldingsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => HoldingsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HoldingsScalarWhereWithAggregatesInputSchema),z.lazy(() => HoldingsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  noise: z.union([ z.lazy(() => EnumNoisesWithAggregatesFilterSchema),z.lazy(() => NoisesSchema) ]).optional(),
  quantity: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  trades: z.lazy(() => TradesCreateNestedManyWithoutUserInputSchema).optional(),
  buyOrders: z.lazy(() => BuyOrdersCreateNestedManyWithoutUserInputSchema).optional(),
  sellOrders: z.lazy(() => SellOrdersCreateNestedManyWithoutUserInputSchema).optional(),
  holdings: z.lazy(() => HoldingsCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  trades: z.lazy(() => TradesUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  buyOrders: z.lazy(() => BuyOrdersUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sellOrders: z.lazy(() => SellOrdersUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  holdings: z.lazy(() => HoldingsUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  trades: z.lazy(() => TradesUpdateManyWithoutUserNestedInputSchema).optional(),
  buyOrders: z.lazy(() => BuyOrdersUpdateManyWithoutUserNestedInputSchema).optional(),
  sellOrders: z.lazy(() => SellOrdersUpdateManyWithoutUserNestedInputSchema).optional(),
  holdings: z.lazy(() => HoldingsUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  trades: z.lazy(() => TradesUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  buyOrders: z.lazy(() => BuyOrdersUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sellOrders: z.lazy(() => SellOrdersUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  holdings: z.lazy(() => HoldingsUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TradesCreateInputSchema: z.ZodType<Prisma.TradesCreateInput> = z.object({
  id: z.string().cuid().optional(),
  noise: z.lazy(() => NoisesSchema),
  buyPrice: z.number(),
  sellPrice: z.number(),
  quantity: z.number().int(),
  user: z.lazy(() => UserCreateNestedOneWithoutTradesInputSchema)
}).strict();

export const TradesUncheckedCreateInputSchema: z.ZodType<Prisma.TradesUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  noise: z.lazy(() => NoisesSchema),
  userId: z.string(),
  buyPrice: z.number(),
  sellPrice: z.number(),
  quantity: z.number().int()
}).strict();

export const TradesUpdateInputSchema: z.ZodType<Prisma.TradesUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  buyPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  sellPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutTradesNestedInputSchema).optional()
}).strict();

export const TradesUncheckedUpdateInputSchema: z.ZodType<Prisma.TradesUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  buyPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  sellPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TradesCreateManyInputSchema: z.ZodType<Prisma.TradesCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  noise: z.lazy(() => NoisesSchema),
  userId: z.string(),
  buyPrice: z.number(),
  sellPrice: z.number(),
  quantity: z.number().int()
}).strict();

export const TradesUpdateManyMutationInputSchema: z.ZodType<Prisma.TradesUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  buyPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  sellPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TradesUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TradesUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  buyPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  sellPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NoiseDataCreateInputSchema: z.ZodType<Prisma.NoiseDataCreateInput> = z.object({
  id: z.string().cuid().optional(),
  noise: z.lazy(() => NoisesSchema),
  timestamp: z.coerce.date().optional(),
  value: z.number()
}).strict();

export const NoiseDataUncheckedCreateInputSchema: z.ZodType<Prisma.NoiseDataUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  noise: z.lazy(() => NoisesSchema),
  timestamp: z.coerce.date().optional(),
  value: z.number()
}).strict();

export const NoiseDataUpdateInputSchema: z.ZodType<Prisma.NoiseDataUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  timestamp: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NoiseDataUncheckedUpdateInputSchema: z.ZodType<Prisma.NoiseDataUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  timestamp: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NoiseDataCreateManyInputSchema: z.ZodType<Prisma.NoiseDataCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  noise: z.lazy(() => NoisesSchema),
  timestamp: z.coerce.date().optional(),
  value: z.number()
}).strict();

export const NoiseDataUpdateManyMutationInputSchema: z.ZodType<Prisma.NoiseDataUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  timestamp: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NoiseDataUncheckedUpdateManyInputSchema: z.ZodType<Prisma.NoiseDataUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  timestamp: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BuyOrdersCreateInputSchema: z.ZodType<Prisma.BuyOrdersCreateInput> = z.object({
  id: z.string().cuid().optional(),
  noise: z.lazy(() => NoisesSchema),
  quantity: z.number().int(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutBuyOrdersInputSchema)
}).strict();

export const BuyOrdersUncheckedCreateInputSchema: z.ZodType<Prisma.BuyOrdersUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  noise: z.lazy(() => NoisesSchema),
  quantity: z.number().int(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const BuyOrdersUpdateInputSchema: z.ZodType<Prisma.BuyOrdersUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutBuyOrdersNestedInputSchema).optional()
}).strict();

export const BuyOrdersUncheckedUpdateInputSchema: z.ZodType<Prisma.BuyOrdersUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BuyOrdersCreateManyInputSchema: z.ZodType<Prisma.BuyOrdersCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  noise: z.lazy(() => NoisesSchema),
  quantity: z.number().int(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const BuyOrdersUpdateManyMutationInputSchema: z.ZodType<Prisma.BuyOrdersUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BuyOrdersUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BuyOrdersUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SellOrdersCreateInputSchema: z.ZodType<Prisma.SellOrdersCreateInput> = z.object({
  id: z.string().cuid().optional(),
  noise: z.lazy(() => NoisesSchema),
  quantity: z.number().int(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutSellOrdersInputSchema)
}).strict();

export const SellOrdersUncheckedCreateInputSchema: z.ZodType<Prisma.SellOrdersUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  noise: z.lazy(() => NoisesSchema),
  quantity: z.number().int(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SellOrdersUpdateInputSchema: z.ZodType<Prisma.SellOrdersUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSellOrdersNestedInputSchema).optional()
}).strict();

export const SellOrdersUncheckedUpdateInputSchema: z.ZodType<Prisma.SellOrdersUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SellOrdersCreateManyInputSchema: z.ZodType<Prisma.SellOrdersCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  noise: z.lazy(() => NoisesSchema),
  quantity: z.number().int(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SellOrdersUpdateManyMutationInputSchema: z.ZodType<Prisma.SellOrdersUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SellOrdersUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SellOrdersUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HoldingsCreateInputSchema: z.ZodType<Prisma.HoldingsCreateInput> = z.object({
  id: z.string().cuid().optional(),
  noise: z.lazy(() => NoisesSchema),
  quantity: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutHoldingsInputSchema)
}).strict();

export const HoldingsUncheckedCreateInputSchema: z.ZodType<Prisma.HoldingsUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  noise: z.lazy(() => NoisesSchema),
  quantity: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const HoldingsUpdateInputSchema: z.ZodType<Prisma.HoldingsUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutHoldingsNestedInputSchema).optional()
}).strict();

export const HoldingsUncheckedUpdateInputSchema: z.ZodType<Prisma.HoldingsUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HoldingsCreateManyInputSchema: z.ZodType<Prisma.HoldingsCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  noise: z.lazy(() => NoisesSchema),
  quantity: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const HoldingsUpdateManyMutationInputSchema: z.ZodType<Prisma.HoldingsUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HoldingsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.HoldingsUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const TradesListRelationFilterSchema: z.ZodType<Prisma.TradesListRelationFilter> = z.object({
  every: z.lazy(() => TradesWhereInputSchema).optional(),
  some: z.lazy(() => TradesWhereInputSchema).optional(),
  none: z.lazy(() => TradesWhereInputSchema).optional()
}).strict();

export const BuyOrdersListRelationFilterSchema: z.ZodType<Prisma.BuyOrdersListRelationFilter> = z.object({
  every: z.lazy(() => BuyOrdersWhereInputSchema).optional(),
  some: z.lazy(() => BuyOrdersWhereInputSchema).optional(),
  none: z.lazy(() => BuyOrdersWhereInputSchema).optional()
}).strict();

export const SellOrdersListRelationFilterSchema: z.ZodType<Prisma.SellOrdersListRelationFilter> = z.object({
  every: z.lazy(() => SellOrdersWhereInputSchema).optional(),
  some: z.lazy(() => SellOrdersWhereInputSchema).optional(),
  none: z.lazy(() => SellOrdersWhereInputSchema).optional()
}).strict();

export const HoldingsListRelationFilterSchema: z.ZodType<Prisma.HoldingsListRelationFilter> = z.object({
  every: z.lazy(() => HoldingsWhereInputSchema).optional(),
  some: z.lazy(() => HoldingsWhereInputSchema).optional(),
  none: z.lazy(() => HoldingsWhereInputSchema).optional()
}).strict();

export const TradesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TradesOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BuyOrdersOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BuyOrdersOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SellOrdersOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SellOrdersOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HoldingsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.HoldingsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const EnumNoisesFilterSchema: z.ZodType<Prisma.EnumNoisesFilter> = z.object({
  equals: z.lazy(() => NoisesSchema).optional(),
  in: z.lazy(() => NoisesSchema).array().optional(),
  notIn: z.lazy(() => NoisesSchema).array().optional(),
  not: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => NestedEnumNoisesFilterSchema) ]).optional(),
}).strict();

export const FloatFilterSchema: z.ZodType<Prisma.FloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const UserScalarRelationFilterSchema: z.ZodType<Prisma.UserScalarRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const TradesCountOrderByAggregateInputSchema: z.ZodType<Prisma.TradesCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  noise: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  buyPrice: z.lazy(() => SortOrderSchema).optional(),
  sellPrice: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TradesAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TradesAvgOrderByAggregateInput> = z.object({
  buyPrice: z.lazy(() => SortOrderSchema).optional(),
  sellPrice: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TradesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TradesMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  noise: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  buyPrice: z.lazy(() => SortOrderSchema).optional(),
  sellPrice: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TradesMinOrderByAggregateInputSchema: z.ZodType<Prisma.TradesMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  noise: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  buyPrice: z.lazy(() => SortOrderSchema).optional(),
  sellPrice: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TradesSumOrderByAggregateInputSchema: z.ZodType<Prisma.TradesSumOrderByAggregateInput> = z.object({
  buyPrice: z.lazy(() => SortOrderSchema).optional(),
  sellPrice: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumNoisesWithAggregatesFilterSchema: z.ZodType<Prisma.EnumNoisesWithAggregatesFilter> = z.object({
  equals: z.lazy(() => NoisesSchema).optional(),
  in: z.lazy(() => NoisesSchema).array().optional(),
  notIn: z.lazy(() => NoisesSchema).array().optional(),
  not: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => NestedEnumNoisesWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumNoisesFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumNoisesFilterSchema).optional()
}).strict();

export const FloatWithAggregatesFilterSchema: z.ZodType<Prisma.FloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NoiseDataCountOrderByAggregateInputSchema: z.ZodType<Prisma.NoiseDataCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  noise: z.lazy(() => SortOrderSchema).optional(),
  timestamp: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NoiseDataAvgOrderByAggregateInputSchema: z.ZodType<Prisma.NoiseDataAvgOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NoiseDataMaxOrderByAggregateInputSchema: z.ZodType<Prisma.NoiseDataMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  noise: z.lazy(() => SortOrderSchema).optional(),
  timestamp: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NoiseDataMinOrderByAggregateInputSchema: z.ZodType<Prisma.NoiseDataMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  noise: z.lazy(() => SortOrderSchema).optional(),
  timestamp: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NoiseDataSumOrderByAggregateInputSchema: z.ZodType<Prisma.NoiseDataSumOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const BuyOrdersCountOrderByAggregateInputSchema: z.ZodType<Prisma.BuyOrdersCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  noise: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BuyOrdersAvgOrderByAggregateInputSchema: z.ZodType<Prisma.BuyOrdersAvgOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BuyOrdersMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BuyOrdersMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  noise: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BuyOrdersMinOrderByAggregateInputSchema: z.ZodType<Prisma.BuyOrdersMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  noise: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BuyOrdersSumOrderByAggregateInputSchema: z.ZodType<Prisma.BuyOrdersSumOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SellOrdersCountOrderByAggregateInputSchema: z.ZodType<Prisma.SellOrdersCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  noise: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SellOrdersAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SellOrdersAvgOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SellOrdersMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SellOrdersMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  noise: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SellOrdersMinOrderByAggregateInputSchema: z.ZodType<Prisma.SellOrdersMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  noise: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SellOrdersSumOrderByAggregateInputSchema: z.ZodType<Prisma.SellOrdersSumOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HoldingsCountOrderByAggregateInputSchema: z.ZodType<Prisma.HoldingsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  noise: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HoldingsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.HoldingsAvgOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HoldingsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.HoldingsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  noise: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HoldingsMinOrderByAggregateInputSchema: z.ZodType<Prisma.HoldingsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  noise: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HoldingsSumOrderByAggregateInputSchema: z.ZodType<Prisma.HoldingsSumOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TradesCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.TradesCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => TradesCreateWithoutUserInputSchema),z.lazy(() => TradesCreateWithoutUserInputSchema).array(),z.lazy(() => TradesUncheckedCreateWithoutUserInputSchema),z.lazy(() => TradesUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TradesCreateOrConnectWithoutUserInputSchema),z.lazy(() => TradesCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TradesCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TradesWhereUniqueInputSchema),z.lazy(() => TradesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BuyOrdersCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.BuyOrdersCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => BuyOrdersCreateWithoutUserInputSchema),z.lazy(() => BuyOrdersCreateWithoutUserInputSchema).array(),z.lazy(() => BuyOrdersUncheckedCreateWithoutUserInputSchema),z.lazy(() => BuyOrdersUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BuyOrdersCreateOrConnectWithoutUserInputSchema),z.lazy(() => BuyOrdersCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BuyOrdersCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BuyOrdersWhereUniqueInputSchema),z.lazy(() => BuyOrdersWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SellOrdersCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SellOrdersCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SellOrdersCreateWithoutUserInputSchema),z.lazy(() => SellOrdersCreateWithoutUserInputSchema).array(),z.lazy(() => SellOrdersUncheckedCreateWithoutUserInputSchema),z.lazy(() => SellOrdersUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SellOrdersCreateOrConnectWithoutUserInputSchema),z.lazy(() => SellOrdersCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SellOrdersCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SellOrdersWhereUniqueInputSchema),z.lazy(() => SellOrdersWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const HoldingsCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.HoldingsCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => HoldingsCreateWithoutUserInputSchema),z.lazy(() => HoldingsCreateWithoutUserInputSchema).array(),z.lazy(() => HoldingsUncheckedCreateWithoutUserInputSchema),z.lazy(() => HoldingsUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HoldingsCreateOrConnectWithoutUserInputSchema),z.lazy(() => HoldingsCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => HoldingsCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => HoldingsWhereUniqueInputSchema),z.lazy(() => HoldingsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TradesUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.TradesUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => TradesCreateWithoutUserInputSchema),z.lazy(() => TradesCreateWithoutUserInputSchema).array(),z.lazy(() => TradesUncheckedCreateWithoutUserInputSchema),z.lazy(() => TradesUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TradesCreateOrConnectWithoutUserInputSchema),z.lazy(() => TradesCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TradesCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TradesWhereUniqueInputSchema),z.lazy(() => TradesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BuyOrdersUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.BuyOrdersUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => BuyOrdersCreateWithoutUserInputSchema),z.lazy(() => BuyOrdersCreateWithoutUserInputSchema).array(),z.lazy(() => BuyOrdersUncheckedCreateWithoutUserInputSchema),z.lazy(() => BuyOrdersUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BuyOrdersCreateOrConnectWithoutUserInputSchema),z.lazy(() => BuyOrdersCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BuyOrdersCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BuyOrdersWhereUniqueInputSchema),z.lazy(() => BuyOrdersWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SellOrdersUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SellOrdersUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SellOrdersCreateWithoutUserInputSchema),z.lazy(() => SellOrdersCreateWithoutUserInputSchema).array(),z.lazy(() => SellOrdersUncheckedCreateWithoutUserInputSchema),z.lazy(() => SellOrdersUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SellOrdersCreateOrConnectWithoutUserInputSchema),z.lazy(() => SellOrdersCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SellOrdersCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SellOrdersWhereUniqueInputSchema),z.lazy(() => SellOrdersWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const HoldingsUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.HoldingsUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => HoldingsCreateWithoutUserInputSchema),z.lazy(() => HoldingsCreateWithoutUserInputSchema).array(),z.lazy(() => HoldingsUncheckedCreateWithoutUserInputSchema),z.lazy(() => HoldingsUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HoldingsCreateOrConnectWithoutUserInputSchema),z.lazy(() => HoldingsCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => HoldingsCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => HoldingsWhereUniqueInputSchema),z.lazy(() => HoldingsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const TradesUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.TradesUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => TradesCreateWithoutUserInputSchema),z.lazy(() => TradesCreateWithoutUserInputSchema).array(),z.lazy(() => TradesUncheckedCreateWithoutUserInputSchema),z.lazy(() => TradesUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TradesCreateOrConnectWithoutUserInputSchema),z.lazy(() => TradesCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TradesUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TradesUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TradesCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TradesWhereUniqueInputSchema),z.lazy(() => TradesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TradesWhereUniqueInputSchema),z.lazy(() => TradesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TradesWhereUniqueInputSchema),z.lazy(() => TradesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TradesWhereUniqueInputSchema),z.lazy(() => TradesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TradesUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TradesUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TradesUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => TradesUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TradesScalarWhereInputSchema),z.lazy(() => TradesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BuyOrdersUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.BuyOrdersUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => BuyOrdersCreateWithoutUserInputSchema),z.lazy(() => BuyOrdersCreateWithoutUserInputSchema).array(),z.lazy(() => BuyOrdersUncheckedCreateWithoutUserInputSchema),z.lazy(() => BuyOrdersUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BuyOrdersCreateOrConnectWithoutUserInputSchema),z.lazy(() => BuyOrdersCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BuyOrdersUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => BuyOrdersUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BuyOrdersCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BuyOrdersWhereUniqueInputSchema),z.lazy(() => BuyOrdersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BuyOrdersWhereUniqueInputSchema),z.lazy(() => BuyOrdersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BuyOrdersWhereUniqueInputSchema),z.lazy(() => BuyOrdersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BuyOrdersWhereUniqueInputSchema),z.lazy(() => BuyOrdersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BuyOrdersUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => BuyOrdersUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BuyOrdersUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => BuyOrdersUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BuyOrdersScalarWhereInputSchema),z.lazy(() => BuyOrdersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SellOrdersUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SellOrdersUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SellOrdersCreateWithoutUserInputSchema),z.lazy(() => SellOrdersCreateWithoutUserInputSchema).array(),z.lazy(() => SellOrdersUncheckedCreateWithoutUserInputSchema),z.lazy(() => SellOrdersUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SellOrdersCreateOrConnectWithoutUserInputSchema),z.lazy(() => SellOrdersCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SellOrdersUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SellOrdersUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SellOrdersCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SellOrdersWhereUniqueInputSchema),z.lazy(() => SellOrdersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SellOrdersWhereUniqueInputSchema),z.lazy(() => SellOrdersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SellOrdersWhereUniqueInputSchema),z.lazy(() => SellOrdersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SellOrdersWhereUniqueInputSchema),z.lazy(() => SellOrdersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SellOrdersUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SellOrdersUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SellOrdersUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SellOrdersUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SellOrdersScalarWhereInputSchema),z.lazy(() => SellOrdersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const HoldingsUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.HoldingsUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => HoldingsCreateWithoutUserInputSchema),z.lazy(() => HoldingsCreateWithoutUserInputSchema).array(),z.lazy(() => HoldingsUncheckedCreateWithoutUserInputSchema),z.lazy(() => HoldingsUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HoldingsCreateOrConnectWithoutUserInputSchema),z.lazy(() => HoldingsCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => HoldingsUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => HoldingsUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => HoldingsCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => HoldingsWhereUniqueInputSchema),z.lazy(() => HoldingsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => HoldingsWhereUniqueInputSchema),z.lazy(() => HoldingsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => HoldingsWhereUniqueInputSchema),z.lazy(() => HoldingsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => HoldingsWhereUniqueInputSchema),z.lazy(() => HoldingsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => HoldingsUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => HoldingsUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => HoldingsUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => HoldingsUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => HoldingsScalarWhereInputSchema),z.lazy(() => HoldingsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TradesUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.TradesUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => TradesCreateWithoutUserInputSchema),z.lazy(() => TradesCreateWithoutUserInputSchema).array(),z.lazy(() => TradesUncheckedCreateWithoutUserInputSchema),z.lazy(() => TradesUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TradesCreateOrConnectWithoutUserInputSchema),z.lazy(() => TradesCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TradesUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TradesUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TradesCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TradesWhereUniqueInputSchema),z.lazy(() => TradesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TradesWhereUniqueInputSchema),z.lazy(() => TradesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TradesWhereUniqueInputSchema),z.lazy(() => TradesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TradesWhereUniqueInputSchema),z.lazy(() => TradesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TradesUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TradesUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TradesUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => TradesUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TradesScalarWhereInputSchema),z.lazy(() => TradesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BuyOrdersUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.BuyOrdersUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => BuyOrdersCreateWithoutUserInputSchema),z.lazy(() => BuyOrdersCreateWithoutUserInputSchema).array(),z.lazy(() => BuyOrdersUncheckedCreateWithoutUserInputSchema),z.lazy(() => BuyOrdersUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BuyOrdersCreateOrConnectWithoutUserInputSchema),z.lazy(() => BuyOrdersCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BuyOrdersUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => BuyOrdersUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BuyOrdersCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BuyOrdersWhereUniqueInputSchema),z.lazy(() => BuyOrdersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BuyOrdersWhereUniqueInputSchema),z.lazy(() => BuyOrdersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BuyOrdersWhereUniqueInputSchema),z.lazy(() => BuyOrdersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BuyOrdersWhereUniqueInputSchema),z.lazy(() => BuyOrdersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BuyOrdersUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => BuyOrdersUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BuyOrdersUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => BuyOrdersUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BuyOrdersScalarWhereInputSchema),z.lazy(() => BuyOrdersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SellOrdersUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SellOrdersUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SellOrdersCreateWithoutUserInputSchema),z.lazy(() => SellOrdersCreateWithoutUserInputSchema).array(),z.lazy(() => SellOrdersUncheckedCreateWithoutUserInputSchema),z.lazy(() => SellOrdersUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SellOrdersCreateOrConnectWithoutUserInputSchema),z.lazy(() => SellOrdersCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SellOrdersUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SellOrdersUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SellOrdersCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SellOrdersWhereUniqueInputSchema),z.lazy(() => SellOrdersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SellOrdersWhereUniqueInputSchema),z.lazy(() => SellOrdersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SellOrdersWhereUniqueInputSchema),z.lazy(() => SellOrdersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SellOrdersWhereUniqueInputSchema),z.lazy(() => SellOrdersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SellOrdersUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SellOrdersUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SellOrdersUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SellOrdersUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SellOrdersScalarWhereInputSchema),z.lazy(() => SellOrdersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const HoldingsUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.HoldingsUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => HoldingsCreateWithoutUserInputSchema),z.lazy(() => HoldingsCreateWithoutUserInputSchema).array(),z.lazy(() => HoldingsUncheckedCreateWithoutUserInputSchema),z.lazy(() => HoldingsUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HoldingsCreateOrConnectWithoutUserInputSchema),z.lazy(() => HoldingsCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => HoldingsUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => HoldingsUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => HoldingsCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => HoldingsWhereUniqueInputSchema),z.lazy(() => HoldingsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => HoldingsWhereUniqueInputSchema),z.lazy(() => HoldingsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => HoldingsWhereUniqueInputSchema),z.lazy(() => HoldingsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => HoldingsWhereUniqueInputSchema),z.lazy(() => HoldingsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => HoldingsUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => HoldingsUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => HoldingsUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => HoldingsUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => HoldingsScalarWhereInputSchema),z.lazy(() => HoldingsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutTradesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTradesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTradesInputSchema),z.lazy(() => UserUncheckedCreateWithoutTradesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTradesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const EnumNoisesFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumNoisesFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => NoisesSchema).optional()
}).strict();

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const UserUpdateOneRequiredWithoutTradesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTradesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTradesInputSchema),z.lazy(() => UserUncheckedCreateWithoutTradesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTradesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTradesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutTradesInputSchema),z.lazy(() => UserUpdateWithoutTradesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTradesInputSchema) ]).optional(),
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const UserCreateNestedOneWithoutBuyOrdersInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutBuyOrdersInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutBuyOrdersInputSchema),z.lazy(() => UserUncheckedCreateWithoutBuyOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBuyOrdersInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutBuyOrdersNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBuyOrdersNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutBuyOrdersInputSchema),z.lazy(() => UserUncheckedCreateWithoutBuyOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBuyOrdersInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutBuyOrdersInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutBuyOrdersInputSchema),z.lazy(() => UserUpdateWithoutBuyOrdersInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBuyOrdersInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutSellOrdersInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSellOrdersInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSellOrdersInputSchema),z.lazy(() => UserUncheckedCreateWithoutSellOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSellOrdersInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutSellOrdersNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSellOrdersNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSellOrdersInputSchema),z.lazy(() => UserUncheckedCreateWithoutSellOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSellOrdersInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSellOrdersInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutSellOrdersInputSchema),z.lazy(() => UserUpdateWithoutSellOrdersInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSellOrdersInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutHoldingsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutHoldingsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutHoldingsInputSchema),z.lazy(() => UserUncheckedCreateWithoutHoldingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutHoldingsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutHoldingsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutHoldingsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutHoldingsInputSchema),z.lazy(() => UserUncheckedCreateWithoutHoldingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutHoldingsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutHoldingsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutHoldingsInputSchema),z.lazy(() => UserUpdateWithoutHoldingsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutHoldingsInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedEnumNoisesFilterSchema: z.ZodType<Prisma.NestedEnumNoisesFilter> = z.object({
  equals: z.lazy(() => NoisesSchema).optional(),
  in: z.lazy(() => NoisesSchema).array().optional(),
  notIn: z.lazy(() => NoisesSchema).array().optional(),
  not: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => NestedEnumNoisesFilterSchema) ]).optional(),
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedEnumNoisesWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumNoisesWithAggregatesFilter> = z.object({
  equals: z.lazy(() => NoisesSchema).optional(),
  in: z.lazy(() => NoisesSchema).array().optional(),
  notIn: z.lazy(() => NoisesSchema).array().optional(),
  not: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => NestedEnumNoisesWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumNoisesFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumNoisesFilterSchema).optional()
}).strict();

export const NestedFloatWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const TradesCreateWithoutUserInputSchema: z.ZodType<Prisma.TradesCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  noise: z.lazy(() => NoisesSchema),
  buyPrice: z.number(),
  sellPrice: z.number(),
  quantity: z.number().int()
}).strict();

export const TradesUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.TradesUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  noise: z.lazy(() => NoisesSchema),
  buyPrice: z.number(),
  sellPrice: z.number(),
  quantity: z.number().int()
}).strict();

export const TradesCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.TradesCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => TradesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TradesCreateWithoutUserInputSchema),z.lazy(() => TradesUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const TradesCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.TradesCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TradesCreateManyUserInputSchema),z.lazy(() => TradesCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const BuyOrdersCreateWithoutUserInputSchema: z.ZodType<Prisma.BuyOrdersCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  noise: z.lazy(() => NoisesSchema),
  quantity: z.number().int(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const BuyOrdersUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.BuyOrdersUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  noise: z.lazy(() => NoisesSchema),
  quantity: z.number().int(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const BuyOrdersCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.BuyOrdersCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => BuyOrdersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BuyOrdersCreateWithoutUserInputSchema),z.lazy(() => BuyOrdersUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const BuyOrdersCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.BuyOrdersCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BuyOrdersCreateManyUserInputSchema),z.lazy(() => BuyOrdersCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const SellOrdersCreateWithoutUserInputSchema: z.ZodType<Prisma.SellOrdersCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  noise: z.lazy(() => NoisesSchema),
  quantity: z.number().int(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SellOrdersUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SellOrdersUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  noise: z.lazy(() => NoisesSchema),
  quantity: z.number().int(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SellOrdersCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SellOrdersCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => SellOrdersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SellOrdersCreateWithoutUserInputSchema),z.lazy(() => SellOrdersUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SellOrdersCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.SellOrdersCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SellOrdersCreateManyUserInputSchema),z.lazy(() => SellOrdersCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const HoldingsCreateWithoutUserInputSchema: z.ZodType<Prisma.HoldingsCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  noise: z.lazy(() => NoisesSchema),
  quantity: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const HoldingsUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.HoldingsUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  noise: z.lazy(() => NoisesSchema),
  quantity: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const HoldingsCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.HoldingsCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => HoldingsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => HoldingsCreateWithoutUserInputSchema),z.lazy(() => HoldingsUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const HoldingsCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.HoldingsCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => HoldingsCreateManyUserInputSchema),z.lazy(() => HoldingsCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TradesUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.TradesUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => TradesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TradesUpdateWithoutUserInputSchema),z.lazy(() => TradesUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => TradesCreateWithoutUserInputSchema),z.lazy(() => TradesUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const TradesUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.TradesUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => TradesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TradesUpdateWithoutUserInputSchema),z.lazy(() => TradesUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const TradesUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.TradesUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => TradesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TradesUpdateManyMutationInputSchema),z.lazy(() => TradesUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const TradesScalarWhereInputSchema: z.ZodType<Prisma.TradesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TradesScalarWhereInputSchema),z.lazy(() => TradesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TradesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TradesScalarWhereInputSchema),z.lazy(() => TradesScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  noise: z.union([ z.lazy(() => EnumNoisesFilterSchema),z.lazy(() => NoisesSchema) ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  buyPrice: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  sellPrice: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const BuyOrdersUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.BuyOrdersUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => BuyOrdersWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BuyOrdersUpdateWithoutUserInputSchema),z.lazy(() => BuyOrdersUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => BuyOrdersCreateWithoutUserInputSchema),z.lazy(() => BuyOrdersUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const BuyOrdersUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.BuyOrdersUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => BuyOrdersWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BuyOrdersUpdateWithoutUserInputSchema),z.lazy(() => BuyOrdersUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const BuyOrdersUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.BuyOrdersUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => BuyOrdersScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BuyOrdersUpdateManyMutationInputSchema),z.lazy(() => BuyOrdersUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const BuyOrdersScalarWhereInputSchema: z.ZodType<Prisma.BuyOrdersScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BuyOrdersScalarWhereInputSchema),z.lazy(() => BuyOrdersScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BuyOrdersScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BuyOrdersScalarWhereInputSchema),z.lazy(() => BuyOrdersScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  noise: z.union([ z.lazy(() => EnumNoisesFilterSchema),z.lazy(() => NoisesSchema) ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const SellOrdersUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SellOrdersUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SellOrdersWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SellOrdersUpdateWithoutUserInputSchema),z.lazy(() => SellOrdersUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => SellOrdersCreateWithoutUserInputSchema),z.lazy(() => SellOrdersUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SellOrdersUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SellOrdersUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SellOrdersWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SellOrdersUpdateWithoutUserInputSchema),z.lazy(() => SellOrdersUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const SellOrdersUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SellOrdersUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => SellOrdersScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SellOrdersUpdateManyMutationInputSchema),z.lazy(() => SellOrdersUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const SellOrdersScalarWhereInputSchema: z.ZodType<Prisma.SellOrdersScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SellOrdersScalarWhereInputSchema),z.lazy(() => SellOrdersScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SellOrdersScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SellOrdersScalarWhereInputSchema),z.lazy(() => SellOrdersScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  noise: z.union([ z.lazy(() => EnumNoisesFilterSchema),z.lazy(() => NoisesSchema) ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const HoldingsUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.HoldingsUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => HoldingsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => HoldingsUpdateWithoutUserInputSchema),z.lazy(() => HoldingsUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => HoldingsCreateWithoutUserInputSchema),z.lazy(() => HoldingsUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const HoldingsUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.HoldingsUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => HoldingsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => HoldingsUpdateWithoutUserInputSchema),z.lazy(() => HoldingsUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const HoldingsUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.HoldingsUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => HoldingsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => HoldingsUpdateManyMutationInputSchema),z.lazy(() => HoldingsUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const HoldingsScalarWhereInputSchema: z.ZodType<Prisma.HoldingsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => HoldingsScalarWhereInputSchema),z.lazy(() => HoldingsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HoldingsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HoldingsScalarWhereInputSchema),z.lazy(() => HoldingsScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  noise: z.union([ z.lazy(() => EnumNoisesFilterSchema),z.lazy(() => NoisesSchema) ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserCreateWithoutTradesInputSchema: z.ZodType<Prisma.UserCreateWithoutTradesInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  buyOrders: z.lazy(() => BuyOrdersCreateNestedManyWithoutUserInputSchema).optional(),
  sellOrders: z.lazy(() => SellOrdersCreateNestedManyWithoutUserInputSchema).optional(),
  holdings: z.lazy(() => HoldingsCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutTradesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutTradesInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  buyOrders: z.lazy(() => BuyOrdersUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sellOrders: z.lazy(() => SellOrdersUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  holdings: z.lazy(() => HoldingsUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutTradesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTradesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutTradesInputSchema),z.lazy(() => UserUncheckedCreateWithoutTradesInputSchema) ]),
}).strict();

export const UserUpsertWithoutTradesInputSchema: z.ZodType<Prisma.UserUpsertWithoutTradesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutTradesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTradesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutTradesInputSchema),z.lazy(() => UserUncheckedCreateWithoutTradesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutTradesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTradesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutTradesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTradesInputSchema) ]),
}).strict();

export const UserUpdateWithoutTradesInputSchema: z.ZodType<Prisma.UserUpdateWithoutTradesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  buyOrders: z.lazy(() => BuyOrdersUpdateManyWithoutUserNestedInputSchema).optional(),
  sellOrders: z.lazy(() => SellOrdersUpdateManyWithoutUserNestedInputSchema).optional(),
  holdings: z.lazy(() => HoldingsUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutTradesInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutTradesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  buyOrders: z.lazy(() => BuyOrdersUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sellOrders: z.lazy(() => SellOrdersUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  holdings: z.lazy(() => HoldingsUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutBuyOrdersInputSchema: z.ZodType<Prisma.UserCreateWithoutBuyOrdersInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  trades: z.lazy(() => TradesCreateNestedManyWithoutUserInputSchema).optional(),
  sellOrders: z.lazy(() => SellOrdersCreateNestedManyWithoutUserInputSchema).optional(),
  holdings: z.lazy(() => HoldingsCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutBuyOrdersInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutBuyOrdersInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  trades: z.lazy(() => TradesUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sellOrders: z.lazy(() => SellOrdersUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  holdings: z.lazy(() => HoldingsUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutBuyOrdersInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutBuyOrdersInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutBuyOrdersInputSchema),z.lazy(() => UserUncheckedCreateWithoutBuyOrdersInputSchema) ]),
}).strict();

export const UserUpsertWithoutBuyOrdersInputSchema: z.ZodType<Prisma.UserUpsertWithoutBuyOrdersInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutBuyOrdersInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBuyOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutBuyOrdersInputSchema),z.lazy(() => UserUncheckedCreateWithoutBuyOrdersInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutBuyOrdersInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBuyOrdersInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutBuyOrdersInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBuyOrdersInputSchema) ]),
}).strict();

export const UserUpdateWithoutBuyOrdersInputSchema: z.ZodType<Prisma.UserUpdateWithoutBuyOrdersInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  trades: z.lazy(() => TradesUpdateManyWithoutUserNestedInputSchema).optional(),
  sellOrders: z.lazy(() => SellOrdersUpdateManyWithoutUserNestedInputSchema).optional(),
  holdings: z.lazy(() => HoldingsUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutBuyOrdersInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutBuyOrdersInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  trades: z.lazy(() => TradesUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sellOrders: z.lazy(() => SellOrdersUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  holdings: z.lazy(() => HoldingsUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutSellOrdersInputSchema: z.ZodType<Prisma.UserCreateWithoutSellOrdersInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  trades: z.lazy(() => TradesCreateNestedManyWithoutUserInputSchema).optional(),
  buyOrders: z.lazy(() => BuyOrdersCreateNestedManyWithoutUserInputSchema).optional(),
  holdings: z.lazy(() => HoldingsCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutSellOrdersInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSellOrdersInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  trades: z.lazy(() => TradesUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  buyOrders: z.lazy(() => BuyOrdersUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  holdings: z.lazy(() => HoldingsUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutSellOrdersInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSellOrdersInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSellOrdersInputSchema),z.lazy(() => UserUncheckedCreateWithoutSellOrdersInputSchema) ]),
}).strict();

export const UserUpsertWithoutSellOrdersInputSchema: z.ZodType<Prisma.UserUpsertWithoutSellOrdersInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSellOrdersInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSellOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSellOrdersInputSchema),z.lazy(() => UserUncheckedCreateWithoutSellOrdersInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutSellOrdersInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSellOrdersInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutSellOrdersInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSellOrdersInputSchema) ]),
}).strict();

export const UserUpdateWithoutSellOrdersInputSchema: z.ZodType<Prisma.UserUpdateWithoutSellOrdersInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  trades: z.lazy(() => TradesUpdateManyWithoutUserNestedInputSchema).optional(),
  buyOrders: z.lazy(() => BuyOrdersUpdateManyWithoutUserNestedInputSchema).optional(),
  holdings: z.lazy(() => HoldingsUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutSellOrdersInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSellOrdersInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  trades: z.lazy(() => TradesUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  buyOrders: z.lazy(() => BuyOrdersUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  holdings: z.lazy(() => HoldingsUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutHoldingsInputSchema: z.ZodType<Prisma.UserCreateWithoutHoldingsInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  trades: z.lazy(() => TradesCreateNestedManyWithoutUserInputSchema).optional(),
  buyOrders: z.lazy(() => BuyOrdersCreateNestedManyWithoutUserInputSchema).optional(),
  sellOrders: z.lazy(() => SellOrdersCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutHoldingsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutHoldingsInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  trades: z.lazy(() => TradesUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  buyOrders: z.lazy(() => BuyOrdersUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sellOrders: z.lazy(() => SellOrdersUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutHoldingsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutHoldingsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutHoldingsInputSchema),z.lazy(() => UserUncheckedCreateWithoutHoldingsInputSchema) ]),
}).strict();

export const UserUpsertWithoutHoldingsInputSchema: z.ZodType<Prisma.UserUpsertWithoutHoldingsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutHoldingsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutHoldingsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutHoldingsInputSchema),z.lazy(() => UserUncheckedCreateWithoutHoldingsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutHoldingsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutHoldingsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutHoldingsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutHoldingsInputSchema) ]),
}).strict();

export const UserUpdateWithoutHoldingsInputSchema: z.ZodType<Prisma.UserUpdateWithoutHoldingsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  trades: z.lazy(() => TradesUpdateManyWithoutUserNestedInputSchema).optional(),
  buyOrders: z.lazy(() => BuyOrdersUpdateManyWithoutUserNestedInputSchema).optional(),
  sellOrders: z.lazy(() => SellOrdersUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutHoldingsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutHoldingsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  trades: z.lazy(() => TradesUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  buyOrders: z.lazy(() => BuyOrdersUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sellOrders: z.lazy(() => SellOrdersUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const TradesCreateManyUserInputSchema: z.ZodType<Prisma.TradesCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  noise: z.lazy(() => NoisesSchema),
  buyPrice: z.number(),
  sellPrice: z.number(),
  quantity: z.number().int()
}).strict();

export const BuyOrdersCreateManyUserInputSchema: z.ZodType<Prisma.BuyOrdersCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  noise: z.lazy(() => NoisesSchema),
  quantity: z.number().int(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SellOrdersCreateManyUserInputSchema: z.ZodType<Prisma.SellOrdersCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  noise: z.lazy(() => NoisesSchema),
  quantity: z.number().int(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const HoldingsCreateManyUserInputSchema: z.ZodType<Prisma.HoldingsCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  noise: z.lazy(() => NoisesSchema),
  quantity: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TradesUpdateWithoutUserInputSchema: z.ZodType<Prisma.TradesUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  buyPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  sellPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TradesUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.TradesUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  buyPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  sellPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TradesUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.TradesUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  buyPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  sellPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BuyOrdersUpdateWithoutUserInputSchema: z.ZodType<Prisma.BuyOrdersUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BuyOrdersUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.BuyOrdersUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BuyOrdersUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.BuyOrdersUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SellOrdersUpdateWithoutUserInputSchema: z.ZodType<Prisma.SellOrdersUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SellOrdersUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.SellOrdersUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SellOrdersUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.SellOrdersUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HoldingsUpdateWithoutUserInputSchema: z.ZodType<Prisma.HoldingsUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HoldingsUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.HoldingsUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HoldingsUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.HoldingsUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noise: z.union([ z.lazy(() => NoisesSchema),z.lazy(() => EnumNoisesFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const TradesFindFirstArgsSchema: z.ZodType<Prisma.TradesFindFirstArgs> = z.object({
  select: TradesSelectSchema.optional(),
  include: TradesIncludeSchema.optional(),
  where: TradesWhereInputSchema.optional(),
  orderBy: z.union([ TradesOrderByWithRelationInputSchema.array(),TradesOrderByWithRelationInputSchema ]).optional(),
  cursor: TradesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TradesScalarFieldEnumSchema,TradesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TradesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TradesFindFirstOrThrowArgs> = z.object({
  select: TradesSelectSchema.optional(),
  include: TradesIncludeSchema.optional(),
  where: TradesWhereInputSchema.optional(),
  orderBy: z.union([ TradesOrderByWithRelationInputSchema.array(),TradesOrderByWithRelationInputSchema ]).optional(),
  cursor: TradesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TradesScalarFieldEnumSchema,TradesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TradesFindManyArgsSchema: z.ZodType<Prisma.TradesFindManyArgs> = z.object({
  select: TradesSelectSchema.optional(),
  include: TradesIncludeSchema.optional(),
  where: TradesWhereInputSchema.optional(),
  orderBy: z.union([ TradesOrderByWithRelationInputSchema.array(),TradesOrderByWithRelationInputSchema ]).optional(),
  cursor: TradesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TradesScalarFieldEnumSchema,TradesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TradesAggregateArgsSchema: z.ZodType<Prisma.TradesAggregateArgs> = z.object({
  where: TradesWhereInputSchema.optional(),
  orderBy: z.union([ TradesOrderByWithRelationInputSchema.array(),TradesOrderByWithRelationInputSchema ]).optional(),
  cursor: TradesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TradesGroupByArgsSchema: z.ZodType<Prisma.TradesGroupByArgs> = z.object({
  where: TradesWhereInputSchema.optional(),
  orderBy: z.union([ TradesOrderByWithAggregationInputSchema.array(),TradesOrderByWithAggregationInputSchema ]).optional(),
  by: TradesScalarFieldEnumSchema.array(),
  having: TradesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TradesFindUniqueArgsSchema: z.ZodType<Prisma.TradesFindUniqueArgs> = z.object({
  select: TradesSelectSchema.optional(),
  include: TradesIncludeSchema.optional(),
  where: TradesWhereUniqueInputSchema,
}).strict() ;

export const TradesFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TradesFindUniqueOrThrowArgs> = z.object({
  select: TradesSelectSchema.optional(),
  include: TradesIncludeSchema.optional(),
  where: TradesWhereUniqueInputSchema,
}).strict() ;

export const NoiseDataFindFirstArgsSchema: z.ZodType<Prisma.NoiseDataFindFirstArgs> = z.object({
  select: NoiseDataSelectSchema.optional(),
  where: NoiseDataWhereInputSchema.optional(),
  orderBy: z.union([ NoiseDataOrderByWithRelationInputSchema.array(),NoiseDataOrderByWithRelationInputSchema ]).optional(),
  cursor: NoiseDataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NoiseDataScalarFieldEnumSchema,NoiseDataScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NoiseDataFindFirstOrThrowArgsSchema: z.ZodType<Prisma.NoiseDataFindFirstOrThrowArgs> = z.object({
  select: NoiseDataSelectSchema.optional(),
  where: NoiseDataWhereInputSchema.optional(),
  orderBy: z.union([ NoiseDataOrderByWithRelationInputSchema.array(),NoiseDataOrderByWithRelationInputSchema ]).optional(),
  cursor: NoiseDataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NoiseDataScalarFieldEnumSchema,NoiseDataScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NoiseDataFindManyArgsSchema: z.ZodType<Prisma.NoiseDataFindManyArgs> = z.object({
  select: NoiseDataSelectSchema.optional(),
  where: NoiseDataWhereInputSchema.optional(),
  orderBy: z.union([ NoiseDataOrderByWithRelationInputSchema.array(),NoiseDataOrderByWithRelationInputSchema ]).optional(),
  cursor: NoiseDataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NoiseDataScalarFieldEnumSchema,NoiseDataScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NoiseDataAggregateArgsSchema: z.ZodType<Prisma.NoiseDataAggregateArgs> = z.object({
  where: NoiseDataWhereInputSchema.optional(),
  orderBy: z.union([ NoiseDataOrderByWithRelationInputSchema.array(),NoiseDataOrderByWithRelationInputSchema ]).optional(),
  cursor: NoiseDataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NoiseDataGroupByArgsSchema: z.ZodType<Prisma.NoiseDataGroupByArgs> = z.object({
  where: NoiseDataWhereInputSchema.optional(),
  orderBy: z.union([ NoiseDataOrderByWithAggregationInputSchema.array(),NoiseDataOrderByWithAggregationInputSchema ]).optional(),
  by: NoiseDataScalarFieldEnumSchema.array(),
  having: NoiseDataScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NoiseDataFindUniqueArgsSchema: z.ZodType<Prisma.NoiseDataFindUniqueArgs> = z.object({
  select: NoiseDataSelectSchema.optional(),
  where: NoiseDataWhereUniqueInputSchema,
}).strict() ;

export const NoiseDataFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.NoiseDataFindUniqueOrThrowArgs> = z.object({
  select: NoiseDataSelectSchema.optional(),
  where: NoiseDataWhereUniqueInputSchema,
}).strict() ;

export const BuyOrdersFindFirstArgsSchema: z.ZodType<Prisma.BuyOrdersFindFirstArgs> = z.object({
  select: BuyOrdersSelectSchema.optional(),
  include: BuyOrdersIncludeSchema.optional(),
  where: BuyOrdersWhereInputSchema.optional(),
  orderBy: z.union([ BuyOrdersOrderByWithRelationInputSchema.array(),BuyOrdersOrderByWithRelationInputSchema ]).optional(),
  cursor: BuyOrdersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BuyOrdersScalarFieldEnumSchema,BuyOrdersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BuyOrdersFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BuyOrdersFindFirstOrThrowArgs> = z.object({
  select: BuyOrdersSelectSchema.optional(),
  include: BuyOrdersIncludeSchema.optional(),
  where: BuyOrdersWhereInputSchema.optional(),
  orderBy: z.union([ BuyOrdersOrderByWithRelationInputSchema.array(),BuyOrdersOrderByWithRelationInputSchema ]).optional(),
  cursor: BuyOrdersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BuyOrdersScalarFieldEnumSchema,BuyOrdersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BuyOrdersFindManyArgsSchema: z.ZodType<Prisma.BuyOrdersFindManyArgs> = z.object({
  select: BuyOrdersSelectSchema.optional(),
  include: BuyOrdersIncludeSchema.optional(),
  where: BuyOrdersWhereInputSchema.optional(),
  orderBy: z.union([ BuyOrdersOrderByWithRelationInputSchema.array(),BuyOrdersOrderByWithRelationInputSchema ]).optional(),
  cursor: BuyOrdersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BuyOrdersScalarFieldEnumSchema,BuyOrdersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BuyOrdersAggregateArgsSchema: z.ZodType<Prisma.BuyOrdersAggregateArgs> = z.object({
  where: BuyOrdersWhereInputSchema.optional(),
  orderBy: z.union([ BuyOrdersOrderByWithRelationInputSchema.array(),BuyOrdersOrderByWithRelationInputSchema ]).optional(),
  cursor: BuyOrdersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BuyOrdersGroupByArgsSchema: z.ZodType<Prisma.BuyOrdersGroupByArgs> = z.object({
  where: BuyOrdersWhereInputSchema.optional(),
  orderBy: z.union([ BuyOrdersOrderByWithAggregationInputSchema.array(),BuyOrdersOrderByWithAggregationInputSchema ]).optional(),
  by: BuyOrdersScalarFieldEnumSchema.array(),
  having: BuyOrdersScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BuyOrdersFindUniqueArgsSchema: z.ZodType<Prisma.BuyOrdersFindUniqueArgs> = z.object({
  select: BuyOrdersSelectSchema.optional(),
  include: BuyOrdersIncludeSchema.optional(),
  where: BuyOrdersWhereUniqueInputSchema,
}).strict() ;

export const BuyOrdersFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.BuyOrdersFindUniqueOrThrowArgs> = z.object({
  select: BuyOrdersSelectSchema.optional(),
  include: BuyOrdersIncludeSchema.optional(),
  where: BuyOrdersWhereUniqueInputSchema,
}).strict() ;

export const SellOrdersFindFirstArgsSchema: z.ZodType<Prisma.SellOrdersFindFirstArgs> = z.object({
  select: SellOrdersSelectSchema.optional(),
  include: SellOrdersIncludeSchema.optional(),
  where: SellOrdersWhereInputSchema.optional(),
  orderBy: z.union([ SellOrdersOrderByWithRelationInputSchema.array(),SellOrdersOrderByWithRelationInputSchema ]).optional(),
  cursor: SellOrdersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SellOrdersScalarFieldEnumSchema,SellOrdersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SellOrdersFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SellOrdersFindFirstOrThrowArgs> = z.object({
  select: SellOrdersSelectSchema.optional(),
  include: SellOrdersIncludeSchema.optional(),
  where: SellOrdersWhereInputSchema.optional(),
  orderBy: z.union([ SellOrdersOrderByWithRelationInputSchema.array(),SellOrdersOrderByWithRelationInputSchema ]).optional(),
  cursor: SellOrdersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SellOrdersScalarFieldEnumSchema,SellOrdersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SellOrdersFindManyArgsSchema: z.ZodType<Prisma.SellOrdersFindManyArgs> = z.object({
  select: SellOrdersSelectSchema.optional(),
  include: SellOrdersIncludeSchema.optional(),
  where: SellOrdersWhereInputSchema.optional(),
  orderBy: z.union([ SellOrdersOrderByWithRelationInputSchema.array(),SellOrdersOrderByWithRelationInputSchema ]).optional(),
  cursor: SellOrdersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SellOrdersScalarFieldEnumSchema,SellOrdersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SellOrdersAggregateArgsSchema: z.ZodType<Prisma.SellOrdersAggregateArgs> = z.object({
  where: SellOrdersWhereInputSchema.optional(),
  orderBy: z.union([ SellOrdersOrderByWithRelationInputSchema.array(),SellOrdersOrderByWithRelationInputSchema ]).optional(),
  cursor: SellOrdersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SellOrdersGroupByArgsSchema: z.ZodType<Prisma.SellOrdersGroupByArgs> = z.object({
  where: SellOrdersWhereInputSchema.optional(),
  orderBy: z.union([ SellOrdersOrderByWithAggregationInputSchema.array(),SellOrdersOrderByWithAggregationInputSchema ]).optional(),
  by: SellOrdersScalarFieldEnumSchema.array(),
  having: SellOrdersScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SellOrdersFindUniqueArgsSchema: z.ZodType<Prisma.SellOrdersFindUniqueArgs> = z.object({
  select: SellOrdersSelectSchema.optional(),
  include: SellOrdersIncludeSchema.optional(),
  where: SellOrdersWhereUniqueInputSchema,
}).strict() ;

export const SellOrdersFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SellOrdersFindUniqueOrThrowArgs> = z.object({
  select: SellOrdersSelectSchema.optional(),
  include: SellOrdersIncludeSchema.optional(),
  where: SellOrdersWhereUniqueInputSchema,
}).strict() ;

export const HoldingsFindFirstArgsSchema: z.ZodType<Prisma.HoldingsFindFirstArgs> = z.object({
  select: HoldingsSelectSchema.optional(),
  include: HoldingsIncludeSchema.optional(),
  where: HoldingsWhereInputSchema.optional(),
  orderBy: z.union([ HoldingsOrderByWithRelationInputSchema.array(),HoldingsOrderByWithRelationInputSchema ]).optional(),
  cursor: HoldingsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HoldingsScalarFieldEnumSchema,HoldingsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const HoldingsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.HoldingsFindFirstOrThrowArgs> = z.object({
  select: HoldingsSelectSchema.optional(),
  include: HoldingsIncludeSchema.optional(),
  where: HoldingsWhereInputSchema.optional(),
  orderBy: z.union([ HoldingsOrderByWithRelationInputSchema.array(),HoldingsOrderByWithRelationInputSchema ]).optional(),
  cursor: HoldingsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HoldingsScalarFieldEnumSchema,HoldingsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const HoldingsFindManyArgsSchema: z.ZodType<Prisma.HoldingsFindManyArgs> = z.object({
  select: HoldingsSelectSchema.optional(),
  include: HoldingsIncludeSchema.optional(),
  where: HoldingsWhereInputSchema.optional(),
  orderBy: z.union([ HoldingsOrderByWithRelationInputSchema.array(),HoldingsOrderByWithRelationInputSchema ]).optional(),
  cursor: HoldingsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HoldingsScalarFieldEnumSchema,HoldingsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const HoldingsAggregateArgsSchema: z.ZodType<Prisma.HoldingsAggregateArgs> = z.object({
  where: HoldingsWhereInputSchema.optional(),
  orderBy: z.union([ HoldingsOrderByWithRelationInputSchema.array(),HoldingsOrderByWithRelationInputSchema ]).optional(),
  cursor: HoldingsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const HoldingsGroupByArgsSchema: z.ZodType<Prisma.HoldingsGroupByArgs> = z.object({
  where: HoldingsWhereInputSchema.optional(),
  orderBy: z.union([ HoldingsOrderByWithAggregationInputSchema.array(),HoldingsOrderByWithAggregationInputSchema ]).optional(),
  by: HoldingsScalarFieldEnumSchema.array(),
  having: HoldingsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const HoldingsFindUniqueArgsSchema: z.ZodType<Prisma.HoldingsFindUniqueArgs> = z.object({
  select: HoldingsSelectSchema.optional(),
  include: HoldingsIncludeSchema.optional(),
  where: HoldingsWhereUniqueInputSchema,
}).strict() ;

export const HoldingsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.HoldingsFindUniqueOrThrowArgs> = z.object({
  select: HoldingsSelectSchema.optional(),
  include: HoldingsIncludeSchema.optional(),
  where: HoldingsWhereUniqueInputSchema,
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserCreateManyAndReturnArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UserUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.UserUpdateManyAndReturnArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const TradesCreateArgsSchema: z.ZodType<Prisma.TradesCreateArgs> = z.object({
  select: TradesSelectSchema.optional(),
  include: TradesIncludeSchema.optional(),
  data: z.union([ TradesCreateInputSchema,TradesUncheckedCreateInputSchema ]),
}).strict() ;

export const TradesUpsertArgsSchema: z.ZodType<Prisma.TradesUpsertArgs> = z.object({
  select: TradesSelectSchema.optional(),
  include: TradesIncludeSchema.optional(),
  where: TradesWhereUniqueInputSchema,
  create: z.union([ TradesCreateInputSchema,TradesUncheckedCreateInputSchema ]),
  update: z.union([ TradesUpdateInputSchema,TradesUncheckedUpdateInputSchema ]),
}).strict() ;

export const TradesCreateManyArgsSchema: z.ZodType<Prisma.TradesCreateManyArgs> = z.object({
  data: z.union([ TradesCreateManyInputSchema,TradesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TradesCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TradesCreateManyAndReturnArgs> = z.object({
  data: z.union([ TradesCreateManyInputSchema,TradesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TradesDeleteArgsSchema: z.ZodType<Prisma.TradesDeleteArgs> = z.object({
  select: TradesSelectSchema.optional(),
  include: TradesIncludeSchema.optional(),
  where: TradesWhereUniqueInputSchema,
}).strict() ;

export const TradesUpdateArgsSchema: z.ZodType<Prisma.TradesUpdateArgs> = z.object({
  select: TradesSelectSchema.optional(),
  include: TradesIncludeSchema.optional(),
  data: z.union([ TradesUpdateInputSchema,TradesUncheckedUpdateInputSchema ]),
  where: TradesWhereUniqueInputSchema,
}).strict() ;

export const TradesUpdateManyArgsSchema: z.ZodType<Prisma.TradesUpdateManyArgs> = z.object({
  data: z.union([ TradesUpdateManyMutationInputSchema,TradesUncheckedUpdateManyInputSchema ]),
  where: TradesWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const TradesUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.TradesUpdateManyAndReturnArgs> = z.object({
  data: z.union([ TradesUpdateManyMutationInputSchema,TradesUncheckedUpdateManyInputSchema ]),
  where: TradesWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const TradesDeleteManyArgsSchema: z.ZodType<Prisma.TradesDeleteManyArgs> = z.object({
  where: TradesWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const NoiseDataCreateArgsSchema: z.ZodType<Prisma.NoiseDataCreateArgs> = z.object({
  select: NoiseDataSelectSchema.optional(),
  data: z.union([ NoiseDataCreateInputSchema,NoiseDataUncheckedCreateInputSchema ]),
}).strict() ;

export const NoiseDataUpsertArgsSchema: z.ZodType<Prisma.NoiseDataUpsertArgs> = z.object({
  select: NoiseDataSelectSchema.optional(),
  where: NoiseDataWhereUniqueInputSchema,
  create: z.union([ NoiseDataCreateInputSchema,NoiseDataUncheckedCreateInputSchema ]),
  update: z.union([ NoiseDataUpdateInputSchema,NoiseDataUncheckedUpdateInputSchema ]),
}).strict() ;

export const NoiseDataCreateManyArgsSchema: z.ZodType<Prisma.NoiseDataCreateManyArgs> = z.object({
  data: z.union([ NoiseDataCreateManyInputSchema,NoiseDataCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const NoiseDataCreateManyAndReturnArgsSchema: z.ZodType<Prisma.NoiseDataCreateManyAndReturnArgs> = z.object({
  data: z.union([ NoiseDataCreateManyInputSchema,NoiseDataCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const NoiseDataDeleteArgsSchema: z.ZodType<Prisma.NoiseDataDeleteArgs> = z.object({
  select: NoiseDataSelectSchema.optional(),
  where: NoiseDataWhereUniqueInputSchema,
}).strict() ;

export const NoiseDataUpdateArgsSchema: z.ZodType<Prisma.NoiseDataUpdateArgs> = z.object({
  select: NoiseDataSelectSchema.optional(),
  data: z.union([ NoiseDataUpdateInputSchema,NoiseDataUncheckedUpdateInputSchema ]),
  where: NoiseDataWhereUniqueInputSchema,
}).strict() ;

export const NoiseDataUpdateManyArgsSchema: z.ZodType<Prisma.NoiseDataUpdateManyArgs> = z.object({
  data: z.union([ NoiseDataUpdateManyMutationInputSchema,NoiseDataUncheckedUpdateManyInputSchema ]),
  where: NoiseDataWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const NoiseDataUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.NoiseDataUpdateManyAndReturnArgs> = z.object({
  data: z.union([ NoiseDataUpdateManyMutationInputSchema,NoiseDataUncheckedUpdateManyInputSchema ]),
  where: NoiseDataWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const NoiseDataDeleteManyArgsSchema: z.ZodType<Prisma.NoiseDataDeleteManyArgs> = z.object({
  where: NoiseDataWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const BuyOrdersCreateArgsSchema: z.ZodType<Prisma.BuyOrdersCreateArgs> = z.object({
  select: BuyOrdersSelectSchema.optional(),
  include: BuyOrdersIncludeSchema.optional(),
  data: z.union([ BuyOrdersCreateInputSchema,BuyOrdersUncheckedCreateInputSchema ]),
}).strict() ;

export const BuyOrdersUpsertArgsSchema: z.ZodType<Prisma.BuyOrdersUpsertArgs> = z.object({
  select: BuyOrdersSelectSchema.optional(),
  include: BuyOrdersIncludeSchema.optional(),
  where: BuyOrdersWhereUniqueInputSchema,
  create: z.union([ BuyOrdersCreateInputSchema,BuyOrdersUncheckedCreateInputSchema ]),
  update: z.union([ BuyOrdersUpdateInputSchema,BuyOrdersUncheckedUpdateInputSchema ]),
}).strict() ;

export const BuyOrdersCreateManyArgsSchema: z.ZodType<Prisma.BuyOrdersCreateManyArgs> = z.object({
  data: z.union([ BuyOrdersCreateManyInputSchema,BuyOrdersCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const BuyOrdersCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BuyOrdersCreateManyAndReturnArgs> = z.object({
  data: z.union([ BuyOrdersCreateManyInputSchema,BuyOrdersCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const BuyOrdersDeleteArgsSchema: z.ZodType<Prisma.BuyOrdersDeleteArgs> = z.object({
  select: BuyOrdersSelectSchema.optional(),
  include: BuyOrdersIncludeSchema.optional(),
  where: BuyOrdersWhereUniqueInputSchema,
}).strict() ;

export const BuyOrdersUpdateArgsSchema: z.ZodType<Prisma.BuyOrdersUpdateArgs> = z.object({
  select: BuyOrdersSelectSchema.optional(),
  include: BuyOrdersIncludeSchema.optional(),
  data: z.union([ BuyOrdersUpdateInputSchema,BuyOrdersUncheckedUpdateInputSchema ]),
  where: BuyOrdersWhereUniqueInputSchema,
}).strict() ;

export const BuyOrdersUpdateManyArgsSchema: z.ZodType<Prisma.BuyOrdersUpdateManyArgs> = z.object({
  data: z.union([ BuyOrdersUpdateManyMutationInputSchema,BuyOrdersUncheckedUpdateManyInputSchema ]),
  where: BuyOrdersWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const BuyOrdersUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.BuyOrdersUpdateManyAndReturnArgs> = z.object({
  data: z.union([ BuyOrdersUpdateManyMutationInputSchema,BuyOrdersUncheckedUpdateManyInputSchema ]),
  where: BuyOrdersWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const BuyOrdersDeleteManyArgsSchema: z.ZodType<Prisma.BuyOrdersDeleteManyArgs> = z.object({
  where: BuyOrdersWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const SellOrdersCreateArgsSchema: z.ZodType<Prisma.SellOrdersCreateArgs> = z.object({
  select: SellOrdersSelectSchema.optional(),
  include: SellOrdersIncludeSchema.optional(),
  data: z.union([ SellOrdersCreateInputSchema,SellOrdersUncheckedCreateInputSchema ]),
}).strict() ;

export const SellOrdersUpsertArgsSchema: z.ZodType<Prisma.SellOrdersUpsertArgs> = z.object({
  select: SellOrdersSelectSchema.optional(),
  include: SellOrdersIncludeSchema.optional(),
  where: SellOrdersWhereUniqueInputSchema,
  create: z.union([ SellOrdersCreateInputSchema,SellOrdersUncheckedCreateInputSchema ]),
  update: z.union([ SellOrdersUpdateInputSchema,SellOrdersUncheckedUpdateInputSchema ]),
}).strict() ;

export const SellOrdersCreateManyArgsSchema: z.ZodType<Prisma.SellOrdersCreateManyArgs> = z.object({
  data: z.union([ SellOrdersCreateManyInputSchema,SellOrdersCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const SellOrdersCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SellOrdersCreateManyAndReturnArgs> = z.object({
  data: z.union([ SellOrdersCreateManyInputSchema,SellOrdersCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const SellOrdersDeleteArgsSchema: z.ZodType<Prisma.SellOrdersDeleteArgs> = z.object({
  select: SellOrdersSelectSchema.optional(),
  include: SellOrdersIncludeSchema.optional(),
  where: SellOrdersWhereUniqueInputSchema,
}).strict() ;

export const SellOrdersUpdateArgsSchema: z.ZodType<Prisma.SellOrdersUpdateArgs> = z.object({
  select: SellOrdersSelectSchema.optional(),
  include: SellOrdersIncludeSchema.optional(),
  data: z.union([ SellOrdersUpdateInputSchema,SellOrdersUncheckedUpdateInputSchema ]),
  where: SellOrdersWhereUniqueInputSchema,
}).strict() ;

export const SellOrdersUpdateManyArgsSchema: z.ZodType<Prisma.SellOrdersUpdateManyArgs> = z.object({
  data: z.union([ SellOrdersUpdateManyMutationInputSchema,SellOrdersUncheckedUpdateManyInputSchema ]),
  where: SellOrdersWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const SellOrdersUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.SellOrdersUpdateManyAndReturnArgs> = z.object({
  data: z.union([ SellOrdersUpdateManyMutationInputSchema,SellOrdersUncheckedUpdateManyInputSchema ]),
  where: SellOrdersWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const SellOrdersDeleteManyArgsSchema: z.ZodType<Prisma.SellOrdersDeleteManyArgs> = z.object({
  where: SellOrdersWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const HoldingsCreateArgsSchema: z.ZodType<Prisma.HoldingsCreateArgs> = z.object({
  select: HoldingsSelectSchema.optional(),
  include: HoldingsIncludeSchema.optional(),
  data: z.union([ HoldingsCreateInputSchema,HoldingsUncheckedCreateInputSchema ]),
}).strict() ;

export const HoldingsUpsertArgsSchema: z.ZodType<Prisma.HoldingsUpsertArgs> = z.object({
  select: HoldingsSelectSchema.optional(),
  include: HoldingsIncludeSchema.optional(),
  where: HoldingsWhereUniqueInputSchema,
  create: z.union([ HoldingsCreateInputSchema,HoldingsUncheckedCreateInputSchema ]),
  update: z.union([ HoldingsUpdateInputSchema,HoldingsUncheckedUpdateInputSchema ]),
}).strict() ;

export const HoldingsCreateManyArgsSchema: z.ZodType<Prisma.HoldingsCreateManyArgs> = z.object({
  data: z.union([ HoldingsCreateManyInputSchema,HoldingsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const HoldingsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.HoldingsCreateManyAndReturnArgs> = z.object({
  data: z.union([ HoldingsCreateManyInputSchema,HoldingsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const HoldingsDeleteArgsSchema: z.ZodType<Prisma.HoldingsDeleteArgs> = z.object({
  select: HoldingsSelectSchema.optional(),
  include: HoldingsIncludeSchema.optional(),
  where: HoldingsWhereUniqueInputSchema,
}).strict() ;

export const HoldingsUpdateArgsSchema: z.ZodType<Prisma.HoldingsUpdateArgs> = z.object({
  select: HoldingsSelectSchema.optional(),
  include: HoldingsIncludeSchema.optional(),
  data: z.union([ HoldingsUpdateInputSchema,HoldingsUncheckedUpdateInputSchema ]),
  where: HoldingsWhereUniqueInputSchema,
}).strict() ;

export const HoldingsUpdateManyArgsSchema: z.ZodType<Prisma.HoldingsUpdateManyArgs> = z.object({
  data: z.union([ HoldingsUpdateManyMutationInputSchema,HoldingsUncheckedUpdateManyInputSchema ]),
  where: HoldingsWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const HoldingsUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.HoldingsUpdateManyAndReturnArgs> = z.object({
  data: z.union([ HoldingsUpdateManyMutationInputSchema,HoldingsUncheckedUpdateManyInputSchema ]),
  where: HoldingsWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const HoldingsDeleteManyArgsSchema: z.ZodType<Prisma.HoldingsDeleteManyArgs> = z.object({
  where: HoldingsWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;