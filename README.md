# Meetflow
WebRTC based peer to peer video calling and messaging web app build with MERN stack.

# Libraries used

- **`React`** for frontend
- **`Socket.io`** as signaling server and realtime communication 
- **`simple-peer`** for peer-to-peer WebRTC connections
- **`Express`** as server
- **`MongoDB`** for persistance of data
- **`Material UI`** for creating ui
- **`Redux`** for state management
- **`Typescript`** for type safety, cure for headache you get when props are flowing all over the app with no hint 

# Features

* User authentication and authorization
* Audio and Video Chat
* Messaging with storage of messages in the database
* Sending invitation to friends
* Able to accept or reject an invitation
* Online indicator
* Notify on typing
* Sceen sharing 
* Accept and reject an incoming call
*  **`Group Chats`** Create group chats like in whats'app. Group Admins can add members to group and participants can leave the group.
*  Remove friend, ability to unfriend someone
* **`Meetflow Spaces`** like Twitter spaces. You can host a space and any of your friends can join that space.

**and more....**

## New Features added recently:


The **meetflow spaces** are implemented using MESH topology to establish a peer-to-peer network between every person or client joining the space.
i.e, every person maintains a p2p connection with every other person in the room. 


# Installation

1. Clone project

```
git clone https://github.com/Ak-Srivastav/MeetFlow.git
```

## Manual

cd into root project

```
1. cd server
```

`npm install` to to install server dependencies

`Setup required environment variables: I've attached .env.example for reference` 
 
- MONGO_URI_DEV
- JWT_SECRET
- NODE_ENV

`npm run dev` to start development server with nodemon

*Make sure you have mongoDB installed*

```
1. cd client
```

`npm install` installs client dependencies.

`npm run start` to start the react development server.


## Docker

Running project through docker is recommended. You don't have to do any setup. Just one docker-compose command and project is up and running 😄.

```
docker-compose up --build

```
*Make sure you have docker installed*

