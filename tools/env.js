/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');

const { CONFIG_DIR } = require('./constants');

module.exports = {
  loadConfig,
};

function loadConfig(env) {
  const file = `${env}.env`;
  const text = loadConfigText(file);

  if (!text) return {};

  const config = {};

  text
    .trim()
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.includes('=') && !line.startsWith('#'))
    .map(line => {
      const index = line.indexOf('=');

      const key = line.slice(0, index).trim();
      const value = line.slice(index + 1).trim();

      if (!key) return null;

      config[key.toUpperCase()] = value;
    });

  return config;
}

function loadConfigText(file) {
  let text = loadFileText(file);

  /* supported .env file format
    @extends <file_name>.env

    VAR_1 = value 1
    VAR_2 = value 2
  */

  const regex = /^\s*@extends\s+(.+?)\.env\s*((.|\r|\n)+)/im;
  const match = text.match(regex);

  if (!match) return text;

  const baseFile = `${match[1]}.env`;
  const content = match[2] || '';

  return `${loadConfigText(baseFile)} \n\n ${content}`;
}

function loadFileText(file) {
  file = path.join(configDir(), file);

  let text = '';

  try {
    text = fs.readFileSync(file, 'utf8');
  } catch (error) {
    console.log('WARN: file not found "config/%s"', path.basename(file));
  }

  return text;
}

function configDir() {
  return CONFIG_DIR;
}
