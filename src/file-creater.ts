import * as fs from 'fs'
import * as path from 'path'
import component, {renderComponent} from './template/component'
import storybook from './template/storybook'
import style from './template/style'

export type OptionType = {
    force: boolean;
    dir?: string[];
    config?: string;
}

export function createComponent(name: string, option: OptionType) {
    let router = []
    if (option.config) {
        const file = fs.readFileSync(option.config)
        const config = JSON.parse(file.toString())
        router = config.router
    }

    const COMPONENT_NAME = name
    const DIR = path.join('src', 'component', ...option.dir || '', COMPONENT_NAME)
    const FORCE = option.force
    console.log(DIR)

    if (!fs.existsSync(DIR)) {
        fs.mkdirSync(DIR)
    } else {
        if (!FORCE) {
            throw Error('Component already exist.')
        }
    }

    const COMP = renderComponent(COMPONENT_NAME)
    const STORYBOOK = storybook(COMPONENT_NAME)
    const STYLE = style(COMPONENT_NAME)

    fs.writeFileSync(path.join(DIR, 'index.tsx'), COMP)
    fs.writeFileSync(path.join(DIR, 'index.stories.tsx'), STORYBOOK)
    fs.writeFileSync(path.join(DIR, 'styles.module.scss'), STYLE, {})
}

export function createStore(name: string, option: OptionType) {

}
