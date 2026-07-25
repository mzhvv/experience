// babel.config.js

export default {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
};

// // babel.config.cjs

// module.exports = {
//   presets: [
//     '@babel/preset-env',
//     ['@babel/preset-react', { runtime: 'automatic' }],
//     '@babel/preset-typescript',
//   ],
// };
