console.log("Starting test-dynamic.js");

async function run() {
  console.log("Importing postcss...");
  const postcss = await import('postcss');
  console.log("Postcss imported.");

  console.log("Importing tailwindcss...");
  const tailwindcss = await import('tailwindcss');
  console.log("Tailwindcss imported.");

  console.log("Importing autoprefixer...");
  const autoprefixer = await import('autoprefixer');
  console.log("Autoprefixer imported.");

  console.log("Done importing. Exiting.");
  process.exit(0);
}
run();
