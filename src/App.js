import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './Editor';
import { EditorConfig } from './utils/EditorConfig';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        code: '// type your code... \n',
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
  render() {
    const { code } = this.state;
    const options = EditorConfig.default_conf();
    return (
      <React.Fragment>
      <div>
        <Editor
          height="500"
          language="javascript"
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