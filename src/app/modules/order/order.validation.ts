import { z } from 'zod';

const orderValidation = z.object({
  email: z.string().email(),
  productId: z.string(),
  price: z.number(),
  quantity: z.number(),
});

export { orderValidation };
