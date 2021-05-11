export interface Post {
  metadata: Metadata;
  sys: Sys;
  fields: Fields;
}
export interface Metadata {
  tags?: null[] | null;
}
export interface Sys {
  space: SpaceOrEnvironmentOrContentType;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: SpaceOrEnvironmentOrContentType;
  revision: number;
  contentType: SpaceOrEnvironmentOrContentType;
  locale: string;
}
export interface SpaceOrEnvironmentOrContentType {
  sys: Sys1;
}
export interface Sys1 {
  type: string;
  linkType: string;
  id: string;
}
export interface Fields {
  headerImage: HeaderImage;
  title: string;
  content: Content;
  date: string;
  slug: string;
}
export interface HeaderImage {
  metadata: Metadata;
  sys: Sys2;
  fields: Fields1;
}
export interface Sys2 {
  space: SpaceOrEnvironmentOrContentType;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: SpaceOrEnvironmentOrContentType;
  revision: number;
  locale: string;
}
export interface Fields1 {
  title: string;
  file: File;
}
export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}
export interface Details {
  size: number;
  image: Image;
}
export interface Image {
  width: number;
  height: number;
}
export interface Content {
  data: Data;
  content?: ContentEntity[] | null;
  nodeType: string;
}
export interface Data {}
export interface ContentEntity {
  data: Data;
  content?: ContentEntity1[] | null;
  nodeType: string;
}
export interface ContentEntity1 {
  data: Data;
  marks?: null[] | null;
  value: string;
  nodeType: string;
}
