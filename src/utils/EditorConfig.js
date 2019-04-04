import * as MonacoMain from 'monaco-editor/esm/vs/editor/editor.main';
const langs = MonacoMain.languages.getLanguages();
export const EditorConfig =  {
    availableLanguages: () => {
        return langs;
    },
    languageIds: () => {
        return langs.map(language => language.id);
    },
    default_conf: () => {
        return {
                selectOnLineNumbers: true,
                roundedSelection: false,
                readOnly: false,
                cursorStyle: 'line',
                automaticLayout: false,
                lineNumbers: 'on',
                wordWrap: 'wordWrapColumn',
                wordWrapColumn: 150,
        };
    },

    default_code: (language, defCode) => {
        const codeString = defCode || "Your code goes here..."
        const hash = `# ${codeString}\n`;
        const slash = `// ${codeString}\n`;
        const slashStar = `/* ${codeString}*/\n`;
        const lessExc = `<!-- ${codeString}-->\n`;
        const dashdash = `-- ${codeString}\n`
        const exc = `! ${codeString}\n`

        const commentConfig = {
            // hash comments
            coffeescript: hash,
            perl: hash,
            python: hash,
            ruby: hash,
            // slash comments
            java: slash,
            javascript: slash,
            php: slash,
            scala: slash,
            swift: slash,
            // slashStart comments
            c: slashStar,
            cpp: slashStar,
            css: slashStar,
            // lessExc comments
            html: lessExc,
            xml: lessExc,
            // dashdash
            sql: dashdash,
            mysql: dashdash,
            pgsql: dashdash,
            // others
            fortran: exc,
        }
        return commentConfig[language]|| "";
    }
}