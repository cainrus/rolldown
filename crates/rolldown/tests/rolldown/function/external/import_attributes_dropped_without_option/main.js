import data from 'ext' with { type: 'json' };
import 'ext' with { type: 'json' };
export * from 'ext' with { type: 'json' };
export const lazy = () => import('ext', { with: { type: 'json' } });
export { data };
