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
      <h3>This markdown editor & previewer helps you edit readme file for your github repository.</h3>
      <h3><a style={{color: 'yellow'}} href="https://www.markdownguide.org/basic-syntax/">https://www.markdownguide.org/basic-syntax/</a></h3>
      <button onClick={clearButton} style={{fontSize: '16px', padding: '8px'}}>Clear</button>
      <div class="container">
        <div class="page">
          <div class="title">E D I T O R</div>
          <textarea type="text" value={text} onChange={handleChange}></textarea>
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
