const path = require("path");

const buildEslintCommand = (filenames) => [
  `prettier --ignore-path .prettierignore --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(" ")}`,
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ")}`,
];

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
};
