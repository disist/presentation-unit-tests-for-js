function trimString(input) {
    return input.trim();
}

function trimIfNeeded(input) {
    if (input[0] === ' ' || input[input.length - 1] === ' ') {
        return trimString(input);
    }
    return input;
}