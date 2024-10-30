"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchingError = void 0;
const catchingError = (controller) => {
    return (req, res, next) => {
        controller(req, res, next)
            .catch(error => next(error));
    };
};
exports.catchingError = catchingError;
