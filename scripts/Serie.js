var Serie = /** @class */ (function () {
    function Serie(seriesId, seriesName, channelName, seriesSeasons, seriesDescription, seriesUrl, seriesImage) {
        this.id = seriesId;
        this.name = seriesName;
        this.channel = channelName;
        this.seasons = seriesSeasons;
        this.description = seriesDescription;
        this.url = seriesUrl;
        this.image = seriesImage;
    }
    return Serie;
}());
export { Serie };
