const  mangoose = require('mangoose')

const chatModel = mangoose.Schema(
    {
        chatName: { type: String, trim: true },
        isGroupChat: { type: Boolean, default: false },
        users: [
            {
                type: mangoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        latestMessage: {
            type: mangoose.Schema.Types.ObjectId,
            ref: "Message",
        },
        groupAdmin: {
            type: mangoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

const chat = mangoose.model("chat", chatModel);

module.exports = chat;