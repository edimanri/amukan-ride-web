import { makePage } from '@keystatic/astro/api';
import keystaticConfig from '../../../keystatic.config'; // <- Corrección aquí

export const all = makePage(keystaticConfig);
export const prerender = false;