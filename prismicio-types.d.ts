// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *App → Main Navigation*
 */
export interface AppDocumentDataMainNavigationItem {
  /**
   * Link field in *App → Main Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: app.main_navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Item in *App → Socials*
 */
export interface AppDocumentDataSocialsItem {
  /**
   * item field in *App → Socials*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: app.socials[].item
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  item: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

  /**
   * icon field in *App → Socials*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: app.socials[].icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;
}

/**
 * Content for App documents
 */
interface AppDocumentData {
  /**
   * Main Navigation field in *App*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: app.main_navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  main_navigation: prismic.GroupField<
    Simplify<AppDocumentDataMainNavigationItem>
  > /**
   * City field in *App*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: app.city
   * - **Tab**: Footer
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  city: prismic.KeyTextField;

  /**
   * Phone field in *App*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: app.phone
   * - **Tab**: Footer
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  phone: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

  /**
   * Mail field in *App*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: app.mail
   * - **Tab**: Footer
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  mail: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  > /**
   * Socials field in *App*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: app.socials[]
   * - **Tab**: Social
   * - **Documentation**: https://prismic.io/docs/field#group
   */;
  socials: prismic.GroupField<Simplify<AppDocumentDataSocialsItem>>;
}

/**
 * App document from Prismic
 *
 * - **API ID**: `app`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AppDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<AppDocumentData>, "app", Lang>;

type ArticleNewsDocumentDataSlicesSlice = PageHeaderSlice;

/**
 * Content for Article News documents
 */
interface ArticleNewsDocumentData {
  /**
   * Title field in *Article News*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article_news.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Featured Image field in *Article News*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: article_news.featured_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  featured_image: prismic.ImageField<never>;

  /**
   * Preview Text field in *Article News*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article_news.preview_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  preview_text: prismic.RichTextField;

  /**
   * Date field in *Article News*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: article_news.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date: prismic.DateField;

  /**
   * Slice Zone field in *Article News*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: article_news.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ArticleNewsDocumentDataSlicesSlice> /**
   * Meta Title field in *Article News*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: article_news.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Article News*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: article_news.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Article News*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: article_news.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Article News document from Prismic
 *
 * - **API ID**: `article_news`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArticleNewsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ArticleNewsDocumentData>,
    "article_news",
    Lang
  >;

type PageDefaultDocumentDataSlicesSlice = PageHeaderSlice;

/**
 * Content for Page: Default documents
 */
interface PageDefaultDocumentData {
  /**
   * Title field in *Page: Default*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page_default.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Page: Default*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page_default.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDefaultDocumentDataSlicesSlice> /**
   * Meta Title field in *Page: Default*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page_default.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page: Default*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page_default.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page: Default*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page_default.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page: Default document from Prismic
 *
 * - **API ID**: `page_default`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDefaultDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<PageDefaultDocumentData>,
    "page_default",
    Lang
  >;

type PageHomeDocumentDataSlicesSlice =
  | NewsWrapperSlice
  | HeadlineAndBoxesSlice
  | HeadlineTextAndDecorSlice
  | ImageComponentSlice
  | PageHeaderSlice;

/**
 * Content for Page: Home documents
 */
interface PageHomeDocumentData {
  /**
   * Title field in *Page: Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page_home.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Page: Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page_home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageHomeDocumentDataSlicesSlice> /**
   * Meta Title field in *Page: Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page_home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page: Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page_home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page: Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page_home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page: Home document from Prismic
 *
 * - **API ID**: `page_home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageHomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<PageHomeDocumentData>,
    "page_home",
    Lang
  >;

type PageNewsDocumentDataSlicesSlice = PageHeaderSlice;

/**
 * Content for Page: News documents
 */
interface PageNewsDocumentData {
  /**
   * Title field in *Page: News*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page_news.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Slice Zone field in *Page: News*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page_news.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageNewsDocumentDataSlicesSlice> /**
   * Meta Title field in *Page: News*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page_news.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page: News*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page_news.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page: News*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page_news.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page: News document from Prismic
 *
 * - **API ID**: `page_news`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageNewsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<PageNewsDocumentData>,
    "page_news",
    Lang
  >;

export type AllDocumentTypes =
  | AppDocument
  | ArticleNewsDocument
  | PageDefaultDocument
  | PageHomeDocument
  | PageNewsDocument;

/**
 * Item in *HeadlineAndBoxes → Default → Primary → Items*
 */
export interface HeadlineAndBoxesSliceDefaultPrimaryItemsItem {
  /**
   * Title field in *HeadlineAndBoxes → Default → Primary → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: headline_and_boxes.default.primary.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Text field in *HeadlineAndBoxes → Default → Primary → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: headline_and_boxes.default.primary.items[].text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Primary content in *HeadlineAndBoxes → Default → Primary*
 */
export interface HeadlineAndBoxesSliceDefaultPrimary {
  /**
   * Title field in *HeadlineAndBoxes → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: headline_and_boxes.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Items field in *HeadlineAndBoxes → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: headline_and_boxes.default.primary.items[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  items: prismic.GroupField<
    Simplify<HeadlineAndBoxesSliceDefaultPrimaryItemsItem>
  >;
}

/**
 * Default variation for HeadlineAndBoxes Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeadlineAndBoxesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeadlineAndBoxesSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeadlineAndBoxes*
 */
type HeadlineAndBoxesSliceVariation = HeadlineAndBoxesSliceDefault;

/**
 * HeadlineAndBoxes Shared Slice
 *
 * - **API ID**: `headline_and_boxes`
 * - **Description**: HeadlineAndBoxes
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeadlineAndBoxesSlice = prismic.SharedSlice<
  "headline_and_boxes",
  HeadlineAndBoxesSliceVariation
>;

/**
 * Primary content in *HeadlineTextAndDecor → Default → Primary*
 */
export interface HeadlineTextAndDecorSliceDefaultPrimary {
  /**
   * Title field in *HeadlineTextAndDecor → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: headline_text_and_decor.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Text field in *HeadlineTextAndDecor → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: headline_text_and_decor.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for HeadlineTextAndDecor Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeadlineTextAndDecorSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeadlineTextAndDecorSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeadlineTextAndDecor*
 */
type HeadlineTextAndDecorSliceVariation = HeadlineTextAndDecorSliceDefault;

/**
 * HeadlineTextAndDecor Shared Slice
 *
 * - **API ID**: `headline_text_and_decor`
 * - **Description**: HeadlineTextAndDecor
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeadlineTextAndDecorSlice = prismic.SharedSlice<
  "headline_text_and_decor",
  HeadlineTextAndDecorSliceVariation
>;

/**
 * Primary content in *ImageComponent → Default → Primary*
 */
export interface ImageComponentSliceDefaultPrimary {
  /**
   * Image field in *ImageComponent → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_component.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for ImageComponent Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageComponentSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageComponentSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ImageComponent*
 */
type ImageComponentSliceVariation = ImageComponentSliceDefault;

/**
 * ImageComponent Shared Slice
 *
 * - **API ID**: `image_component`
 * - **Description**: ImageComponent
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageComponentSlice = prismic.SharedSlice<
  "image_component",
  ImageComponentSliceVariation
>;

/**
 * Item in *NewsWrapper → Default → Primary → Items*
 */
export interface NewsWrapperSliceDefaultPrimaryItemsItem {
  /**
   * item field in *NewsWrapper → Default → Primary → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: news_wrapper.default.primary.items[].item
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  item: prismic.ContentRelationshipField<"article_news">;
}

/**
 * Primary content in *NewsWrapper → Default → Primary*
 */
export interface NewsWrapperSliceDefaultPrimary {
  /**
   * Title field in *NewsWrapper → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: news_wrapper.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Items field in *NewsWrapper → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: news_wrapper.default.primary.items[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  items: prismic.GroupField<Simplify<NewsWrapperSliceDefaultPrimaryItemsItem>>;
}

/**
 * Default variation for NewsWrapper Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsWrapperSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NewsWrapperSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *NewsWrapper*
 */
type NewsWrapperSliceVariation = NewsWrapperSliceDefault;

/**
 * NewsWrapper Shared Slice
 *
 * - **API ID**: `news_wrapper`
 * - **Description**: NewsWrapper
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsWrapperSlice = prismic.SharedSlice<
  "news_wrapper",
  NewsWrapperSliceVariation
>;

/**
 * Primary content in *PageHeader → Default → Primary*
 */
export interface PageHeaderSliceDefaultPrimary {
  /**
   * Title field in *PageHeader → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page_header.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Text field in *PageHeader → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page_header.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Link field in *PageHeader → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: page_header.default.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Default variation for PageHeader Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PageHeaderSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PageHeaderSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *PageHeader*
 */
type PageHeaderSliceVariation = PageHeaderSliceDefault;

/**
 * PageHeader Shared Slice
 *
 * - **API ID**: `page_header`
 * - **Description**: PageHeader
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PageHeaderSlice = prismic.SharedSlice<
  "page_header",
  PageHeaderSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AppDocument,
      AppDocumentData,
      AppDocumentDataMainNavigationItem,
      AppDocumentDataSocialsItem,
      ArticleNewsDocument,
      ArticleNewsDocumentData,
      ArticleNewsDocumentDataSlicesSlice,
      PageDefaultDocument,
      PageDefaultDocumentData,
      PageDefaultDocumentDataSlicesSlice,
      PageHomeDocument,
      PageHomeDocumentData,
      PageHomeDocumentDataSlicesSlice,
      PageNewsDocument,
      PageNewsDocumentData,
      PageNewsDocumentDataSlicesSlice,
      AllDocumentTypes,
      HeadlineAndBoxesSlice,
      HeadlineAndBoxesSliceDefaultPrimaryItemsItem,
      HeadlineAndBoxesSliceDefaultPrimary,
      HeadlineAndBoxesSliceVariation,
      HeadlineAndBoxesSliceDefault,
      HeadlineTextAndDecorSlice,
      HeadlineTextAndDecorSliceDefaultPrimary,
      HeadlineTextAndDecorSliceVariation,
      HeadlineTextAndDecorSliceDefault,
      ImageComponentSlice,
      ImageComponentSliceDefaultPrimary,
      ImageComponentSliceVariation,
      ImageComponentSliceDefault,
      NewsWrapperSlice,
      NewsWrapperSliceDefaultPrimaryItemsItem,
      NewsWrapperSliceDefaultPrimary,
      NewsWrapperSliceVariation,
      NewsWrapperSliceDefault,
      PageHeaderSlice,
      PageHeaderSliceDefaultPrimary,
      PageHeaderSliceVariation,
      PageHeaderSliceDefault,
    };
  }
}
