// src/common/helpers/sanitize.helper.ts

import * as DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const window = new JSDOM('').window;
const purify = DOMPurify(window as any);

export function sanitizeHtml(html: string): string {
  return purify.sanitize(html);
}
