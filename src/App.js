import './App.css';
import React, {useState, useEffect} from 'react';
import ReactMarkdown from "react-markdown";


function App() {

  const [text, setText] = useState(`
  ## Markdown editor & previewer
  ---
  - I have created this tool to edit README.md files for GitHub.
  - Node.js 18.16.1, ReactJS, react-markdown   
  ---

  ### How to use

  - Type the markdown text into the editor
  - Use the markdown syntax
  - Text will reload to the editor text area the next time you will take a visit
  - You can clear the text from the editor area using the clear button at the top
  - This tool is not suitable for smartphones or any other devices with small screens

  ### Links

  ## [markdown github](https://github.com/grbeno/markdown-editor)

  ## [markdown syntax](https://www.markdownguide.org/basic-syntax/)`);
  
  const storedText = localStorage.getItem('text');

  useEffect(() => {
    // Load the text from localStorage
    if (storedText) {
      setText(storedText);
    }
  }, [storedText]);

  const handleChange = (e) => {
    // Save text (type) to the localStorage 
    setText(e.target.value);
    localStorage.setItem('text', e.target.value);
  }

  const clearButton = (e) => {
    if (storedText){
      localStorage.clear('text');
    }
    setText('');
  }

  return (
    <div className="App">
      <h1>Markdown-editor</h1>
      <hr />
      <h3>This markdown editor & previewer helps you edit README.md file for your GitHub repository.</h3>
      <h3><a style={{color: 'yellow'}} href="https://www.markdownguide.org/basic-syntax/" target="_blank" rel="noreferrer">https://www.markdownguide.org/basic-syntax/</a></h3>
      <button id="clear" onClick={clearButton}>clear</button>
      <div className="container">
        <div className="page">
          <div className="title">E D I T O R</div>
          <textarea id="myTextarea" type="text" value={text} onChange={handleChange}></textarea>
        </div>
        <div className="page">
          <div className="title">P R E V I E W E R</div>
            <div id="preview">
              <ReactMarkdown>{text}</ReactMarkdown>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
