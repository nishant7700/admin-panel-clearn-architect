export const SEARCH_TERMS = ["title", "meta_title"];
export const inputFields = {
  title: {
    type: "string",
    required: true,
    title: "Title",
    slug: true,
  },
  content: {
    type: "html",
    required: false,
    title: "Content",
  },
  featured_image: {
    type: "file",
    required: false,
    title: "Featured Image",
  },
  gallery: {
    type: "gallery",
    required: false,
    title: "Gallery",
  },
  meta_title: {
    type: "string",
    required: false,
    title: "Meta Title",
  },
  meta_description: {
    type: "text",
    required: false,
    title: "Meta Description",
  },
  slug: {
    type: "slug",
    required: false,
    targetField: "title",
    title: "Slug",
  },
};
export const initialValues = {
  title: "",
  content: "",
  meta_title: "",
  meta_description: "",
  slug: "",
};

export const view_all_table = [
  { name: "Title", value: "title" },
  { name: "Meta Title", value: "meta_title" },
  { name: "Content", value: "content" },
  { name: "Meta Description", value: "meta_description" },
];
