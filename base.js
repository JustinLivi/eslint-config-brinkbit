module.exports = {
    extends: 'airbnb-base',
    ecmaFeatures: {
        modules: false,
    },
    env: {
        'browser': true,
    },
    rules: {
        indent: [ 2, 4, { SwitchCase: 1 }],
        'space-in-parens': [ 2, 'always', { exceptions: [ '{}', '[]', '()' ] }],
        strict: [ 2, 'global' ],
        'brace-style': [ 2, 'stroustrup' ],
        'array-bracket-spacing': [ 2, 'always', {
            singleValue: false,
            objectsInArrays: false,
            arraysInArrays: false,
        }],
        'comma-dangle': [ 'error', {
            functions: 'never',
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
        }],
    },
};
