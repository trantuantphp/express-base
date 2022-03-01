require("dotenv").config();

// app
export const PORT = process.env.PORT || 19000;

// AES
export const AES_ENCRYPT_KEY = process.env.AES_ENCRYPT_KEY || "aes_key";

// Hash
export const HMAC_SHA_256_KEY = process.env.HMAC_SHA_256_KEY || "hmac_sha_256_key";

// telegram
export const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || null;
export const TELEGRAM_GROUP_CHAT_ID = process.env.TELEGRAM_GROUP_CHAT_ID || null;