//const server = "http://localhost:8000"; // or your deployed backend URL

const ATLASDB_URL = "mongodb+srv://vermithor2528:ETNsbqK9jEUFKnOp@cluster0.4tdnbgb.mongodb.net" ; 

let IS_PROD = true;
const server = IS_PROD
  ? "https://videomeet-backend.onrender.com"
  : "http://localhost:8000";


export default server;
