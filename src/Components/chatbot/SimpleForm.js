import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Post from './Post';
//import { ThemeProvider } from 'styled-components';

// all available config props
const config = {
  width: "400px",
  height: "500px",
  floating: true,
};

// // all available theme props
// const theme = {
//   background: '#f5f8fb',
//   fontFamily: 'Helvetica Neue',
//   headerBgColor: '#EF6C00',
//   headerFontColor: '#fff',
//   headerFontSize: '15px',
//   botBubbleColor: '#EF6C00',
//   botFontColor: '#fff',
//   userBubbleColor: '#fff',
//   userFontColor: '#4a4a4a',
// };


class SimpleForm extends Component {
  render() {
    return (
      // <ThemeProvider theme={theme}>
        <ChatBot
          steps={[
            {
              id: 'welcome',
              message: 'Hello, welcome to JMBDD pvt. Ltd.',
              trigger: 'q-name',
            },
            {
              id: 'q-name',
              message: 'What is your name?',
              trigger: 'name',
            },
            {
              id: 'name',
              user: true,
              validator: (value) => {
                //eslint-disable-next-line
                if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value)) {
                  return true;
                }
                else {
                  return 'Please input alphabet characters only !';
                }
              },
              trigger: 'q-email'
            },
            {
              id: 'q-email',
              message: 'Hi {previousValue}, what is you email?',
              trigger: 'email',
            },
            {
              id: 'email',
              user: true,
              validator: (value) => {
                //eslint-disable-next-line
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                  return true;
                }
                else {
                  return 'Please enter a valid email.';
                }
              },
              trigger: 'q-phone'
            }, {
              id: 'q-phone',
              message: 'Great, What is your phone number?',
              trigger: 'phone',
            },
            {
              id: 'phone',
              user: true,
              validator: (value) => {
                //eslint-disable-next-line
                if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value)) {
                  return true;
                }
                else {
                  return 'Please enter a valid phone number !';
                }
              },
              trigger: 'option',
            },
            {
              id: 'option',
              message: 'What do you want to send ?',
              options: [
                { value: 'querry', label: 'Querry', trigger: 'q-querry' },
                { value: 'ask-fedback', label: 'Feedback', trigger: 'ask-feedback' },
              ]
            },
            {
              id: 'ask-feedback',
              message: 'Please enter your feedback !',
              trigger: 'feedback',
            },
            {
              id: 'feedback',
              user: true,
              trigger: 'q-submit'
            },
            {
              id: 'q-querry',
              message: 'How can I help you ?',
              trigger: 'querry',
            },
            {
              id: 'querry',
              user: true,
              trigger: 'q-submit'
            },
            {
              id: 'q-submit',
              message: 'Do you wish to submit?',
              options: [
                { value: 'y', label: 'Yes', trigger: 'end-message' },
                { value: 'n', label: 'No', trigger: 'no-submit' },
              ]
            },
            {
              id: 'no-submit',
              message: 'Your information was not submitted.',
              options: [
                { value: 'try', label: 'Try again', trigger: 'option' },
                { value: 'exit', label: 'exit', trigger: 'exitbot' },
              ]
            },
            {
              id: 'exitbot',
              message: 'thankyou',
              end: true,
            },
            {
              id: 'end-message',
              component: <Post />,
              asMessage: true,
              end: true,
            },
          ]}
          {...config}
        />
      // </ThemeProvider >
    );
  }

}

export default SimpleForm;
