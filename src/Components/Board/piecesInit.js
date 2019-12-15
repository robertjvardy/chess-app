import {
  whiteKing,
  whiteQueen,
  whiteRook,
  whiteBishop,
  whiteKnight,
  whitePawn,
  blackPawn,
  blackRook,
  blackBishop,
  blackKnight,
  blackKing,
  blackQueen
} from "../../piecesMap";

export const piecesInit = () => {
  const pieces = [
    {
      id: 1,
      position: 1,
      status: "alive",
      type: blackRook,
      player: 2
    },
    {
      id: 2,
      position: 2,
      status: "alive",
      type: blackKnight,
      player: 2
    },
    {
      id: 3,
      position: 3,
      status: "alive",
      type: blackBishop,
      player: 2
    },
    {
      id: 4,
      position: 4,
      status: "alive",
      type: blackKing,
      player: 2
    },
    {
      id: 5,
      position: 5,
      status: "alive",
      type: blackQueen,
      player: 2
    },
    {
      id: 6,
      position: 6,
      status: "alive",
      type: blackBishop,
      player: 2
    },
    {
      id: 7,
      position: 7,
      status: "alive",
      type: blackKnight,
      player: 2
    },
    {
      id: 8,
      position: 8,
      status: "alive",
      type: blackRook,
      player: 2
    },

    {
      id: 57,
      position: 57,
      status: "alive",
      type: whiteRook,
      player: 1
    },
    {
      id: 58,
      position: 58,
      status: "alive",
      type: whiteKnight,
      player: 1
    },
    {
      id: 59,
      position: 59,
      status: "alive",
      type: whiteBishop,
      player: 1
    },
    {
      id: 60,
      position: 60,
      status: "alive",
      type: whiteKing,
      player: 1
    },
    {
      id: 61,
      position: 61,
      status: "alive",
      type: whiteQueen,
      player: 1
    },
    {
      id: 62,
      position: 62,
      status: "alive",
      type: whiteBishop,
      player: 1
    },
    {
      id: 63,
      position: 63,
      status: "alive",
      type: whiteKnight,
      player: 1
    },
    {
      id: 64,
      position: 64,
      status: "alive",
      type: whiteRook,
      player: 1
    }
  ];
  for (var i = 9; i <= 16; i++)
    pieces.push({
      id: i,
      position: i,
      status: "alive",
      type: blackPawn,
      player: 2
    });
  for (var i = 49; i <= 56; i++)
    pieces.push({
      id: i,
      position: i,
      status: "alive",
      type: whitePawn,
      player: 1
    });
  return pieces;
};
