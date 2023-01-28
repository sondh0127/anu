import { presetAnu, presetIconExtraProperties } from 'anu-vue'
import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetThemeDefault } from '../packages/preset-theme-default/src/index'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      unit: 'em',
      extraProperties: presetIconExtraProperties,
    }),

    // anu-vue presets
    presetAnu(),
    presetThemeDefault({
      shortcutOverrides: {
        'a-chip': 'rounded-15px inline-flex items-center gap-x-4px px-8px py-2px h-fit whitespace-nowrap text-12px leading-18px font-500',
        'a-chip-disabled': 'opacity-50 pointer-events-none',
      },
    }),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
  configDeps: [
    '../packages/preset-theme-default/src/shortcuts.ts',
    '../packages/preset-theme-default/src/rules.ts',
    '../packages/preset-theme-default/src/variants.ts',
    '../packages/preset-theme-default/src/index.ts',
  ],
  include: [/.*\/anu-vue\.js(.*)?$/, './**/*.vue', './**/*.md'],
})
