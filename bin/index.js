#!/usr/bin/env node

import $RefParser from "@apidevtools/json-schema-ref-parser";
import * as fs from "fs";
import * as path from "path";

const args = process.argv;

try {
  const schema = JSON.parse(
    fs.readFileSync(new URL(path.join(process.cwd(), args[2]), import.meta.url))
  );
  $RefParser
    .dereference(schema)
    .then((schema) => {
      console.log(JSON.stringify(schema, "", 2));
    })
    .catch((e) => console.error(e));
} catch (e) {
  console.error(e);
}
