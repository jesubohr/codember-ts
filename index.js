import { spawn } from "node:child_process";

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.log('Usage: npm start <number>');
  process.exit(1);
}

console.log('Executing Challenge', args[0]);
spawn('node', [`./RETO-${args[0]}`], {
  stdio: "inherit",
  shell: true,
});
