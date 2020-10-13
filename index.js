var RandomNumber = function() {

    function padLeadingZeros(num, size) {
        var s = num+"";
        while (s.length < size) s = "0" + s;
        return s;
    }

    return {
        getRandom: function(length = 5) {
            var result           = '';
            var characters       = '0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        },
        getUnique: function(length = 5) {
            if(length < 5) {
                throw new Error('Number length must be >= 5');
            }

            var miliseconds = new Date().getTime().toString();

            if(length < miliseconds.length) {
                miliseconds = miliseconds.substring(miliseconds.length - length);
            } else if(length > miliseconds.length) {
                miliseconds = miliseconds + this.getRandom(length - miliseconds.length);
            }

            return padLeadingZeros(number, length);
        }
    }
}

export default RandomNumber();