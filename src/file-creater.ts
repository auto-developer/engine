import * as fs from 'fs'
import * as path from 'path'
import component from './template/component'
import storybook from './template/storybook'
import style from './template/style'

export type OptionType = {
    force: boolean,
    dir?: string[]
}

function createComponent(name: string, option: OptionType) {
    const COMPONENT_NAME = name
    const DIR = path.join('src', 'component', ...option.dir || '', COMPONENT_NAME)

    fs.mkdirSync(DIR)
    fs.writeFileSync(path.join(DIR, 'styles.module.scss'), style(COMPONENT_NAME))
    fs.writeFileSync(path.join(DIR, 'index.tsx'), component(COMPONENT_NAME))
    fs.writeFileSync(path.join(DIR, 'index.stories.tsx'), storybook(COMPONENT_NAME))
}

export default createComponent
