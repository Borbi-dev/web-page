export interface IMain {
    TrailerVideo: ITrailerVideo,
    Content: IContent[]
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
    ContentImage?: string
    ContentText: string
}