import http from "http";
import fs from 'fs/promises'
import url, { fileURLToPath } from 'url';
import path, { join } from "path";

const PORT = process.env.PORT || 3002;

const __filename =url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const server = http.createServer(async(req, res) => {
    
     try {

      if(req.method === 'GET'){
let filePath;

        if (req.url === "/") {

          filePath = path.join(__dirname, 'public','index.html');
          l
          
        } else if (req.url === "/about") {
          
          filePath = path.join(__dirname, 'public','about.html');
          l 
        } else {
          throw new Error ('Not Fcked enough')
          
        } 
        const data = await fs.readFile(filePath);
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        res.end();

      
      } else {

          throw new Error('Method kandu pudikala');
        }
       } catch(error){
        res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Server ila");
  
       }
  
      });
      
      server.listen(PORT, () => {
        console.log("Server running on port ${PORT}");


      


 
});

// import http from 'http';
//  const PORT = process.env.PORT;

// const server = http.createServer((req, res) => {
//   res.write('Hello, world!');
//   res.end();
// });

// server.listen(PORT, () => {
//   console.log('Server running on port ${PORT}');
// });
