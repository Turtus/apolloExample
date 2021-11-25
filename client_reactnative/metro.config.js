module.exports = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
    },

    resolver: {
        sourceExts: ['cjs', 'jsx', 'js', 'ts', 'tsx']
    },
}
