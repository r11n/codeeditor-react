import React, { Component } from 'react';
import './App.css';
import Editor from './Editor';
import { EditorConfig } from './utils/EditorConfig';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        code: '// Your code goes here... \n',
        language: 'javascript'
    }
  }

  onChange = (newValue, e) => {
    console.log('onChange', newValue, e);
  }

  editorDidMount = (editor) => {
    console.log('editorDidMount', editor, editor.getValue(), editor.getModel());
    this.editor = editor;
  }

  changeEditorValue = (value) => {
    if (this.editor) {
      this.editor.setValue(value);
    }
  }

  languageChange = (event) => {
    const language = event.target.value;
    // const code = this.changeCode(language);
    this.setState({language: language, code: this.editor.getValue()});
  }
  changeCode(language) {
    const state_language = this.state.language;
    const editorValue = this.editor.getValue();
    // const Prevreg = new RegExp(EditorConfig.default_code(state_language).trim());
    const changeReg = /^[\#\-\/<!*]+[\d\w\s\b]*|[*\/\->!]+$/g;
    console.log(editorValue.match(changeReg));
    let newVal = editorValue.replace(changeReg, '');
    newVal = newVal.replace(/\n\n/,'\n')
    return editorValue.trim() === EditorConfig.default_code(state_language).trim() ? 
      EditorConfig.default_code(language) : EditorConfig.default_code(language, `code language changed from ${state_language} to ${language}`) + newVal;
  }

  render() {
    const { code, language } = this.state;
    const options = EditorConfig.default_conf();
    return (
      <React.Fragment>
      <div>
        <select value={this.state.language} onChange={this.languageChange}>
          { EditorConfig.languageIds().map(language => <option value={language} key={language}>{language}</option>) }
        </select>
        <Editor
          height="99vh"
          language={language}
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
      </div>
      </React.Fragment>
    );
  }
}

export default App;