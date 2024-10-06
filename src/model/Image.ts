interface Image {
    id: number,
    author: string,
    title: string,
    description?: string,
    data: string,
    tags: string[],
    views?: number,
    likes: string[]
}

export type { Image };