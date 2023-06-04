const mangoose = require('mangoose')

const messageModel = mangoose.Schema(
    {
        sender: { type: mangoose.Schema.Types.ObjectId, ref: "User" },
        content: { type: String, trim: true },
        chat: { type: mangoose.Scchema.Types.ObjectId, ref: "chat" },

    },
    {
        timestamps: true,
    }
);

const Message = mangoose.model("Message", messageModel);

module.exports = Message;