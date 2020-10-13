var crc16 = require('node-crc16');

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
        getUnique: function() {
            var dateString = new Date().toISOString();
            var randString = Math.floor(Math.random() * 10000);
        
            var hex = crc16.checkSum(dateString + randString, 'utf-8');

            var number = parseInt(hex, 16);

            return padLeadingZeros(number, 5);
        }
    }
}

export default RandomNumber();