import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';

import type { Config } from '@libsql/core/api';

import { TURSO_DATABASE_URL, TURSO_AUTH_TOKEN } from '$env/static/private';

const config: Config = {
	url: TURSO_DATABASE_URL,
	authToken: TURSO_AUTH_TOKEN
};

const adapter = new PrismaLibSQL(config);
const prisma = new PrismaClient({ adapter });

export default prisma;
