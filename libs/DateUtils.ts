export class DateUtils {
    public static dateDiff(date1: Date, date2: Date): number{
        const t2 = date2.getTime();
        const t1 = date1.getTime();

        return (t2-t1) / ( 24*3600*1000 );
    }
}