import fs from 'fs/promises';

//------------read file()- Synchronous Version------



// fs.readFile('./test.txt', 'utf8', (err,data) => {

//     if(err) throw err;
//     console.log(data);
// });

// const data =fs.readFileSync('./test.txt','utf8');
// console.log(data);




//---------------read file() - Promise.then()---------

// fs.readFile('./test.txt', 'utf8')

// .then ((data) => console.log(Data))
// .catch ((err)=> console.log(err));


//---------------read file() - async /await-----------

// const readFile =async () =>
// {
//         try {
//             const data = await fs.readFileSync('./test.txt','utf8');
// console.log(data);
            
//         } catch (error) {
//         console.log(rrrr);
//         }    
//     }

