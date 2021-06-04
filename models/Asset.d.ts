export interface Asset {
	nodeType: string;
	content?: null[] | null;
	data: Data;
}
export interface Data {
	target: Target;
}
export interface Target {
	metadata: Metadata;
	sys: Sys;
	fields: Fields;
}
export interface Metadata {
	tags?: null[] | null;
}
export interface Sys {
	space: SpaceOrEnvironment;
	id: string;
	type: string;
	createdAt: string;
	updatedAt: string;
	environment: SpaceOrEnvironment;
	revision: number;
	locale: string;
}
export interface SpaceOrEnvironment {
	sys: Sys1;
}
export interface Sys1 {
	type: string;
	linkType: string;
	id: string;
}
export interface Fields {
	title: string;
	description: string;
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
