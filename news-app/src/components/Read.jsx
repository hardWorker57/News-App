import React, { useState } from 'react';

const TextToSpeech = () => {
  const [inputText, setInputText] = useState('');
  
  const handleConvertToAudio = async () => {
    const text = inputText || "Default text if input is empty";
    const bearerToken = "FHPPkUsQCdkAWv5vtTyhrZRH2h0grFYStrcfqAhfzRd7x6Ug2YHiz1jPv6r08w58";
    const url = "http://tts.ulut.kg/api/tts";
    const headers = {
      "Authorization": `Bearer ${bearerToken}`,
      "Content-Type": "application/json",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
      "Accept": "/",
      "Accept-Encoding": "gzip, deflate, br",
      "Connection": "keep-alive",
    };

    const data = {
      "text": text,
      "speaker_id": 1
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        const a = document.createElement('a');
        a.href = audioUrl;
        a.download = 'response.mp3';
        a.click();
        console.log('Audio file successfully saved.');
      } else {
        console.error(`Error in API request: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Text to Speech</h1>
      <textarea id="textInput" placeholder="Enter text" value={inputText} onChange={(e) => setInputText(e.target.value)}></textarea>
      <button id="submitBtn" onClick={handleConvertToAudio}>Convert to Audio</button>
    </div>
  );
};

export default TextToSpeech;