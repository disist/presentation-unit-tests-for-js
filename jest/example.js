function trimString(input) {
    return input.trim();
}

function trimIfNeeded(input) {
    if (input[0] === ' ' || input[input.length - 1] === ' ') {
        return result.trimString(input);
    }
    return input;
}

const result = {
    trimString,
    trimIfNeeded
}

module.exports = result;