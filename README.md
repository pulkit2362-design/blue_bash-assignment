# Micro-Frontend Architecture with React and Module Federation

This project demonstrates a Micro-Frontend Architecture using React and Webpack 5's Module Federation Plugin. It consists of three applications:

- **Host App** (main container)
- **Chat App** (remote application)
- **Email App** (remote application)

## Project Structure

```
micro-frontend-app/
│
├── host-app/
│   ├── src/
│   ├── public/
│   ├── webpack.config.js
│
├── chat-app/
│   ├── src/
│   ├── public/
│   ├── webpack.config.js
│
└── email-app/
    ├── src/
    ├── public/
    ├── webpack.config.js
```

## Installation

Clone the repository and navigate to the project directory:

```sh
git clone <repository-url>
cd micro-frontend-app
```

Install dependencies for each app:

```sh
cd host-app && npm install
cd ../chat-app && npm install
cd ../email-app && npm install
```

## Running the Applications

Start each application in separate terminals:

```sh
cd host-app && npm start
cd chat-app && npm start
cd email-app && npm start
```

Each app will run on its respective port:
- Host App: `http://localhost:3000`
- Chat App: `http://localhost:3001`
- Email App: `http://localhost:3002`

## Webpack Configuration

Each app is configured with Webpack 5 and Module Federation Plugin. See the `webpack.config.js` in each app for details.

## Micro-Frontend Integration

- **Host App** consumes remote components from Chat and Email apps.
- **Chat App** and **Email App** expose their components for the Host App.

## Commands

- **Install dependencies:** `npm install`
- **Start development server:** `npm start`
- **Build production assets:** `npm run build`
