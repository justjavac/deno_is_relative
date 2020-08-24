// base on https://github.com/jonschlinkert/is-relative/blob/4337fb40ccc9f1919f13098da5dd95084382a57c/test.js

import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import isRelative from "./mod.ts";

Deno.test("should return true if the path appears to be relative", function () {
  assertEquals(isRelative("test/fixtures"), true);
  assertEquals(isRelative("test/fixtures/"), true);
  assertEquals(isRelative("test/fixtures/foo.txt"), true);
  assertEquals(isRelative("./test/fixtures/foo.txt"), true);
  assertEquals(isRelative("./test/fixtures/foo.txt"), true);
});

Deno.test("should return false if the path does not appear to be relative", function () {
  assertEquals(isRelative("/test/fixtures"), false);
  assertEquals(isRelative("/test/fixtures/"), false);
  assertEquals(isRelative("/test/fixtures/baz.md"), false);
  assertEquals(isRelative("e://test/fixtures/"), false);
  assertEquals(isRelative("e:/test/fixtures/"), false);
  assertEquals(isRelative("\\test\\fixtures\\"), false);
});
