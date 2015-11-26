function toOrdinalNumber(num){
        if((num % 10 == 1) && (num % 100 != 11)) {
            result = num + "st";
        } else if ((num % 10 == 2) && (num % 100 != 12)) {
            result = num + "nd";
        } else if ((num % 10 == 3) && (num % 100 != 13)) {
            result = num + "rd";
        } else {
            result = num + "th";
        }

        return result;
    }
