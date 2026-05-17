// Resolves files in /public correctly in dev and after build (Hostinger)
export const pub = (p) => `${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`
