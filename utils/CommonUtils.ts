import CryptoJS from "crypto-js";

export default class CommonUtils {
  private secretKey: string;

  constructor() {
    const key = process.env.SECRET_KEY;
    if (!key) {
      throw new Error("Please provide secret key in environment variables");
    }
    this.secretKey = key;
  }

  public encryptData(data: string): string {
    return CryptoJS.AES.encrypt(data, this.secretKey).toString();
  }

  public decryptData(encData: string): string {
    return CryptoJS.AES.decrypt(encData, this.secretKey).toString(
      CryptoJS.enc.Utf8
    );
  }
}
