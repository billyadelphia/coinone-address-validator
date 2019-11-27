module.exports = {
    /**
     * icon address validation
     */
    isValidAddress: function (mainAddress, currency, networkType) {
        return !!(isEoaAddress(mainAddress) || isScoreAddress(mainAddress));
    }
};

function isEoaAddress(address) {
    return /^(hx)[0-9a-f]{40}$/g.test(address) && /\S/g.test(address);
}

/**
 * Check if input value is a SCORE address.
 * @param {any} address - the input value.
 * @return {boolean} returns true if the input value is a SCORE address.
 */
function isScoreAddress(address) {
    return /^(cx)[0-9a-f]{40}$/g.test(address) && /\S/g.test(address);
}

