const path = require('path');
const fs = require('fs');
const readline = require('readline-sync');
var pluralize = require('pluralize');
var R = require('lodash');

function writeStub(destinationFile, content) {
  // Get path and create recusrive fodlers
  const destinationPath = path.dirname(destinationFile);
  if (!fs.existsSync(destinationPath)) {
    fs.mkdirSync(destinationPath, { recursive: true });
  }
  fs.writeFileSync(destinationFile, content);
}

function appendStub(destinationFile, content, after, before = false) {
  // Get path and create recusrive fodlers
  const destinationPath = path.dirname(destinationFile);
  if (!fs.existsSync(destinationPath)) {
    fs.mkdirSync(destinationPath, { recursive: true });
  }
  const data = fs.readFileSync(destinationFile, 'utf8');
  const re = new RegExp(after, 'g');

  // Find last occurance of after and append content after it

  // If data has the content then return
  if (data.includes(content)) {
    return;
  }
  if (before) {
    const lastIndex = data.lastIndexOf(after);
    const result = data.substring(0, lastIndex) + content + data.substring(lastIndex);
    fs.writeFileSync(destinationFile, result);
  } else {
    const lastIndex = data.lastIndexOf(after);
    const result = data.substring(0, lastIndex) + content + data.substring(lastIndex);

    fs.writeFileSync(destinationFile, result);
  }
}

function makeStubFromTemplate(sourceFile, variables) {
  const content = fs.readFileSync(path.join(__dirname + '/..', 'stubs', sourceFile), 'utf8');
  // Replace all keys of variables with values
  return Object.keys(variables).reduce((acc, key) => acc.replace(new RegExp(`${key}`, 'g'), variables[key]), content);
}

function copyPageFiles(srcPath, dstPath, moduleName, listingPage) {
  destFolder = `modules/${moduleName}/${listingPage}`;
  usModuleName = R.startCase(moduleName).replace(/ /g, '');
  usModuleNameFull = R.startCase(moduleName);
  const blocName = R.camelCase(moduleName).replace(/ /g, '');
  const variables = {
    IndustriesPage: listingPage,
    IndustriesPageBloc: listingPage + 'Bloc',
    industryBloc: blocName + 'Bloc',
    IndustryResponse: usModuleName + 'Response',
    'entities/industry': `entities/${moduleName}`,
    industryBloc: `${blocName}Bloc`,
    '.industry': `.${blocName}`,
    industries: pluralize(blocName),
    'Blocs.industry': `Blocs.${blocName}`,
    AddEditIndustryModal: `AddEdit${usModuleName}Modal`,
    Industries: usModuleNameFull,
    Industry: usModuleName,
  };
  writeStub(path.join(dstPath, destFolder, 'index.ts'), makeStubFromTemplate('modules/industry/IndustriesPage/index.ts', variables));
  writeStub(
    path.join(dstPath, destFolder, `${listingPage}.tsx`),
    makeStubFromTemplate('modules/industry/IndustriesPage/IndustriesPage.tsx', variables),
  );
  writeStub(
    path.join(dstPath, destFolder, `${listingPage}Bloc.ts`),
    makeStubFromTemplate('modules/industry/IndustriesPage/IndustriesPageBloc.ts', variables),
  );
}

function copyResponseFiles(srcPath, dstPath, moduleName) {
  destFolder = `business/entities/${moduleName}`;
  usModuleName = R.startCase(moduleName).replace(/ /g, '');
  const blocName = R.startCase(moduleName).replace(/ /g, '');
  const variables = {
    IndustryResponse: blocName + 'Response',
    industry: moduleName,
  };
  writeStub(path.join(dstPath, destFolder, 'index.ts'), makeStubFromTemplate('business/entities/industry/index.ts', variables));
  writeStub(
    path.join(dstPath, destFolder, `${usModuleName}Response.ts`),
    makeStubFromTemplate('business/entities/industry/IndustryResponse.ts', variables),
  );
  writeStub(
    path.join(dstPath, destFolder, `Compact${usModuleName}Response.ts`),
    makeStubFromTemplate('business/entities/industry/CompactIndustryResponse.ts', variables),
  );
}

function copyModalFiles(srcPath, dstPath, moduleName, listingPage) {
  const pluralName = R.startCase(moduleName).replace(/ /g, '');
  const modalName = `AddEdit${pluralName}Modal`;
  const blocName = R.camelCase(moduleName).replace(/ /g, '');

  destFolder = `modules/${moduleName}/${modalName}`;
  usModuleName = R.startCase(moduleName).replace(/ /g, '');
  const variables = {
    IndustriesPage: listingPage,
    IndustriesPageBloc: listingPage + 'Bloc',
    industryBloc: moduleName + 'Bloc',
    IndustryResponse: usModuleName + 'Response',
    industry: blocName,
    'entities/industry': `entities/${moduleName}`,
    industryBloc: `${blocName}Bloc`,
    industry: blocName,
    industries: pluralize(blocName),
    'Blocs.industry': `Blocs.${blocName}`,
    AddEditIndustryModal: `AddEdit${usModuleName}Modal`,
    Industries: R.startCase(pluralize(moduleName)),
    defineIndustryForm: `define${usModuleName}Form`,
    selectIndustry: `select${usModuleName}`,
  };
  writeStub(path.join(dstPath, destFolder, 'index.ts'), makeStubFromTemplate('modules/industry/AddEditIndustryModal/index.ts', variables));
  writeStub(
    path.join(dstPath, destFolder, `${modalName}.tsx`),
    makeStubFromTemplate('modules/industry/AddEditIndustryModal/AddEditIndustryModal.tsx', variables),
  );
  writeStub(
    path.join(dstPath, destFolder, `${modalName}Bloc.tsx`),
    makeStubFromTemplate('modules/industry/AddEditIndustryModal/AddEditIndustryModalBloc.tsx', variables),
  );
}

