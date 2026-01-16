import CryptoJS from "crypto-js";


export default class CommonUtils{

private secretKey :string;
constructor(){
   if (process.env.SECRET_KEY){

     this.secretKey= process.env.SECRET_KEY;

   }

   else{
    throw new Error ("Please provide scret key ")
   }

}
public  encryptData(data: string){
    return CryptoJS.AES.encrypt(data,this.secretKey).toString();
}

public decryptData(encData: string){
    return CryptoJS.AES.decrypt(encData, this.secretKey).toString(CryptoJS.enc.Utf8);
}

}