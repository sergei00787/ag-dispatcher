export const getPropValueFromProperties = (propName, properties) => {
  if (properties.length === 0) return null;
  let property = properties.find(prop => prop.Name === propName);
return property && property.Value;
}