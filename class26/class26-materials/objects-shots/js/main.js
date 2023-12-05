// Function to check is 2 letters are the same case, if they are return 1, either are not letters return -1, if they are both letters but not the same case return 0
function sameCase(a, b) {

    if (!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)) {
        return -1
    } else if ((a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase())) {
            return 1
    } else {
        return 0
    }
}