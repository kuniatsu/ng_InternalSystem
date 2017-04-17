"use strict";
/**
 * Created by kuniatsu on 2017/04/08.
 */
var Kinmudata = (function () {
    function Kinmudata(date, title, value) {
        this.date = date;
        this.title = title;
        this.value = value;
    }
    Kinmudata.prototype.hyphen = function () {
        var regExp = new RegExp('/', "g");
        this.calendarData = this.date.replace(regExp, "-");
        return this;
    };
    Kinmudata.prototype.getDate = function () {
        return this.date;
    };
    Kinmudata.prototype.getTitle = function () {
        return this.title;
    };
    return Kinmudata;
}());
exports.Kinmudata = Kinmudata;
