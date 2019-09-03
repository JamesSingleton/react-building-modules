import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const deps = Object.keys(pkg.dependencies || {});
const peerDeps = Object.keys(pkg.peerDependencies || {});
const defaultExternal = deps.concat(peerDeps);

export default {
  input: 'src/index.js',
  output: {
    file: pkg.main,
    format: 'cjs',
  },
  external: defaultExternal,
  plugins: [
    resolve({
      extensions: ['.mjs', '.js', '.jsx', '.json'],
      dedupe: ['react', 'react-dom'],
    }),
    terser(),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/index.js': [
          'cloneElement',
          'createContext',
          'Component',
          'createElement',
        ],
        'node_modules/react-dom/index.js': ['render', 'hydrate'],
        'node_modules/react-is/index.js': ['isElement', 'isValidElementType', 'ForwardRef'],
      },
    }),
    babel({
      presets: ['amex'],
      exclude: 'node_modules/**',
    }),
  ],
};
