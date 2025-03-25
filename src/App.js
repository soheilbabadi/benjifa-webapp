import logo from './logo.svg';
import './App.css';
import React from 'react';
import VideoCard from './component/video/VideoCard';
function App() {
  const benji='';
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
        {benji}
        <VideoCard title="My video" description="This is my video" videoUrl="https://picsum.photos/200/300" likes={10} publishDate="2021-10-10" />
        </p>
        
      </header>
    </div>
  );
}

export default App;
