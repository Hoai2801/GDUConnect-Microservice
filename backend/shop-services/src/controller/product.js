import productServices from "../services/productServices";

const createNewProduct = async (req, res) => {
  try {
    const { title, content, price, fbUrl, userIdRegister } = req.body;
    const images = req.files;
    if (!title || !content || !price || !fbUrl || !userIdRegister) {
      return res.status(400).json({
        mess: "Please input data",
      });
    }
    const rs = await productServices.createProduct(req.body, images);
    return res.status(200).json(rs);
  } catch (error) {
    return res.status(400).json({
      mess: `${error}`,
    });
  }
};

const getProductWithId = async (req, res) => {
  try {
    const id = req.params.id;
    const rs = await productServices.getProductWithId(id);

    return res.status(200).json(rs);
  } catch (error) {
    return res.status(400).json({
      success: false,
      mess: `${error}`,
    });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const rs = await productServices.getAllProduct();
    return res.status(200).json(rs);
  } catch (error) {
    return res.status(400).json({
      success: false,
      mess: `${error}`,
    });
  }
};

const updateProductWithId = async (req, res) => {
  try {
    const images = req.files;
    console.log(req.body);
    const id = req.params.id;
    const rs = await productServices.updateProductWithId(id, req.body, images);
    return res.status(200).json(rs);
  } catch (error) {
    return res.status(400).json({
      success: false,
      mess: `${error}`,
    });
  }
};

const deleteProductWithId = async (req, res) => {
  try {
    const id = req.params.id;
    const rs = await productServices.removeProductWithId(id);
    return res.status(200).json(rs);
  } catch (error) {
    return res.status(400).json({
      success: false,
      mess: `${error}`,
    });
  }
};

export default {
  createNewProduct,
  getProductWithId,
  getAllProduct,
  updateProductWithId,
  deleteProductWithId,
};
