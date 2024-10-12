interface Image {
    id: string,
    author: string,
    title: string,
    description?: string,
    data: string,
    tags: string[],
    likes: number,
    views: number
}

export type { Image };