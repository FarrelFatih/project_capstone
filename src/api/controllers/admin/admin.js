const express = require("express");
const router = express.Router();

const {
  getAllAdmins,
  getAdminById,
  createAdmin,
  updateAdminById,
} = require("../../services/admin/admin.js");

router.get("/", async (req, res) => {
  const admin = await getAllAdmins();

  res.send(admin);
});

router.get("/:id", async (req, res) => {
  try {
    const adminId = req.params.id;
    console.log(adminId);
    const admin = await getAdminById(adminId);

    res.send(admin);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newAdminData = req.body;
    const admin = await createAdmin(newAdminData);
    res.send({
      data: admin,
      message: "admin created successfully",
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.put("/:id", async (req, res) => {
  const adminId = req.params.id;
  const adminData = req.body;

  if (
    !(
      adminData.firstName &&
      adminData.lastName &&
      adminData.city &&
      adminData.country
    )
  ) {
    res.status(400).send("Missing parameters");
  }

  const admin = await updateAdminById(adminId, adminData);

  res.send({
    data: admin,
    message: "admin updated successfully",
  });
});

// router.patch("/:id", async (req, res) => {
//   try {
//     const adminId = req.params.id;
//     const adminData = req.body;

//     const admin = await updateadminById(adminId(adminId), adminData);

//     res.send({
//       data: admin,
//       message: "admin updated successfully",
//     });
//   } catch (err) {
//     res.status(400).send(err.message);
//   }
// });

module.exports = router;
