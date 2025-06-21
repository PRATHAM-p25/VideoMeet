//const server = "http://localhost:8000"; // or your deployed backend URL


let IS_PROD = true;
const server = IS_PROD
  ? "https://videomeet-backend.onrender.com"
  : "http://localhost:8000";


export default server;
