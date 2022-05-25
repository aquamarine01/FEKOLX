import _ from 'lodash';

export const convertToCamelCase = (str: string): string =>
  _.split(str, '_')
    .map((s, i) => (i === 0 ? _.lowerCase(s) : _.capitalize(_.lowerCase(s))))
    .join('');

export const convertToPascalCase = (str: string): string =>
  _.split(str, '_')
    .map((s) => _.capitalize(_.lowerCase(s)))
    .join('');

export const convertToSnakeCase = (str: string): string =>
  _.split(str, '_')
    .map((s) => s.toLocaleLowerCase())
    .join('_');

const helper = {
  convertToCamelCase,
  convertToPascalCase,
  convertToSnakeCase,
};

export default helper;
