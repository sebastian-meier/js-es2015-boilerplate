import babel from 'rollup-plugin-babel';

export default {
  entry: 'index.js',
  plugins: [
    babel()
  ],
  dest: 'build/bundle.js',
  format:'umd',
  moduleName:'bundle'
};