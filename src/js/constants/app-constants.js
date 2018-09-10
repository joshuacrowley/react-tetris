export default {
  actions: {
    HARD_DROP: 'HARD_DROP',
    MOVE_DOWN: 'MOVE_DOWN',
    MOVE_LEFT: 'MOVE_LEFT',
    MOVE_RIGHT: 'MOVE_RIGHT',
    FLIP_CLOCKWISE: 'FLIP_CLOCKWISE',
    FLIP_COUNTERCLOCKWISE: 'FLIP_COUNTERCLOCKWISE',
    PAUSE: 'PAUSE',
    RESUME: 'RESUME',
    HOLD: 'HOLD'
  },

  states: {
    PAUSED: 'PAUSED',
    PLAYING: 'PLAYING',
    GAME_RESULT: 'GAME_RESULT'
  },

  playTypes : {
    FREEPLAY : 'FREEPLAY',
    LIMITED_TURNS : 'LIMITED_TURNS' 
  }

  events: {
    LINE_CLEARED: 'LINE_CLEARED',
    PLAYER_LOST: 'PLAYER_LOST'
  },

  // dimensions in "blocks"
  GAME_WIDTH: 10,
  GAME_HEIGHT: 20
};
