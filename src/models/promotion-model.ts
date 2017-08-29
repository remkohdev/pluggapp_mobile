import {Observable} from 'rxjs/Observable';

export class PromotionModel {

  promotion: any;
  promotionObserver: any;
  
  constructor(public title: string){
    this.title = title;
    this.promotion = Observable.create(observer => {
      this.promotionObserver = observer;
    });
  }

  setTitle(title): void {
    this.title = title;
    this.promotionObserver.next(true);
  }

  promotionUpdates(): Observable<any> {
    return this.promotion;
  }

}
