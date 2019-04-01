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
    }
}