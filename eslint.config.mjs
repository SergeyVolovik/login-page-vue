import pluginJs from '@eslint/js';
import vueConfigPrettier from '@vue/eslint-config-prettier';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  // JS Rules
  pluginJs.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'error',
      'no-console': 'error',
      'no-undef': 'off'
    }
  },
  // TypeScript Rules
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { args: 'none', ignoreRestSiblings: true } // Flag unused vars and ignore function arguments if not used
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-require-imports': 'off'
    }
  },
  // Vue Rules
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser
      }
    }
  },
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/attribute-hyphenation': 'off',
      'vue/no-v-html': 'off',
      'vue/v-on-event-hyphenation': 'off',

      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: 1,
          multiline: {
            max: 1,
            allowFirstLine: false
          }
        }
      ]
    }
  },
  {
    ignores: ['node_modules', '.nuxt', '.output', 'dist']
  },
  vueConfigPrettier
];
