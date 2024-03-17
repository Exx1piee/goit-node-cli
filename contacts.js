import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";


const contactsPath = path.resolve("db", "contacts.json");


const updateContacts = (contacts) => 
fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));


export const listContacts = async () => {
const data = await fs.readFile(contactsPath);
return JSON.parse(data);
};


