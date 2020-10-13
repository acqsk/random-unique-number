var crc16 = require('node-crc16');

var randomNumber = function() {

    function padLeadingZeros(num, size) {
        var s = num+"";
        while (s.length < size) s = "0" + s;
        return s;
    }

    return {
        getUnique: function() {
            var dateString = new Date().toISOString();
            var randString = Math.floor(Math.random() * 10000);
        
            var hex = crc16.checkSum(dateString + randString, 'utf-8');

            var number = parseInt(hex, 16);

            return this.padLeadingZeros(number, 5);
        }
    }
}