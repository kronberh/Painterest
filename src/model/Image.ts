interface Image {
    author: string,
    title: string,
    description?: string,
    data: string,
    tags: string[],
    likes?: number,
    views?: number,
}

export type { Image }
