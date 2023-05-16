export interface IMain {
    trailerVideo: ITrailerVideo,
    content: IContent[]
}

export interface ITrailerVideo {
    data: null | {
        attributes: {
            id: number,
            url: string
        }
    }
}

export interface IContent {
    id: number,
    contentImage?: string
    contentText: string
}