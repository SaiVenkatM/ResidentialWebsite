import React, { Component } from 'react';

class Chatbot extends Component {
    render() {
        return (
            <>
                <div class="main-container">
                    <div class="header">
                        <h2>WE'R HERE TO HELP!</h2>
                        <p>"Chat With US!" to engage in real time conversations with management, to ensure quick and convenient
                            assistance and support.</p>
                    </div>
                    <div class="chat">
                        <div class="chatbot">
                            <div class="conversation">
                                <div class="chatbot-message">
                                    <p class="chatbot-text">Hi! 👋 it's great to see you!</p>
                                </div>
                                <div class="chatbot-message">
                                    <p class="chatbot-text">"I'm here to assist you with any questions or concerns you may have.
                                        📩",</p>
                                </div>
                            </div>
                            <div class="reply">
                                <div class="chatbot-message">
                                    <p class="chatbot-text">Hello need assistance regarding parking</p>
                                </div>
                            </div>
                            <form class="input-form">
                                <message-container>
                                    <input id="input-field" type="text" placeholder="Type your message here" />
                                    <button id="submit-button" type="submit">SEND</button>
                                </message-container>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Chatbot;