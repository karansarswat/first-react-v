import React from 'react'
import Card from './components/card'

const App = () => {
const tool = [
  {
    "name": "Code Assistant",
    "image": "./images/code-assistant.png",
    "example": "How do I optimize this Python function?",
    "placeholder": "Enter your code or question..."
  },
  {
    "name": "Image Generator",
    "image": "./images/image-generator.png",
    "example": "A futuristic city skyline at sunset",
    "placeholder": "Describe the image you want to create..."
  },
  {
    "name": "Text Summarizer",
    "image": "./images/text-summarizer.png",
    "example": "Summarize this long article about AI ethics.",
    "placeholder": "Paste your text here..."
  },
  {
    "name": "Language Translator",
    "image": "./images/language-translator.png",
    "example": "Translate 'What time is it?' to Japanese.",
    "placeholder": "Type text to translate..."
  },
  {
    "name": "Data Analyst",
    "image": "./images/data-analyst.png",
    "example": "Find the average sales for Q3 from this data.",
    "placeholder": "Upload your data or ask about it..."
  },
  {
    "name": "Chatbot Builder",
    "image": "./images/chatbot-builder.png",
    "example": "Help me create a customer service bot.",
    "placeholder": "What kind of bot do you want to build?"
  },
  {
    "name": "Voice Transcriber",
    "image": "./images/voice-transcriber.png",
    "example": "Transcribe the attached audio meeting.",
    "placeholder": "Upload an audio or video file..."
  },
  {
    "name": "Music Composer",
    "image": "./images/music-composer.png",
    "example": "Compose a happy, upbeat piano melody.",
    "placeholder": "Describe the music you want to hear..."
  },
  {
    "name": "Research Helper",
    "image": "./images/research-helper.png",
    "example": "Find recent studies on renewable energy.",
    "placeholder": "What topic are you researching?"
  },
  {
    "name": "Task Automator",
    "image": "./images/task-automator.png",
    "example": "Automate sending a weekly sales report.",
    "placeholder": "Describe the task you want to automate..."
  }
]
  return (
    <div className='parent'>
    {tool.map(function(elem , index) {
      return (
        <Card key={elem.index} name={elem.name} image={elem.image} example={elem.example} placeholder={elem.placeholder}/>
      )
    })}
    
    </div>
  )
}

export default App
