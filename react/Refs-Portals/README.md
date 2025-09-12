# React Timer Challenge

This project is a modern React application that presents users with a series of timer-based challenges. It demonstrates advanced React concepts such as state and ref management, imperative handle usage, React Portals for modals, and legacy ref forwarding patterns. The codebase is modular, clean, and suitable for learning or extending timer-based logic in React.

## Key Features

- **Multiple Timer Challenges:** Users can select from various difficulty levels, each with a different countdown duration.
- **High-Precision Countdown:** Timers operate with millisecond accuracy using JavaScript's `setInterval`.
- **Result Modal:** Upon timer completion or manual stop, a modal displays the outcome and score, implemented using React Portals (`createPortal`) for proper overlay behavior.
- **Imperative Modal Control:** The modal is controlled programmatically from the parent component using `useRef` and `useImperativeHandle`, showcasing advanced React patterns.
- **Legacy Ref Handling with forwardRef:** Includes an example modal component implemented using React’s `forwardRef` and `useImperativeHandle` hooks. This pattern, commonly used in earlier versions of React, allows parent components to control child components (such as opening a modal) via refs. The codebase demonstrates both the modern and legacy approaches for educational purposes.
- **Reusable Components:** The application is structured with reusable and maintainable components.
- **Modern React Hooks:** Utilizes `useState`, `useRef`, and `useImperativeHandle` for state and DOM management.

## Technologies Used

- **React** (with hooks)
- **Vite** (for fast development and build)
- **JavaScript (ES6+)**

## React Concepts Demonstrated

- **useState:** For managing timer and UI state.
- **useRef:** For referencing DOM elements and storing mutable values.
- **useImperativeHandle:** To expose imperative methods from child components (used for opening the modal).
- **forwardRef:** Demonstrates legacy and advanced ref forwarding, allowing parent components to interact with child components' imperative APIs.
- **createPortal:** For rendering the modal outside the main DOM hierarchy, ensuring proper overlay and accessibility.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory:
   ```sh
   cd react/Refs-Portals
   ```
3. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Application

Start the development server:
```sh
npm run dev
# or
yarn dev
```
Open your browser and go to [http://localhost:5173](http://localhost:5173) (or the URL shown in your terminal).

### Building for Production

To build the app for production:
```sh
npm run build
# or
yarn build
```

## Project Structure

- `src/` — React components and application logic
- `public/` — Static assets
- `index.html` — Main HTML entry point
- `vite.config.js` — Vite configuration

## License

This project is provided for educational and demonstration purposes only.  
Commercial use, redistribution, or modification for production is not permitted without permission.