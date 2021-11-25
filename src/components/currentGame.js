﻿import React, { createContext } from 'react';

const CurrentGameContext = createContext({
    newGame: '',
    setNewGame: () => {},
    activePlayer: "",
    setActivePlayer: () => {},
    selection: "",
    setSelection: () => {},
    pieces: [],
    setPieces: () => {},
    locations: [],
    setLocations: () => {},
    underAttack: [],
    setUnderAttack: () => {},
    taken: [],
    setTaken: () => {},
    castled: [],
    setCastled: () => {},
    inCheck: [],
    setInCheck: () => {},
    assassinAttempts: [],
    setAssassinAttempts: () => {},
    moving: "",
    setMoving: () => {},
    gameEnd: '',
    setGameEnd: () => {},
    pinned: [],
    setPinned: () => {},
})

export default CurrentGameContext
