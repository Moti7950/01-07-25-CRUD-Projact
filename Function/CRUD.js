import { readFile } from 'node:fs';

export function Craete(key,value)
{
    return { key: value}
}

export function Read(filePath, cb) {
  readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      cb();
      return;
    }
    console.log(data);
    cb();
  });
}

export function Update()
{

}

export function Delete()
{

}