// import
import React, { useState, useEffect } from 'react';

function WebSocket() {
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
          backgroundColor: '#CCC',
          padding: '5px',
        }}
      >
        <form id="form">
          <label htmlFor="message-input"></label>
          <input type="text" id="message-input"></input>
          <button type="submit" id="send-button">
            Send
          </button>
          <label htmlFor="room-input">Room</label>
          <input type="text" id="room-input"></input>
          <button type="button" id="room-button">
            Join
          </button>
        </form>
      </div>
    </body>
  );
}

export default WebSocket;
