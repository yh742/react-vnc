export const Z_NO_FLUSH: 0;
export const Z_PARTIAL_FLUSH: 1;
export const Z_FULL_FLUSH: 3;
export const Z_FINISH: 4;
export const Z_BLOCK: 5;
export const Z_OK: 0;
export const Z_STREAM_END: 1;
export const Z_STREAM_ERROR: -2;
export const Z_DATA_ERROR: -3;
export const Z_BUF_ERROR: -5;
export const Z_DEFAULT_COMPRESSION: -1;
export const Z_FILTERED: 1;
export const Z_HUFFMAN_ONLY: 2;
export const Z_RLE: 3;
export const Z_FIXED: 4;
export const Z_DEFAULT_STRATEGY: 0;
export const Z_UNKNOWN: 2;
export const Z_DEFLATED: 8;
export var deflateInfo: string;
export function deflateInit(strm: any, level: any): any;
export function deflateInit2(strm: any, level: any, method: any, windowBits: any, memLevel: any, strategy: any): any;
export function deflateReset(strm: any): any;
export function deflateResetKeep(strm: any): any;
export function deflateSetHeader(strm: any, head: any): 0 | -2;
export function deflate(strm: any, flush: any): any;
export function deflateEnd(strm: any): any;
export function deflateSetDictionary(strm: any, dictionary: any): 0 | -2;