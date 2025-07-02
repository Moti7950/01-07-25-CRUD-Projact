import { readFile } from 'node:fs';

export function Craete(key,value)
{
    return { key: value}
}

export function Read(path)
{
    readFile(path,"utf8",(err, data)=> {
    if (err) return err;
    console.log(data);
    return "End.";
});
}

export function Update()
{

}

export function Delete()
{

}