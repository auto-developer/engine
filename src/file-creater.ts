import * as fs from 'fs'
import * as path from 'path'
import component from './template/component'
import storybook from './template/storybook'
import style from './template/style'

function createComponent(dir: string, name: string) {
    const DIR = dir
    const COMPONENT_NAME = name
    console.log('-------', dir, name)

    // fs.mkdirSync(path.join('src', 'component', DIR, COMPONENT_NAME))
    // fs.writeFileSync(path.join('src', 'component', DIR, COMPONENT_NAME, 'styles.module.scss'), style(COMPONENT_NAME))
    // fs.writeFileSync(path.join('src', 'component', DIR, COMPONENT_NAME, 'index.tsx'), component(COMPONENT_NAME))
    // fs.writeFileSync(path.join('src', 'component', DIR, COMPONENT_NAME, 'index.stories.tsx'), storybook(COMPONENT_NAME))
}

export default createComponent
