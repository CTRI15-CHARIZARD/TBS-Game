import React, { useState, useEffect, FormEvent } from 'react';

function WebSocketCopy() {
  const joinRoomButton = document.getElementById('room-button') as HTMLButtonElement | null;
  const messageInput = document.getElementById('message-input') as HTMLInputElement | null;
  const roomInput = document.getElementById('room-input') as HTMLInputElement | null;
  const form = document.getElementById('form') as HTMLFormElement | null;

  form?.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const message = messageInput?.value;
    const room = roomInput?.value;

    if (message === '') return;
    displayMessage(message);

    if (messageInput) {
      messageInput.value = '';
    }
  });

  joinRoomButton?.addEventListener('click', () => {
    const room = roomInput?.value;
  });

  function displayMessage(message: any) {
    const div = document.createElement('div');
    div.textContent = message;
    const messageContainer = document.getElementById('message-container');
    if (messageContainer) {
      messageContainer.appendChild(div);
    }
  }

  return (
    <body
      style={{
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh',
        width: '90%',
        maxWidth: '1200px',
      }}
    >
      <div
        id="message-container"
        style={{
          border: '1px solid black',
          flexGrow: 1,
          overflowY: 'auto',
        }}
      >
        <form id="form">
          <label htmlFor="message-input">Message</label>
          <input type="text" id="message-input" />
          <button type="submit" id="send-button">
            Send
          </button>
          <br />
          <label htmlFor="room-input">Room</label>
          <input type="text" id="room-input" />
          <button type="button" id="room-button">
            Join
          </button>
        </form>
      </div>
    </body>
  );
}

export default WebSocketCopy;
