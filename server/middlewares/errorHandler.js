const {constants} = require ("../constants");

const errorHandler = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch(statusCode){
        case constants.VALIDATION_ERROR:res.json({
            title: "validation failed",
            message: err.message,
            stackTrace: err.stack,
        });
        break;
        case constants.NOT_FOUND:res.json({
            title: "not found",
            message: err.message,
            stackTrace: err.stack,
        });
        
        case constants.UNAUTHORIZED:res.json({
            title: "unauthorized",
            message: err.message,
            stackTrace: err.stack,
        });

        case constants.FORBIDDEN:res.json({
            title: "FORBIDDEN",
            message: err.message,
            stackTrace: err.stack,
        });

        default:
            console.log("No error,All Good");
            break;
    }
};

module.exports = errorHandler;