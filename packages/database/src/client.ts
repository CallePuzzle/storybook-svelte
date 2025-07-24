import { PrismaBetterSQLite3 } from "@prisma/adapter-better-sqlite3";
import {
  PrismaClient,
  type PrismaClient as PrismaClientType,
} from "@prisma/client";

export function GetPrismaClient(url: string): PrismaClientType {
  const adapter = new PrismaBetterSQLite3({
    url: url,
  });
  const prisma = new PrismaClient({ adapter });

  return prisma;
}
