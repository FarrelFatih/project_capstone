const prisma = require("../../../configs/connection");

// ----- # Get all boat # ----- //
const findLayanan = async () => {
  try {
    const layanan = await prisma.layanan.findMany();

    return layanan;
  } catch (err) {
    console.log(err);
  }
};

// ----- # Get Boat By Id # ----- //
const findLayananId = async (id) => {
  try {
    const layanan = await prisma.layanan.findUnique({
      where: {
        id,
      },
    });
    return layanan;
  } catch (err) {
    console.log(err);
  }
};

// ----- # Create Boat # ----- //
const insertLayanan = async (datalayanan) => {
  try {
    const layanan = await prisma.layanan.create({
      data: {
        jenisLayanan: datalayanan.jenisLayanan,
        durasiPenggunaan: datalayanan.durasiPenggunaan,
        harga: datalayanan.harga,
        pelabuhan: datalayanan.pelabuhan,
        satuanKerja: datalayanan.satuanKerja,
        admin_id: datalayanan.admin_id,
      },
    });

    return layanan;
  } catch (err) {
    console.log(err);
  }
};

// ----- # Update Boat # ----- //
const updateLayanan = async (id, datalayanan) => {
  try {
    const layanan = await prisma.layanan.update({
      where: {
        id: id,
      },
      data: {
        jenisLayanan: datalayanan.jenisLayanan,
        durasiPenggunaan: datalayanan.durasiLayanan,
        harga: datalayanan.harga,
        pelabuhan: datalayanan.pelabuhan,
        satuanKerja: datalayanan.satuanKerja,
        admin_id: datalayanan.admin_id,
      },
    });
    return layanan;
  } catch (err) {
    console.log(err);
  }
};

// ----- # Delete Boat # ----- //
const deleteLayanan = async (id) => {
  try {
    const layanan = await prisma.datalayanan.delete({
      where: {
        id,
      },
    });
    return layanan;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  findLayanan,
  findLayananId,
  insertLayanan,
  updateLayanan,
  deleteLayanan,
};
