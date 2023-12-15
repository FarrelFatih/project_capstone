const {
  findLayanan,
  findLayananId,
  insertLayanan,
  updateLayanan,
  deleteLayanan,
} = require("../../repository/admin/layanan.js");

// ----- # Get All Boat # ----- //
const getAllLayanan = async () => {
  try {
    const admin = await findLayanan();
    return admin;
  } catch (err) {
    console.log(err);
  }
};

// ----- # Get Boat By Id# ----- //
const getLayananById = async (id) => {
  try {
    const admin = await findLayananId(id);

    if (!admin) {
      throw new Error("admin not found");
    }

    return admin;
  } catch (err) {
    console.log(err);
  }
};

// ----- # Create Boat # ----- //
const createLayanan = async (newDataLayanan) => {
  try {
    const admin = await insertLayanan(newDataLayanan);

    return admin;
  } catch (err) {
    console.log(err);
  }
};

// ----- # Update Boat # ----- //
const updateLayananById = async (id, datalayanan) => {
  try {
    await getLayananById(id);

    const admin = await updateLayanan(id, datalayanan);

    return admin;
  } catch (err) {
    console.log(err);
  }
};

// ----- # Delete Boat # ----- //
const deleteLayananById = async (id) => {
  try {
    await getLayananById(id);

    await deleteLayanan(id);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllLayanan,
  getLayananById,
  createLayanan,
  updateLayananById,
  deleteLayananById,
};
