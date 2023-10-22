"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
class Serie {
    constructor(seriesId, seriesName, channelName, seriesSeasons, seriesDescription, seriesUrl, seriesImage) {
        this.id = seriesId;
        this.name = seriesName;
        this.channel = channelName;
        this.seasons = seriesSeasons;
        this.description = seriesDescription;
        this.url = seriesUrl;
        this.image = seriesImage;
    }
}
exports.Serie = Serie;
