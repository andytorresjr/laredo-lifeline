import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import bcrypt from "bcryptjs";
import path from "path";

const dbPath = path.join(path.dirname(__dirname), "dev.db");
const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` });
const prisma = new PrismaClient({ adapter } as ConstructorParameters<typeof PrismaClient>[0]);

async function main() {
  // Create admin account
  const adminPassword = await bcrypt.hash("admin123", 12);
  const admin = await prisma.user.upsert({
    where: { email: "admin@laredolifeline.com" },
    update: {},
    create: {
      email: "admin@laredolifeline.com",
      name: "Admin User",
      password: adminPassword,
      role: "ADMIN",
    },
  });
  console.log("Created admin:", admin.email);

  // Create a demo hospital client
  const clientPassword = await bcrypt.hash("hospital123", 12);
  const demoClient = await prisma.user.upsert({
    where: { email: "billing@laredo-medical.com" },
    update: {},
    create: {
      email: "billing@laredo-medical.com",
      name: "Maria Rodriguez",
      password: clientPassword,
      role: "CLIENT",
      company: "Laredo Medical Center",
      phone: "(956) 555-0100",
    },
  });
  console.log("Created demo client:", demoClient.email);

  // Create demo invoices for the client
  await prisma.invoice.createMany({
    data: [
      {
        title: "Emergency Transport Services — January 2025",
        amount: 12500.0,
        status: "PAID",
        dueDate: new Date("2025-02-15"),
        pdfPath: "/uploads/invoice-demo-001.pdf",
        notes: "32 emergency transports completed",
        userId: demoClient.id,
      },
      {
        title: "Emergency Transport Services — February 2025",
        amount: 10800.0,
        status: "PAID",
        dueDate: new Date("2025-03-15"),
        pdfPath: "/uploads/invoice-demo-002.pdf",
        notes: "28 emergency transports completed",
        userId: demoClient.id,
      },
      {
        title: "Emergency Transport Services — March 2025",
        amount: 14200.0,
        status: "PENDING",
        dueDate: new Date("2025-04-15"),
        pdfPath: "/uploads/invoice-demo-003.pdf",
        notes: "37 emergency transports completed",
        userId: demoClient.id,
      },
    ],
  });
  console.log("Created demo invoices");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
