import * as pieces from "./piecesMap";
import _ from "lodash";

export const boardInit = () => {
  const squares = {};
  for (var i = 1; i <= 64; i++) squares[i] = {};
  return squares;
};

export const validMove = (from, to, type, isOccupied, getOccupier) => {
  switch (true) {
    case type === pieces.whitePawn || type === pieces.blackPawn:
      let pawnMoveOptions = generateValidPawnMoves(
        from,
        type,
        isOccupied,
        getOccupier
      );
      let isValidPawnMove = false;
      pawnMoveOptions.forEach(option => {
        if (_.isEqual(option, to)) isValidPawnMove = true;
      });
      return pawnMoveOptions.length ? isValidPawnMove : false;
    case type === pieces.whiteKnight || type === pieces.blackKnight:
      let knightMoveOptions = generateValidKnightMoves(
        from,
        type,
        isOccupied,
        getOccupier
      );
      let isValidKnightMove = false;
      knightMoveOptions.forEach(option => {
        if (_.isEqual(option, to)) isValidKnightMove = true;
      });
      return knightMoveOptions.length ? isValidKnightMove : false;
    case type === pieces.whiteRook || type === pieces.blackRook:
      let rookMoveOptions = generateValidRookMoves(
        from,
        type,
        isOccupied,
        getOccupier
      );
      let isValidRookMove = false;
      rookMoveOptions.forEach(option => {
        if (_.isEqual(option, to)) isValidRookMove = true;
      });
      return rookMoveOptions.length ? isValidRookMove : false;
    case type === pieces.whiteBishop || type === pieces.blackBishop:
      let bishopMoveOptions = generateValidBishopMoves(
        from,
        type,
        isOccupied,
        getOccupier
      );
      let isValidBishopMove = false;
      bishopMoveOptions.forEach(option => {
        if (_.isEqual(option, to)) isValidBishopMove = true;
      });
      return bishopMoveOptions.length ? isValidBishopMove : false;
    case type === pieces.whiteKing || type === pieces.blackKing:
      let kingMoveOptions = generateValidKingMoves(
        from,
        type,
        isOccupied,
        getOccupier
      );
      let isValidKingMove = false;
      kingMoveOptions.forEach(option => {
        if (_.isEqual(option, to)) isValidKingMove = true;
      });
      return kingMoveOptions.length ? isValidKingMove : false;
    default:
      return false;
  }
};

const generateValidPawnMoves = (from, type, isOccupied, getOccupier) => {
  if (type === pieces.whitePawn) {
    let validMoves = [];
    const attackingSquares = [
      { x: from.x - 1, y: from.y - 1 },
      { x: from.x + 1, y: from.y - 1 }
    ];
    attackingSquares.forEach(coord => {
      if (
        isOccupied(coord.x, coord.y) &&
        getOccupier(coord.x, coord.y).player === 2
      ) {
        validMoves = validMoves.concat(coord);
      }
    });
    if (!isOccupied(from.x, from.y - 1)) {
      validMoves = validMoves.concat({ x: from.x, y: from.y - 1 });
      if (!isOccupied(from.x, from.y - 2) && from.y === 7)
        validMoves = validMoves.concat({ x: from.x, y: from.y - 2 });
    }
    return validMoves;
  } else if (type === pieces.blackPawn) {
    let validMoves = [];
    const attackingSquares = [
      { x: from.x - 1, y: from.y + 1 },
      { x: from.x + 1, y: from.y + 1 }
    ];
    attackingSquares.forEach(coord => {
      if (
        isOccupied(coord.x, coord.y) &&
        getOccupier(coord.x, coord.y).player === 1
      ) {
        validMoves = validMoves.concat(coord);
      }
    });
    if (!isOccupied(from.x, from.y + 1)) {
      validMoves = validMoves.concat({ x: from.x, y: from.y + 1 });
      if (!isOccupied(from.x, from.y + 2) && from.y === 2)
        validMoves = validMoves.concat({ x: from.x, y: from.y + 2 });
    }
    return validMoves;
  }
};

const generateValidKnightMoves = (from, type, isOccupied, getOccupier) => {
  let validMoves = [];
  const attackingSquares = [
    { x: from.x + 2, y: from.y + 1 },
    { x: from.x - 2, y: from.y + 1 },
    { x: from.x - 1, y: from.y + 2 },
    { x: from.x + 1, y: from.y + 2 },
    { x: from.x + 1, y: from.y - 2 },
    { x: from.x - 1, y: from.y - 2 },
    { x: from.x - 2, y: from.y - 1 },
    { x: from.x + 2, y: from.y - 1 }
  ];
  const opponent = type === pieces.whiteKnight ? 2 : 1;
  attackingSquares.forEach(square => {
    if (
      (isOccupied(square.x, square.y) &&
        getOccupier(square.x, square.y).player === opponent) ||
      !isOccupied(square.x, square.y)
    )
      validMoves = validMoves.concat(square);
  });
  return validMoves;
};

