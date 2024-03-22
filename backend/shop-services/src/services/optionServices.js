import Option from "../moldes/option";

const createOption = async (data) => {
  try {
    const { options, productId } = data;
    const newoptions = {
      option: [],
      productId: productId,
    };
    if (options) {
      for (let i = 0; i < options.length; i++) {
        newoptions.option.push(options[i]);
      }
    }

    const rs = await Option.create(newoptions)
      .then(async (rs) => {
        return { success: true, mess: "Create new option successfully" };
      })
      .catch((err) => {
        return {
          success: false,
          mess: `Create new option error ${err} `,
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

const getOptionWithId = async (id) => {
  try {
    const rs = await Option.findOne({ _id: id })
      .then((rs) => {
        return {
          success: true,
          data: rs,
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

const getAllOption = async () => {
  try {
    const rs = await Option.find()
      .then((rs) => {
        return {
          success: true,
          data: rs,
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

// const removeoptionWithId = async (id) => {
//   try {
//     const rs = await option
//       .updateOne({ _id: id }, { $set: { isDelete: true } })
//       .then((rs) => {
//         return {
//           success: true,
//           mess: "Remove option success",
//         };
//       })
//       .catch((err) => {
//         return {
//           success: false,
//           mess: `${err}`,
//         };
//       });
//     return rs;
//   } catch (error) {
//     return {
//       success: false,
//       mess: `${error}`,
//     };
//   }
// };

export default {
  createOption,
  getOptionWithId,
  getAllOption,
};
