import optionServices from "../services/optionServices";

const createNewOption = async (req, res) => {
  try {
    const { options, productId } = req.body;
    if (!options || !productId) {
      return res.status(400).json({
        mess: "Please input data",
      });
    }
    const rs = await optionServices.createOption(req.body);
    return res.status(200).json(rs);
  } catch (error) {
    return res.status(400).json({
      mess: `${error}`,
    });
  }
};

const getOptionWithId = async (req, res) => {
  try {
    const id = req.params.id;
    const rs = await optionServices.getOptionWithId(id);

    return res.status(200).json(rs);
  } catch (error) {
    return res.status(400).json({
      success: false,
      mess: `${error}`,
    });
  }
};

const getAllOption = async (req, res) => {
  try {
    const rs = await optionServices.getAllOption();
    return res.status(200).json(rs);
  } catch (error) {
    return res.status(400).json({
      success: false,
      mess: `${error}`,
    });
  }
};

export default {
  createNewOption,
  getOptionWithId,
  getAllOption,
};
