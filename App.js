const hemuSelectorBtn = document.querySelector('#hemu-selector');
const gnapuSelectorBtn = document.querySelector('#gnapu-selector');
const chatHeader = document.querySelector('.chat-header');
const chatMessages = document.querySelector('.chat-messages');
const chatInputForm = document.querySelector('.chat-input-form');
const chatInput = document.querySelector('.chat-input');
const clearChatBtn = document.querySelector('.clear-chat-button');

const chatMessageElement = (message) => `
    <div class="message ${message.sender === 'John' ? 'blue-bg' : 'gray-bg'}">
        <div class="message-sender">${message.sender}</div>
        <div class="message-text">${message.text}</div>
        <div class="message-timestamp">${message.timestamp}</div>
    </div>
`;

let messageSender = 'Hemanth';

const updateMessageSender = (name) => {
    messageSender = name;
    chatHeader.innerText = `${messageSender} chatting...`;
    chatInput.placeholder = `Type here, ${messageSender}...`;
    if (name === 'Hemanth') {
        gnapuSelectorBtn.classList.remove('active-person');
        hemuSelectorBtn.classList.add('active-person');
    } else if (name === 'Gnapika') {
        hemuSelectorBtn.classList.remove('active-person');
        gnapuSelectorBtn.classList.add('active-person');
    }
};

const sendMessage = (e) => {
    e.preventDefault();
    const timestamp = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const message = {
        sender: messageSender,
        text: chatInput.value,
        timestamp,
    };
    chatMessages.innerHTML += chatMessageElement(message);
    chatInput.value = '';
};

hemuSelectorBtn.onclick = () => updateMessageSender('Hemanth');
gnapuSelectorBtn.onclick = () => updateMessageSender('Gnapika');

chatInputForm.addEventListener('submit', sendMessage);
