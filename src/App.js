import Home from './Pages/Home.js';
import About from './Pages/About';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
// import './App.css';

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
  {
    id: '0',
    message: 'Hello !',

    // This calls the next id
    // i.e. id 1 in this case
    trigger: '1',
  }, {
    id: '1',

    // This message appears in
    // the bot chat bubble
    message: 'Please write your name !',

    trigger: '2'
  }, {
    id: '2',
    // Here we want the user
    // to enter input
    user: true,
    validator: (value) => 
    {
      if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value))
      {
        return true;
      }
      else {
        return 'Please input alphabet characters only.';
      }
    },
    trigger: '3',
  }, {
    id: '3',
    message: "Hi {previousValue}, Write your Email ID ?",
    trigger: '4',
  }, {
    id: '4',
    // Here we want the user
    // to enter input
    user: true,
          validator: (value) => {
             if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
               {
                 return true;
               }
             else
               {
                 return'Please enter a valid email.';
               }
          },
    trigger: '5',
  }, {
    id: '5',
    message: "Okay, how can I help you?",
    trigger: '6',
  }, {
    id: '6',
    // Here we want the user
    // to enter input
    user: true,
    trigger: '7',
  }, {
    id: '7',
    message: "Okay, We will get to you soon !",
    trigger: '8',

  }, {
    id: '8',
    options: [

      // When we need to show a number of
      // options to choose we create alist
      // like this
      { value: 1, label: 'Another Querry', trigger:'5'},
      { value: 2, label: 'exit' , trigger:'9'},

    ],
  }, {
    id: '9',
    message: "Thank You !",
    end: true

  }
];

// Creating our own theme
const theme = {
  background: '#f2f2f2',
  headerBgColor: '#197B22',
  headerFontSize: '20px',
  botBubbleColor: '#0F3789',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#FF5733',
  userFontColor: 'white',
};

// Set some properties of the bot
const config = {
  botAvatar: "img.png",
  floating: true,
};





function App() {
  return (
    <div className="relative font-mono">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <div className="relative font-mono">
        <ThemeProvider theme={theme}>
          <ChatBot

            // This appears as the header

            // text for the chat bot
            headerTitle="ChatBot"
            steps={steps}
            {...config}

          />
        </ThemeProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
