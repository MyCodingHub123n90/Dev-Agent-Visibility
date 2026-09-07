#!/usr/bin/env node

const args = process.argv.slice(2);
const command = args[0];

const help = `
╔════════════════════════════════════════════════════════════╗
║              Dev Agent Visibility - Help                   ║
╚════════════════════════════════════════════════════════════╝

Usage: victornewb <command>

Commands:
  help      - Display this help message
  about     - Display information about Dev Agent Visibility
  website   - Display the official website URL

Examples:
  victornewb help
  victornewb about
  victornewb website
`;

const about = `
╔════════════════════════════════════════════════════════════╗
║                   About Dev Agent Visibility               ║
╚════════════════════════════════════════════════════════════╝

Dev Agent Visibility is a tool that helps developers stay 
informed and connected with the latest development insights.

Author: MyCodingHub123n90
License: MIT
Repository: https://github.com/MyCodingHub123n90/Dev-Agent-Visibility
`;

const website = `
╔════════════════════════════════════════════════════════════╗
║                        Website                             ║
╚════════════════════════════════════════════════════════════╝

Visit our website:
https://victornewb.infinityfree.me
`;

function main() {
  if (!command) {
    console.log(help);
    return;
  }

  switch (command.toLowerCase()) {
    case 'help':
      console.log(help);
      break;
    case 'about':
      console.log(about);
      break;
    case 'website':
      console.log(website);
      break;
    default:
      console.log(`❌ Unknown command: "${command}"\n`);
      console.log('Use "victornewb help" for available commands.');
  }
}

main();