function copyApiFiles(srcPath, dstPath, moduleName, listingPage) {
  destFolder = `business/api/${moduleName}_api`;
  usModuleName = R.startCase(moduleName).replace(/ /g, '');
  const variables = {
    industries: pluralize(moduleName),
    IndustryResponse: usModuleName + 'Response',
    industry: moduleName,
    Industry: usModuleName,
    industriesRepo: pluralize(moduleName) + 'Repo',
    Industries: R.upperFirst(pluralize(moduleName)),
  };
  writeStub(path.join(dstPath, destFolder, 'index.ts'), makeStubFromTemplate('business/api/industry_api/index.ts', variables));
  writeStub(path.join(dstPath, destFolder, `${moduleName}_api.ts`), makeStubFromTemplate('business/api/industry_api/industry_api.ts', variables));
}

function copyBlocFiles(srcPath, dstPath, moduleName, listingPage) {
  destFolder = `business/blocs/${moduleName}_bloc`;
  usModuleName = R.startCase(moduleName).replace(/ /g, '');
  const blocName = R.camelCase(moduleName).replace(/ /g, '');

  const variables = {
    IndustriesPage: listingPage,
    IndustriesPageBloc: listingPage + 'Bloc',
    industryBloc: moduleName + 'Bloc',
    IndustryResponse: usModuleName + 'Response',
    industry: moduleName,
    Industry: usModuleName,
    industries: pluralize(blocName),
    industriesRepo: pluralize(blocName) + 'Repo',
    'Blocs.industry': `Blocs.${moduleName}`,
    AddEditIndustryModal: `AddEdit${usModuleName}Modal`,
    Industries: R.upperFirst(pluralize(moduleName)),
    defineIndustryForm: `define${usModuleName}Form`,
  };
  writeStub(path.join(dstPath, destFolder, 'index.ts'), makeStubFromTemplate('business/blocs/industry_bloc/index.ts', variables));
  writeStub(
    path.join(dstPath, destFolder, `${usModuleName}Bloc.ts`),
    makeStubFromTemplate('business/blocs/industry_bloc/IndustryBloc.ts', variables),
  );
}

function copyAPIMessages(srcPath, dstPath, moduleName) {
  destFolder = `business/messages/i18n`;
  usModuleName = R.upperFirst(moduleName);
  const variables = {
    industries: pluralize(moduleName),
    industry: moduleName,
    Industry: usModuleName,
  };

  appendStub(path.join(dstPath, destFolder, `request_messages.ts`), makeStubFromTemplate('partials/messages.ts', variables), '};');
}

function copyBlockChanges(srcPath, dstPath, moduleName) {
  destFolder = `business/blocs`;
  usModuleName = R.startCase(moduleName).replace(/ /g, '');
  camelModuleName = R.camelCase(moduleName).replace(/ /g, '');
  const variables = {
    industries: camelModuleName,
    industry: camelModuleName,
    Industry: usModuleName,
  };

  const importVariables = {
    industry: moduleName,
    Industry: usModuleName,
  };

  appendStub(path.join(dstPath, destFolder, `tokens.ts`), makeStubFromTemplate('partials/tokens.ts', variables), '};');
  appendStub(
    path.join(dstPath, destFolder, `tokens.ts`),
    makeStubFromTemplate('partials/tokens_import.ts', importVariables),
    '\nexport const Blocs',
    true,
  );

  appendStub(path.join(dstPath, destFolder, `bindings.ts`), makeStubFromTemplate('partials/binding.ts', variables), '];');
  appendStub(
    path.join(dstPath, destFolder, `bindings.ts`),
    makeStubFromTemplate('partials/tokens_import.ts', importVariables),
    "\nimport { Blocs } from './tokens';",
    true,
  );
}

let moduleName = readline.question('Enter the name of the backend module [industry]: ');
moduleName = R.lowerCase(R.trim(moduleName)).replace(/ /g, '_');
const ucModuleName = R.startCase(moduleName);
const pluralName = R.startCase(pluralize(moduleName)).replace(/ /g, '');
const listingPage = pluralName + 'Page';
const modalName = `AddEdit${pluralName}Modal`;
console.log('\n');

console.log(`Module will be created modules/${moduleName}`);
console.log(`Page will be created in modules/${moduleName}/${listingPage}`);
console.log(`Model modules/${moduleName}/${modalName}`);

const sourcePath = path.join(__dirname + '/../', 'stubs');
const destinationPath = path.join(__dirname + '/../', 'src');

copyPageFiles(sourcePath, destinationPath, moduleName, listingPage);
copyResponseFiles(sourcePath, destinationPath, moduleName);
copyModalFiles(sourcePath, destinationPath, moduleName, listingPage);
copyApiFiles(sourcePath, destinationPath, moduleName, listingPage);
copyBlocFiles(sourcePath, destinationPath, moduleName, listingPage);
copyAPIMessages(sourcePath, destinationPath, moduleName, listingPage);
copyBlockChanges(sourcePath, destinationPath, moduleName, listingPage);
return;
