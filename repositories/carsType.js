const { PrismaClient } = require("@prisma/client");
const JSONBigInt = require("json-bigint");

const prisma = new PrismaClient();

exports.createCarsType = async (data) => {
    const largestIdCarsType = await prisma.carsType.findFirst({
        orderBy: {
            id: 'desc',  // Mengurutkan ID dari yang terbesar
        },
        select: {
            id: true,  // Hanya ambil field ID
        },
    });
     // Jika tidak ada siswa di database, set ID baru ke 1, jika ada, tambahkan 1
     const newId = largestIdCarsType ? BigInt(largestIdCarsType.id) + BigInt(1) : BigInt(1);

     // Membuat data baru dengan ID yang di-generate
     const data_baru = {
         ...data, // Menggunakan spread operator untuk menyertakan data input
         id: newId.toString(),  // Mengubah ID baru menjadi string untuk penyimpanan
     };
 
     // Buat siswa baru dengan data yang sudah diupdate
     const newCarsType = await prisma.carsType.create({
         data: data_baru,
     });

    // Convert BigInt fields to string for safe serialization (jika ada BigInt)
    const serializedCarsType = JSONBigInt.stringify(newCarsType);
    return JSONBigInt.parse(serializedCarsType);
};