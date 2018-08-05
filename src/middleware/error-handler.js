/* jshint node:true */
'use strict';

exports.catchErrors = (action) => {
  return (req, res, next) => {
    action(req, res).catch(next);
  };
};
