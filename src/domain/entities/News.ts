export class News {
  constructor(
    public readonly id: number,
    public readonly slug: string,
    public readonly url: string,
    public readonly title: string,
    public readonly content: string,
    public readonly image: string,
    public readonly thumbnail: string,
    public readonly status: string,
    public readonly category: string,
    public readonly publishedAt: string,
    public readonly updatedAt: string,
    public readonly userId: number
  ) {}
}
