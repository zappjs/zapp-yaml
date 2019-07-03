import { IEngine } from '@zappjs/core';
import { safeDump } from 'js-yaml';

export const YamlEngine: IEngine = (spec) => {
  return safeDump(spec);
}
