function argumentFunction () {
    return "Here's a return value";
}

function receivesAFunction (argumentFunction) {
    return "Oh, boy! " + argumentFunction();
}

function returnsANamedFunction () {
    return argumentFunction;
}

function returnsAnAnonymousFunction () {
    return (function () {console.log("Anonymous")});
}