export interface ICountry {
    country: string;
    code: string;
}

export class IGeoDetail {
    country: ICountry[];

    constructor( c: ICountry[] ) {

        this.country = c;

    }

    public static geoLocationAddress(obj: any): IGeoDetail {
        return new IGeoDetail(obj.ICountry);
    }

}
