export class DateHandler {
	public static dateHandler(): string {
		var dateObj = new Date();
		var month = dateObj.getUTCMonth() + 1; //months from 1-12
		var day = dateObj.getUTCDate() + 1;
		var year = dateObj.getUTCFullYear();
		var newdate = month + "/" + day + "/" + year;
		var date = newdate.toString();
		return date;
	}
}
