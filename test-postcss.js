import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

async function run() {
  console.log("Loading postcss...");
  const css = "@tailwind base;";
  
  console.log("Processing with tailwind and autoprefixer...");
  try {
    const result = await postcss([tailwindcss, autoprefixer]).process(css, { from: undefined });
    console.log("Success! CSS generated length:", result.css.length);
  } catch (err) {
    console.error("Error during PostCSS processing:", err);
  }
}

run();
