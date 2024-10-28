export const getNotNullValueMap = (obj?: object) =>
  Object.values(obj ?? {}).filter((v) => Boolean(v))
