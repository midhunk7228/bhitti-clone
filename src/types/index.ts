// src/types/index.ts

export interface MagazineDetailPageProps {
  params: { slug: string };
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  author?: string;
  image: string;
}

export interface CardDeckProps {
  image: string;
  alt: string;
  score?: string;
  category: string;
  title: string;
  description: string;
  author: string;
  slug: string;
  subgenre: string | null;
}

export interface MagazineDetailProps {
  slug: string;
}

export interface Section {
  title: string;
  articles: Article[];
}

export interface PdfFlipbookProps {
  file: Blob | null;
}

export interface FlipBookRef {
  pageFlip: () => {
    flipNext: () => void;
    flipPrev: () => void;
  };
}

export interface PdfFlipbookHandle {
  flipNext: () => void;
  flipPrev: () => void;
}

// crititc api fetch response type
type StrapiImage = {
  url: string;
  alternativeText: string | null;
};

type StrapiCategory = {
  createdAt: string;
  description: string;
  documentId: string;
  id: number | null;
  name: string;
  publishedAt: string;
  slug: string;
  updatedAt: string;
};

type StrapiAuthor = {
  createdAt: string;
  documentId: string;
  email: string;
  id: string;
  name: string;
  publishedAt: string;
  updatedAt: string | null;
};

type StrapiArticle = {
  id: number;
  title: string;
  description: string;
  cover: StrapiImage;
  category: StrapiCategory;
  author: StrapiAuthor;
  slug: string;
  subgenre: string | null;
};

export type StrapiResponse = {
  data: StrapiArticle[];
};

export type featureDataType = {
  id: number | null;
  documentId: string;
  title: string;
  description: string;
  link: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  article: articleProps | null;
};

export type articleProps = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  subgenre: string;
  tags: string[] | null;
};

type autherProps = {
  id: number | null;
  documentId: string;
  name: string;
  email: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

interface StrapiImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

type coverImageProps = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type magazineDetailsProps = {
  id: number | null;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  subgenre: string;
  tags: string[];
  content: null;
  cover: coverImageProps | null;
  author: autherProps | null;
  category: StrapiCategory | null;
  blocks: [] | null;
};
