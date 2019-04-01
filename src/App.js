import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './Editor';

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
    const options = {
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      cursorStyle: 'line',
      automaticLayout: false,
      lineNumbers: 'on'
    };
    return (
      <React.Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Monaco Editor
          </p>
        </header>
      </div>
      <Editor
        height="500"
        language="javascript"
        value={code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
      </React.Fragment>
    );
  }
}

export default App;
