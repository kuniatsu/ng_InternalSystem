/**
 * Created by kuniatsu on 2017/04/08.
 */
export class Kinmudata{
  constructor(
    private date:string,
    private title:string,
    private value:string
  ){}

  private calendarData:string;

  public hyphen():any{
    var regExp = new RegExp( '/', "g" ) ;
    this.calendarData = this.date.replace( regExp , "-" ) ;
    return this;
  }

  public getDate():string{
    return this.date;
  }
  public getTitle():string{
    return this.title;
  }

}
