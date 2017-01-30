// export allows this to be used outside of this file.
export class Message {
  content: string;
  username: string;
  messageId: string;
  userId: string;
  // To be used on frontend

  constructor(content: string, username: string, messageId: string, userId: string) {
    this.content = content;
    this.username = username;
    this.messageId = messageId;
    this.userId = userId;
  }
}
