// "https://www.site.com.br/x" -> "site.com.br"
export const dominio = (url) =>
  url ? new URL(url).hostname.replace(/^www\./, "") : "";
