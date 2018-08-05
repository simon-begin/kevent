/* jshint node:true */
'use strict';

exports = module.exports = function (io) {
  io.on('connection', socket => {
    socket.on('SEND_WEBSITE', website => {
      io.emit('REDIRECT', website);
    });
  });
};
