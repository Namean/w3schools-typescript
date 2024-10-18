const fs = require('fs');

const str = `- TS HOME
- TS Introduction
- TS Get Started
- TS Simple Types
- TS Special Types
- TS Arrays
- TS Object Types
- TS Enums
- TS Aliases & Interfaces
- TS Union Types
- TS Functions
- TS Casting
- TS Classes
- TS Basic Generics
- TS Utility Types
- TS Keyof
- TS Null
- TS Definitely Typed
- TS 5 Updates`;

markdownStrings = str.split('-').slice(1, Infinity).map(v => v.split('\n')[0].trim().toLowerCase().split(' ').join('-')).map(v => `${v}.md`)


const json = JSON.stringify(markdownStrings, null, 2);

fs.writeFileSync('sections.json', json)