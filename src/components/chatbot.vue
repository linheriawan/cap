<template>
    <link rel="stylesheet" href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css">
    <div>
        <df-messenger
            location="us-central1"
            project-id="intense-emblem-408204"
            agent-id="fbaebe01-a4c2-436f-9ab6-4a3910be18ea"
            language-code="en"
            max-query-length="-1">
        <df-messenger-chat-bubble chat-title="Tanya IAS">
        </df-messenger-chat-bubble>
        </df-messenger>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Chatbot',
    mounted() {
      const script = document.createElement('script');
      script.src = "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js";
      script.async = true;
      script.onload = () => {
        console.log('Dialogflow Messenger script loaded.');
      };
      document.head.appendChild(script);
    }
  };
  </script>
  
  <style>
  df-messenger {
        z-index: 999;
        position: fixed;
        --df-messenger-font-color: #000;
        --df-messenger-font-family: Google Sans;
        --df-messenger-chat-background: #E7EFFE;
        --df-messenger-message-user-background: #d3e3fd;
        --df-messenger-message-bot-background: #fff;
        bottom: 16px;
        right: 16px;
    }
  </style>