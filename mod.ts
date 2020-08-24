import isUncPath from "https://deno.land/x/is_unc_path/mod.ts";

const URELATIVE_PATH_REGEX = /^([a-z]:)?[\\\/]/i;

/**
 * Whether the filepath is a relative file path.
 * @param filepath
 */
export default function isRelative(filepath: string): boolean {
  // Windows UNC paths are always considered to be absolute.
  return !isUncPath(filepath) && !URELATIVE_PATH_REGEX.test(filepath);
}
