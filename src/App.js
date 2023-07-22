import './App.css';
import React, {useState, useEffect} from 'react';
import ReactMarkdown from "react-markdown";


function App() {

  const [text, setText] = useState('');

  useEffect(() => {
    // Load the text from localStorage
    const storedText = localStorage.getItem('text');
    if (storedText) {
      setText(storedText);
    }
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
    localStorage.setItem('text', e.target.value);
  }

  const clearButton = (e) => {
    localStorage.clear('text');
    window.location.reload();
  }

  return (
    <div className="App">
      <h1>Markdown-editor</h1>
      <hr />
      <h3>This markdown editor & previewer helps you edit README.md file for your GitHub repository.</h3>
      <h3><a style={{color: 'yellow'}} href="https://www.markdownguide.org/basic-syntax/" target="_blank" rel="noreferrer">https://www.markdownguide.org/basic-syntax/</a></h3>
      <button id="clear" onClick={clearButton}>clear</button>
      <div class="container">
        <div class="page">
          <div class="title">E D I T O R</div>
          <textarea id="myTextarea" type="text" value={text} onChange={handleChange}></textarea>
        </div>
        <div class="page">
          <div class="title">P R E V I E W E R</div>
            <div id="preview">
              <ReactMarkdown>{text}</ReactMarkdown>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
