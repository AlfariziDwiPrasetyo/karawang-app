const PrismaClient = require("@prisma/client").PrismaClient;
const prisma = new PrismaClient();
const bcrypt = require("../helper/bcrypt");

const main = async () => {
  const pw = await bcrypt("admin123");
  console.log(pw);
  const user = await prisma.user.upsert({
    where: { email: "admin@gmail.com" },
    update: { email: "admin@gmail.com", username: "admin", password: pw },
    create: {
      email: "admin@gmail.com",
      username: "admin",
      password: pw,
    },
  });

  console.log({ user, pw });
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
