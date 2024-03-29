import Product from "../moldes/product";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;
const createProduct = async (data, images) => {
  try {
    const { title, content, price, fbUrl, userIdRegister } = data;
    let imagesUrl = [];
    if (images) {
      for (let i = 0; i < images.length; i++) {
        imagesUrl.push(images[i].path);
      }
    }
    const newProduct = {
      title: title,
      content: content,
      price: price,
      images: imagesUrl,
      fbUrl: fbUrl,
      userIdRegister: userIdRegister,
    };

    const rs = await Product.create(newProduct)
      .then((rs) => {
        return { success: true, mess: "Create new product successfully" };
      })
      .catch((err) => {
        return {
          success: false,
          mess: `Create new product error ${err} `,
        };
      });
    return rs;
  } catch (error) {
    return {
      success: false,
      mess: `${error}`,
    };
  }
};

const getProductWithId = async (id) => {
  try {
    const productId = new ObjectId(id);
    const rs = await Product.aggregate([
      { $match: { _id: productId } },
      {
        $lookup: {
          from: "ratings", // The collection to join with
          localField: "_id", // Field from the current collection
          foreignField: "productId", // Field from the joined collection
          as: "ratings",
        },
      },
      {
        $lookup: {
          from: "options", // The collection to join with
          localField: "_id", // Field from the current collection
          foreignField: "productId", // Field from the joined collection
          as: "options",
        },
      },

      {
        $addFields: {
          ratingCount: {
            $cond: {
              if: { $isArray: "$ratings" },
              then: { $size: "$ratings" },
              else: 0,
            },
          },
          avgRating: {
            $cond: {
              if: { $isArray: "$ratings" },
              then: { $avg: "$ratings.rating" },
              else: 0,
            },
          },
        },
      },
      { $unwind: { path: "$ratings", preserveNullAndEmptyArrays: true } },

      {
        $project: {
          _id: 1,
          title: 1,
          name: 1,
          content: 1,
          images: 1,
          fbUrl: 1,
          userIdRegister: 1,
          isDelete: 1,
          createdAt: 1,
          ratings: 1, // Include empty array for ratings
          options: 1, // Include empty array for options
          ratingCount: 1, // Giữ nguyên trường ratingCount
          avgRating: 1, // Giữ nguyên trường ratingCount
        },
      },
      {
        $group: {
          _id: "$_id",
          title: { $first: "$title" },
          name: { $first: "$name" },
          content: { $first: "$content" },
          images: { $first: "$images" },
          fbUrl: { $first: "$fbUrl" },
          userIdRegister: { $first: "$userIdRegister" },
          isDelete: { $first: "$isDelete" },
          createdAt: { $first: "$createdAt" },
          ratings: { $push: "$ratings" },
          options: { $first: "$options" },
          ratingCount: { $first: "$ratingCount" }, // Sử dụng $first cho ratingCount
          avgRating: { $first: "$avgRating" },
          totalStart5: {
            $sum: { $cond: [{ $eq: ["$ratings.rating", 5] }, 1, 0] },
          },
          totalStart4: {
            $sum: { $cond: [{ $eq: ["$ratings.rating", 4] }, 1, 0] },
          },
          totalStart3: {
            $sum: { $cond: [{ $eq: ["$ratings.rating", 3] }, 1, 0] },
          },
          totalStart2: {
            $sum: { $cond: [{ $eq: ["$ratings.rating", 2] }, 1, 0] },
          },
          totalStart1: {
            $sum: { $cond: [{ $eq: ["$ratings.rating", 1] }, 1, 0] },
          },
        },
      },
    ])
      .then((rs) => {
        return {
          success: true,
          data: rs[0],
        };
      })
      .catch((err) => {
        return {
          success: false,
          mess: `${err}`,
        };
      });
    return rs;
  } catch (error) {
    return {
      success: false,
      mess: `${error}`,
    };
  }
};

const getAllProduct = async () => {
  try {
    const products = await Product.aggregate([
      {
        $lookup: {
          from: "ratings", // The collection to join with
          localField: "_id", // Field from the current collection
          foreignField: "productId", // Field from the joined collection
          as: "ratings", // Name of the field to store the joined documents
        },
      },
      {
        $addFields: {
          ratingCount: {
            $cond: {
              if: { $isArray: "$ratings" },
              then: { $size: "$ratings" },
              else: 0,
            },
          },
          avgRating: {
            $cond: {
              if: { $isArray: "$ratings" },
              then: { $avg: "$ratings.rating" },
              else: 0,
            },
          },
        },
      },
    ]);
    return products;
  } catch (error) {
    return {
      success: false,
      mess: `${error}`,
    };
  }
};

const updateProductWithId = async (id, data, images) => {
  try {
    const convertData = { ...data };
    const { title, content, price, fbUrl, userIdRegister } = convertData;
    console.log(convertData);
    let imagesUrl = [];
    if (images) {
      for (let i = 0; i < images.length; i++) {
        imagesUrl.push(images[i].path);
      }
    }
    const existingProduct = await Product.findOne({ _id: id })
      .then((rs) => {
        return rs;
      })
      .catch((err) => {
        return {
          success: false,
          mess: `${err}`,
        };
      });

    const updateProduct = {
      title: title ? title : existingProduct.title,
      content: content ? content : existingProduct.content,
      price: price ? price : existingProduct.price,
      images:
        imagesUrl && imagesUrl.length > 0 ? imagesUrl : existingProduct.images,
      fbUrl: fbUrl ? fbUrl : existingProduct.fbUrl,
      userIdRegister: userIdRegister
        ? userIdRegister
        : existingProduct.userIdRegister,
    };
    console.log(updateProduct);
    const rs = await Product.updateOne({ _id: id }, updateProduct)
      .then((rs) => {
        return {
          success: true,
          mess: "Update product success",
        };
      })
      .catch((err) => {
        return {
          success: false,
          mess: `${err}`,
        };
      });
    return rs;
  } catch (error) {
    return {
      success: false,
      mess: `${error}`,
    };
  }
};

const removeProductWithId = async (id) => {
  try {
    const rs = await Product.updateOne(
      { _id: id },
      { $set: { isDelete: true } }
    )
      .then((rs) => {
        return {
          success: true,
          mess: "Remove product success",
        };
      })
      .catch((err) => {
        return {
          success: false,
          mess: `${err}`,
        };
      });
    return rs;
  } catch (error) {
    return {
      success: false,
      mess: `${error}`,
    };
  }
};

export default {
  createProduct,
  getProductWithId,
  getAllProduct,
  updateProductWithId,
  removeProductWithId,
};
