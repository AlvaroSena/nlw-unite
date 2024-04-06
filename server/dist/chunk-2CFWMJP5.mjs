// src/utils/generate-slug.ts
function generateSlug(text) {
  const normalizedText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const slug = normalizedText.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
  return slug;
}

export {
  generateSlug
};
