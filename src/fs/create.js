import{writeFile} from 'fs/promises';
import{ERROR_MSG, FILES_PATH} from './constants.js';
import {exists, getAbsUrl} from './utils.js';

const create = async () => {
  const FILE_NAME = 'fresh.txt';
  const CONTENT = 'I am fresh and young';
  const url = getAbsUrl(`${FILES_PATH}/${FILE_NAME}`);
  
  try{
    await writeFile(url, CONTENT, {flag: 'wx'});// Write your code here 
} catch (err){
    console.log(err);
    throw Error(ERROR_MSG);
}
};

await create();