import * as fs from 'node:fs'


const messageContent = new Uint8Array(Buffer.from('Writing into file'));
fs.writeFile('message.txt', messageContent, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});