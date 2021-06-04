﻿export interface Post {
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
	slug: string;
	thumbnail: TargetOrThumbnail;
	description: string;
	content: Content;
	date: string;
	author: string;
}
export interface TargetOrThumbnail {
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
export interface Content {
	data: Data;
	content?: ContentEntity[] | null;
	nodeType: string;
}
export interface Data {}
export interface ContentEntity {
	data: Data1;
	content?: (ContentEntity1 | null)[] | null;
	nodeType: string;
}
export interface Data1 {
	target?: TargetOrThumbnail1 | null;
}
export interface TargetOrThumbnail1 {
	metadata: Metadata;
	sys: Sys2;
	fields: Fields1;
}
export interface ContentEntity1 {
	data: Data2;
	marks?: (MarksEntity | null)[] | null;
	value?: string | null;
	nodeType: string;
	content?: ContentEntity2[] | null;
}
export interface Data2 {
	uri?: string | null;
}
export interface MarksEntity {
	type: string;
}
export interface ContentEntity2 {
	data: Data;
	marks?: MarksEntity1[] | null;
	value: string;
	nodeType: string;
}
export interface MarksEntity1 {
	type: string;
}
