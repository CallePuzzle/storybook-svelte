import db from './db';
// import sender from './sender';
import { getAuth } from './getAuth';
export const auth = getAuth(db);
