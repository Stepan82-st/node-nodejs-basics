import { stat } from 'fs/promises';

export const exists = async (path) => !!await stst(path).catch(() => false);
export const getAbsUrl = (path) => new URL(path, import.meta.url);