# deno_is_relative

[![tag](https://img.shields.io/github/release/justjavac/deno_is_relative)](https://github.com/justjavac/deno_is_relative/releases)
[![Build Status](https://github.com/justjavac/deno_is_relative/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_is_relative/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_is_relative)](https://github.com/justjavac/deno_is_relative/blob/master/LICENSE)

Whether the filepath is a **relative** file path.

> Base on [jonschlinkert/is-relative](https://github.com/jonschlinkert/is-relative)

## Usage

```ts
import isRelative from "https://deno.land/x/is_relative/mod.ts";

// return true
isRelative("foo.txt")
isRelative("./foo.txt")
isRelative("./bar/foo.txt")
isRelative("./bar/foo/")

// return false
isRelative('/User/dev/foo/bar.txt')
isRelative('e://foo/bar.txt')
isRelative('e:/foo/bar.txt')
isRelative('\\User\\foo\\bar.txt')
```

## License

[deno_is_relative](https://github.com/justjavac/deno_is_relative) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
