import { News } from "../../domain/entities/News";

export const toNewsEntity = (model: News): News =>
  Object.assign(
    new News(
      model.id,
      model.slug,
      model.url,
      model.title,
      model.content,
      model.image,
      model.thumbnail,
      model.status,
      model.category,
      model.publishedAt,
      model.updatedAt,
      model.userId
    ),
    {}
  );
