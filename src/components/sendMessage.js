import axios from 'axios';

const sendMessage = async (chatId, message, botToken) => {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const params = {
    chat_id: chatId,
    text: message,
  };

  try {
    const response = await axios.post(url, params);
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

export default sendMessage;
