const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const DEFAULT_ROOM = "defaultRoom";
const MAX_PLAYERS = 4;
const rooms = {};

io.on('connection', (socket) => {
  console.log('Шинэ тоглогч холбогдсон:', socket.id);

  if (!rooms[DEFAULT_ROOM]) {
    rooms[DEFAULT_ROOM] = {
      players: [],
      currentTurn: 1,
      positions: [0, 0, 0, 0],
      result: []
    };
  }

  const room = rooms[DEFAULT_ROOM];

  if (room.players.length >= MAX_PLAYERS) {
    socket.emit('roomFull');
    return;
  }

  const playerNumber = room.players.length + 1;
  const player = {
    id: socket.id,
    playerNumber,
    name: `Тоглогч ${playerNumber}`,
    image: `https://i.pravatar.cc/150?img=${10 + playerNumber}`
  };

  room.players.push(player);
  socket.join(DEFAULT_ROOM);

  // Тоглогч нэгдсэн мэдэгдэл
  io.to(DEFAULT_ROOM).emit('playerJoined', {
    players: room.players,
    currentTurn: room.currentTurn,
    positions: room.positions
  });

  // Бүх тоглогч нэгдсэн эсэх
  if (room.players.length === MAX_PLAYERS) {
    io.to(DEFAULT_ROOM).emit('allPlayersJoined');
  }

  // Шагай шидэх
  socket.on('throwShagai', ({ result, move }) => {
    const playerIndex = room.players.findIndex(p => p.playerNumber === room.currentTurn);
    if (playerIndex === -1) return;

    room.positions[playerIndex] += move;
    room.result = result;

    // Дараагийн тоглогчийн ээлж
    room.currentTurn = room.players.length > 0
      ? room.players[(playerIndex + 1) % room.players.length].playerNumber
      : 1;

    io.to(DEFAULT_ROOM).emit('gameUpdate', {
      positions: room.positions,
      result: room.result,
      currentTurn: room.currentTurn,
      isThrowing: true
    });

    setTimeout(() => {
      io.to(DEFAULT_ROOM).emit('throwingComplete', { isThrowing: false });
    }, 900);
  });

  // Disconnect
  socket.on('disconnect', () => {
    console.log('Тоглогч гарсан:', socket.id);
    const index = room.players.findIndex(p => p.id === socket.id);
    if (index !== -1) {
      room.players.splice(index, 1);
      if (room.players.length === 0) {
        delete rooms[DEFAULT_ROOM];
      } else {
        // Ээлжийг зөв тохируулах
        if (room.currentTurn === playerNumber) {
          room.currentTurn = room.players[0].playerNumber;
        }
        io.to(DEFAULT_ROOM).emit('playerLeft', { players: room.players });
      }
    }
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Сервер ${PORT} порт дээр ажиллаж байна`));
