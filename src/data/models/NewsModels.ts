import { News } from "../../domain/entities/News";

export type NewsModel = News;

export const toNewsEntity = (model: NewsModel): News => ({
  ...model,
});
