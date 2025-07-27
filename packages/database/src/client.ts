import { PrismaLibSQL } from "@prisma/adapter-libsql";
import {
  PrismaClient,
  type PrismaClient as PrismaClientType,
} from "@prisma/client";

export function GetPrismaClient(): PrismaClientType {
  const adapter = new PrismaLibSQL({
    url: "http://127.0.0.1:8080",
  });
  const prisma = new PrismaClient({ adapter });

  return prisma;
}
