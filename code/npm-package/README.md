# i18n-folder

[![npm version](https://badge.fury.io/js/i18n-folder.svg)](https://www.npmjs.com/package/i18n-folder)

i18n-folder is a package that helps you manage internationalization (i18n) and translation files in your project. It allows you to create, update, and synchronize language files easily.

## Installation

You can install the package via npm:

```bash
npm install i18n-folder
```

After installing the package, you need to configure it by creating a configuration file at the root of your project. The configuration file can have one of the following names:

- "i18n_folder.config.json"
- "i18n_folder.config.js"
- "i18n_folder.config.ts"
- "i18n.config.json"
- "i18n.config.js"
- "i18n.config.ts"

If you use a JSON file, it should be initialized with 
```json
{}
```

If you use a JavaScript (js) or TypeScript (ts) file, it should be initialized as follows:

```javascript
export default {}
```

Here is the basic configuration:

```json
{
  "folderPath": "./i18n",
  "devReferer": "en",
  "synchronizeReferer": "en",
  "translateReferer": "en",
  "deeplApiEndpoint": "",
  "deeplApiKey": ""
}
```

Explanation of each configuration line:
- `folderPath`: Specifies the path to the folder containing all the translation files.
- `devReferer`: Sets the default language for development. For example, if you set it to "en", all development commands will be applied to the "en.json" file in the specified folder.
- `synchronizeReferer`: Sets the default language for the synchronization command. If it is null, all files will synchronize together.
- `translateReferer`: Sets the default language for the translation command.
- `deeplApiEndpoint`: Link to the DeepL API to be used. There are two different links, one for the free version and one for the paid version.
- `deeplApiKey`: User's DeepL API key to connect to the DeepL API.

## Available Commands

### Management Commands:

- To create a new language file in the specified folder (e.g., "fr" to create "fr.json" file):
```bash
npm run i18n create {language}
```

- To delete a language file (e.g., "fr" to delete "fr.json" file):
```bash
npm run i18n delete {language}
```

### Development Commands:

All of these commands use the reference language defined in the configuration file with the `devReferer` value.

- To add a key and value to the reference file:
```bash
npm run i18n add {key} {value}
```

  - You can create subkeys using periods (e.g., `npm run i18n add A.B.C.D Test`).
  - If the value contains multiple words, surround it with double quotes (e.g., `npm run i18n add A.B "Hello World"`).
  - If the key already exists, an error will be returned without making changes.

- To set or modify a key and value in the reference file:
```bash
npm run i18n set {key} {value}
```

  - If the key exists, the value will be modified. If the key doesn't exist, it will be added.

- To retrieve the value of a key:
```bash
npm run i18n get {key}
```

- To delete a key and its value:
```bash
npm run i18n del {key}
```

### Translation Commands:

- To synchronize language files with the reference file, use the following command:
```bash
npm run i18n synchronize
```

  - If `synchronizeReferer` is set, all languages in the folder will be updated to have the same key structure as the reference document, with null values. Keys present in the document to be synchronized but absent in the reference document will be removed.
  - If `synchronizeReferer` is null, all language files will synchronize together without deleting keys.

- To automatically translate a target file based on the language specified in `translateReferer`, use the following command:
```bash
npm run i18n translate {language}
```

  - Make sure to provide the DeepL API URL and API key in the configuration.
  - This command will only translate null values in the target file.
  - The language codes of the target file and `translateReferer` must be supported by the DeepL API.

## Contributors

- Dylan Stienne
- Alexandre Caramel
