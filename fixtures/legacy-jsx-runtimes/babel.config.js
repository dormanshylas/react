.exports = {
  presets: [
    [
      '@babel/react',
      {
        runtime: 'automatic',
        development: process.env.BABEL_ENV === 'development',
      },
    ],
  ],s: ['@babel/plugin-transform-modules-commonjs'],
};
