#!/usr/bin/env nodejs

const inputString = `- Type Assignment
- Explicit Type
- Implicit Type
- Error in Type Assignment
- Unable to Infer`;

function removeDash(input) {
  let output = input.split("-")[1].trim();
  return output;
}

function toMarkdownLink(input, url) {
  input = removeDash(input);
  if (!url) {
    let output = `[${input}]()`;
    return output;
  } else {
    let output = `[${input}](${url})`;
    return output;
  }
}

function markdownLinkBuilder(input) {
  input = removeDash(input);
  let loweredStringSkeletalString = input.toLowerCase().split(" ").join("-");
  let textString = loweredStringSkeletalString;
  let output = `#${textString}`;

  return output;
}

function markdownListItemLinkBuilder(input) {
  let output = `- ${toMarkdownLink(input, markdownLinkBuilder(input))}`;
  return output;
}

function toHeading2(input) {
  input = removeDash(input);
  let output = `## ${input}`;
  return output;
}

function toListItemLink(input) {}

function finalOutput() {
  let x = inputString
    .split("\n")
    .map((v) => markdownListItemLinkBuilder(v) + "\n")
    .reduce((acc, cv) => (acc += cv));

  let y = inputString
    .split("\n")
    .map((v) => toHeading2(v) + "\n")
    .reduce((acc, cv) => (acc += cv));

    console.log(x, y);
}
