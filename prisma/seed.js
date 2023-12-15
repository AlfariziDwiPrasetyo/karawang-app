const PrismaClient = require("@prisma/client").PrismaClient;
const prisma = new PrismaClient();
const bcrypt = require("../helper/bcrypt");

const main = async () => {
  const pw = await bcrypt("admin123");

  await prisma.user.upsert({
    where: { username: "admin" },
    update: { email: "admin@gmail.com", username: "admin", password: pw },
    create: {
      email: "admin@gmail.com",
      username: "admin",
      password: pw,
    },
  });
};
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
