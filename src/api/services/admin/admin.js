const {
  findAdmin,
  findAdminById,
  insertAdmin,
  updateAdmin,
} = require("../../repository/admin/admin.js");
const bcrypt = require("bcrypt");

const salt = bcrypt.genSaltSync(10);

const getAllAdmins = async () => {
  const admin = await findAdmin();

  return admin;
};

const getAdminById = async (id) => {
  const admin = await findAdminById(id);

  if (!admin) {
    throw new Error("admin not found");
  }

  return admin;
};

const createAdmin = async (newAdminData) => {
  const { password } = newAdminData;
  const hashPassword = bcrypt.hashSync(password, salt);
  const admin = await insertAdmin(newAdminData, hashPassword);

  return admin;
};

const updateAdminById = async (id, adminData) => {
  await getAdminById(id);

  const admin = await updateAdmin(id, adminData);

  return admin;
};

const deleteAdminById = async (id) => {
  await getProductById(id);

  await deleteAdmin(id);
};

module.exports = {
  getAllAdmins,
  getAdminById,
  createAdmin,
  updateAdminById,
  deleteAdminById,
};