const generateValidRookMoves = (from, type, isOccupied, getOccupier) => {
  const opponent = type === pieces.whiteRook ? 2 : 1;
  let attackingSquares = [];

  for (let i = from.y + 1; i <= 8; i++) {
    if (isOccupied(from.x, i) && getOccupier(from.x, i).player === opponent) {
      attackingSquares = attackingSquares.concat({ x: from.x, y: i });
      break;
    }
    if (isOccupied(from.x, i) && getOccupier(from.x, i).player !== opponent) {
      break;
    } else {
      attackingSquares = attackingSquares.concat({ x: from.x, y: i });
    }
  }
  for (let i = from.y - 1; i > 0; i--) {
    if (isOccupied(from.x, i) && getOccupier(from.x, i).player === opponent) {
      attackingSquares = attackingSquares.concat({ x: from.x, y: i });
      break;
    }
    if (isOccupied(from.x, i) && getOccupier(from.x, i).player !== opponent) {
      break;
    } else {
      attackingSquares = attackingSquares.concat({ x: from.x, y: i });
    }
  }

  for (let i = from.x + 1; i <= 8; i++) {
    if (isOccupied(i, from.y) && getOccupier(i, from.y).player === opponent) {
      attackingSquares = attackingSquares.concat({ x: i, y: from.y });
      break;
    }
    if (isOccupied(i, from.y) && getOccupier(i, from.y).player !== opponent) {
      break;
    } else {
      attackingSquares = attackingSquares.concat({ x: i, y: from.y });
    }
  }
  for (let i = from.x - 1; i > 0; i--) {
    if (isOccupied(i, from.y) && getOccupier(i, from.y).player === opponent) {
      attackingSquares = attackingSquares.concat({ x: i, y: from.y });
      break;
    }
    if (isOccupied(i, from.y) && getOccupier(i, from.y).player !== opponent) {
      break;
    } else {
      attackingSquares = attackingSquares.concat({ x: i, y: from.y });
    }
  }
  return attackingSquares;
};

const generateValidBishopMoves = (from, type, isOccupied, getOccupier) => {
  let attackingSquares = [];
  const opponent = type === pieces.whiteBishop ? 2 : 1;
  if (type === pieces.whiteBishop || type === pieces.blackBishop) {
    let i, j;
    for (i = from.x + 1, j = from.y - 1; i <= 8 && j > 0; i++, j--) {
      if (isOccupied(i, j) && getOccupier(i, j).player === opponent) {
        attackingSquares = attackingSquares.concat({ x: i, y: j });
        break;
      }
      if (isOccupied(i, j) && getOccupier(i, j).player !== opponent) {
        break;
      } else {
        attackingSquares = attackingSquares.concat({ x: i, y: j });
      }
    }
    for (i = from.x - 1, j = from.y + 1; i > 0 && j <= 8; i--, j++) {
      if (isOccupied(i, j) && getOccupier(i, j).player === opponent) {
        attackingSquares = attackingSquares.concat({ x: i, y: j });
        break;
      }
      if (isOccupied(i, j) && getOccupier(i, j).player !== opponent) {
        break;
      } else {
        attackingSquares = attackingSquares.concat({ x: i, y: j });
      }
    }
    for (i = from.x + 1, j = from.y + 1; i <= 8 && j <= 8; i++, j++) {
      if (isOccupied(i, j) && getOccupier(i, j).player === opponent) {
        attackingSquares = attackingSquares.concat({ x: i, y: j });
        break;
      }
      if (isOccupied(i, j) && getOccupier(i, j).player !== opponent) {
        break;
      } else {
        attackingSquares = attackingSquares.concat({ x: i, y: j });
      }
    }

    for (i = from.x - 1, j = from.y - 1; i > 0 && j > 0; i--, j--) {
      if (isOccupied(i, j) && getOccupier(i, j).player === opponent) {
        attackingSquares = attackingSquares.concat({ x: i, y: j });
        break;
      }
      if (isOccupied(i, j) && getOccupier(i, j).player !== opponent) {
        break;
      } else {
        attackingSquares = attackingSquares.concat({ x: i, y: j });
      }
    }
  }
  return attackingSquares;
};

const generateValidKingMoves = (from, type, isOccupied, getOccupier) => {
  const opponent = type === pieces.whiteKing ? 2 : 1;
  let validMoves = [];
  let attackingSquares = [];
  for (let j = from.y - 1; j <= from.y + 1; j++) {
    for (let i = from.x - 1; i <= from.x + 1; i++) {
      if (i <= 8 && j <= 8 && 0 < i && 0 < j) {
        attackingSquares = attackingSquares.concat({
          x: i,
          y: j
        });
      }
    }
  }
  attackingSquares.forEach(square => {
    if (
      (isOccupied(square.x, square.y) &&
        getOccupier(square.x, square.y).player === opponent) ||
      !isOccupied(square.x, square.y)
    ) {
      validMoves = validMoves.concat(square);
    }
  });
  return validMoves;
};
