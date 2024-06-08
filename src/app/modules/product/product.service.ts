import { TProduct } from './product.interface';
import { ProductModel } from './product.model';

const createProductIntoDB = async (productData: TProduct) => {
  const result = await ProductModel.create(productData);
  return result;
};

// get all products
const getProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

// get single product
const getSingleProduct = async (productId: string) => {
  const result = await ProductModel.findOne({ _id: productId });
  return result;
};

// update
const updateProductByIdFromDB = async (
  productId: string,
  productUpdatedData: TProduct,
) => {
  const result = ProductModel.findOneAndUpdate(
    { _id: productId },
    { $set: productUpdatedData },
    { new: true },
  );
  return result;
};

// delete

const deleteProductByIdFromDB = async (productId: string) => {
  const result = await ProductModel.deleteOne({ _id: productId });
  return result;
};
// search
const searchItemFromDB = async (searchTerm: string) => {
  const result = await ProductModel.aggregate([
    { $unwind: '$tags' },
    {
      $match: {
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { description: { $regex: searchTerm, $options: 'i' } },
          { category: { $regex: searchTerm, $options: 'i' } },
          { tags: { $regex: searchTerm, $options: 'i' } },
        ],
      },
    },
  ]);
  return result;
};

export const productServices = {
  createProductIntoDB,
  getProductsFromDB,
  getSingleProduct,
  updateProductByIdFromDB,
  deleteProductByIdFromDB,
  searchItemFromDB,
};
