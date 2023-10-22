export class Serie{
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    url: string;
    image: string;
    constructor(seriesId: number, seriesName: string, channelName: string, seriesSeasons: number,
         seriesDescription: string, seriesUrl: string, seriesImage: string){
        this.id = seriesId;
        this.name = seriesName;
        this.channel = channelName;
        this.seasons = seriesSeasons;
        this.description = seriesDescription;
        this.url = seriesUrl;
        this.image = seriesImage
    }
}