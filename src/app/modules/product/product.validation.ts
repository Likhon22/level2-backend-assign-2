import { z } from 'zod';

// subValidation

const variantsValidation = z.array(
  z.object({
    type: z.string(),
    value: z.string(),
  }),
);
const inventoryValidation = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

const productValidationSchema = z.object({
  name: z.string().trim(),

  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.string().array(),
  variants: variantsValidation,
  inventory: inventoryValidation,
});

export { productValidationSchema };
