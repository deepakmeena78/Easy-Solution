import { Server } from "socket.io";

export const startChatServer = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Listen for chat messages
    socket.on("sendMessage", (data) => {
      console.log(`Message from ${data.username}: ${data.message}`);
      io.emit("receiveMessage", data); // Broadcast message to all users
    });

    // Handle user disconnect
    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });
};
