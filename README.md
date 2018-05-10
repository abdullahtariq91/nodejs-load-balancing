# Nodejs Load Balancing

A nodejs application with a socket server which emits socket messages periodically, and is listened to by each client instance.

## Requirements

This project will require:
* Node

## Installation

To install this project simply clone or download the repo:

`git clone https://github.com/abdullahtariq91/nodejs-load-balancing.git <dir name>`

`cd <dir name>`

## Setup

Run the following command to start the server (on port 6000) which emits the random socket messages periodically

`node server.js`

In separate terminals, run the following command to start the client which listens and prints the socket messages being received

`node client.js`
