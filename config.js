const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU41SHJMMlB4YXBQSGdzanprQ0d4K2I0Mk1EN0RQaDZZdEczMmJUbFNtMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVDFETldKby9xUmpKSU9TM3p5WVRnUk1vNFVxUjJya3MyZVRXVThFanl4dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TXVsYVBCNENxWmxPVDlRbWlVaEZKckoxSkRxajY2a2FKZnoySVRISlY0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQzhyUVdpUVkyQkNwelVNY0JHSWtqSXpJRitpbzJQSnhzMXFsQXZ5UWpnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZJYUk2eVFYVXRYSjM4dU4wQzBObEp6VUhuUVVhOE4xSlhIaWtxSmRqV2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijc3bXdrZmR2Z3hXM1NDdjgyaHFjcEx6d3F1V1RaSVZRaFdWRHlRUWV1RjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOERlemJUeTAzWWlYRTNwcnp2NTBtaU45K0hMQTNQdFA4NE9GdldTZTZsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2dTS0dqbDVVQzBPYkJDZE5NYnlibVRmWDRuOW1GdHRsQnZncFNCajZDVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBqdDFqSVpzcHA5SG5vNWtPWUhWbkwzc0p6NVQ0NlJYS2Z0ckE4dkdjaHpncFFRbTdvN3lGZ2FMSGxHTzhpQUNzb2dIazkvOUxJOVdoT0gvSzhoNmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYwLCJhZHZTZWNyZXRLZXkiOiJUZjFUbVRjZmpreko1ZTNqMXh0ZzBsTWtJbGpUdUZ4Zmg5K1hXN3lLVUVZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHY3YyMThCWFN2YTVTZHdIRWZGQ1lnIiwicGhvbmVJZCI6ImUzYjUyNDJjLTllNjUtNGU4MS05MDMyLWI4NTFmMDE4YWVhMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSjdHc2hOc21VZ2pveTE2N3pBKzZMRzd4UmM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0Jhc0paMWpNdkdtZTYyOTFRSE5GUzQyanF3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRWN1k2NzMyIiwibWUiOnsiaWQiOiIyMzc2MjA3NDY2OTc6NjRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1Avem9ZQUVFTm5OdHJ3R0dCa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InMxOFNQOVk2UU5wZFV2R2dZV1ZNQlMvaDBJL2RmNjZkNWFaMEhQL1FLeW89IiwiYWNjb3VudFNpZ25hdHVyZSI6ImdhYVovRVg0VThRZXI4ZVZibVgvZmhRTDlHWVRwM1RkdWU0czRXQmx6eG5JMWRCN0Z3bkQ5bll0NU55UDMyVGUyOFArT0RGTGw0aTNQL3dFdjZXNkJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJXL3hBZHFvQUI2aXkzOXF6Y0JXWlZUZzd4U0NXS0k2UjhlQVZjNEIwaUNMVGVKbjgvV3lvUDRjd2x6SHBlMDNhenNQMk54K1hZY2xUYUlzNjg1Q2VnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzYyMDc0NjY5Nzo2NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiTmZFai9XT2tEYVhWTHhvR0ZsVEFVdjRkQ1AzWCt1bmVXbWRCei8wQ3NxIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM3MzM2NTUxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUV0RCJ9",
    CAPTION: process.env.CAPTION || "code by yessertech ",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "true", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/3kdkf6.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M YESSER-MD WHATSAPP BOT 👍🤠",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    FAKE_TYPING: process.env.FAKE_TYPING || "true",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    BOT_NAME: process.env.BOT_NAME || "yessertech",
    STATUS_REPLY: process.env.STATUS_REPLY || "`✅ your status seen 👀`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
