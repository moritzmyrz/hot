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
	title: string;
	content: Content;
	date: string;
	slug: string;
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
	marks?: (MarksEntity | null)[] | null;
	value: string;
	nodeType: string;
}
export interface MarksEntity {
	type: string;
}
