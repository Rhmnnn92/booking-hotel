"use server";
import { object } from "zod";
import {prisma} from "./prisma";
import { contactSchema } from "./zod";
export const ContactMessage = async(prevState:unknown,formData:FormData)=>{
const ValidatedFields = contactSchema.safeParse(Object.fromEntries(formData.entries()))
if(!ValidatedFields.success){
  return {
    errors: ValidatedFields.error.flatten().fieldErrors,
  }
}

const{name,email,subject,message}=ValidatedFields.data;
try {
   await prisma.contact.create({
    data:{
        name,
        email,
        subject,
        message,
    }
   });
   return {message:"Thanks for contact us"}
} catch (error) {
    console.log(error);
}

}