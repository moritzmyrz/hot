export interface Header {
  nodeType: string;
  content?: ContentEntity[] | null;
  data: Data;
}
export interface ContentEntity {
  nodeType: string;
  value: string;
  marks?: null[] | null;
  data: Data;
}
export interface Data {}
