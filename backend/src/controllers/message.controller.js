import { getMessages } from "../dao/message.dao.js";

export async function getMessageController(req, res) {
  const chatId = req.params.chatId;
  const { limit, skip } = req.query;

  const messages = await getMessages(
    chatId,
    limit && (limit <= 20 ? limit : 20),
    skip && (skip >= 0 ? skip : 0),
  );
  return res
    .status(200)
    .json({ message: "message fetch successfully", messages });
}
