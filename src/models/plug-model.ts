export class PlugModel {

    constructor(
      public id: number,
      public name: string,
      public influencer_id: number,
      public influencer_username: string,
      public business_id: number,
      public business_name: string,
      public campaign_details: string,
      public campaign_slogan: string,
      public campaign_picture: string,
      public plug_date: string,
      public startdate: string,
      public enddate: string,
      public amount: number,
      public platform: string
    ){

    }

}
