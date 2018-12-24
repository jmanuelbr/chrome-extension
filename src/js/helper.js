const TODAY = new Date();
export const formattedDate = function(date) {
    let result = "";
    const partials = date.toString().split(' ');
    if (date.getDay() === TODAY.getDay() && date.getMonth() === TODAY.getMonth()) {
        result = "Today " + partials[4];
    } else {
        result = partials[0] + ' ' + partials[2] + ' ' + partials[4];
    }
    return result;
};