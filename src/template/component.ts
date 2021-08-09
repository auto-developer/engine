import {camelCase} from "change-case";

export type RouteType = {
    path: string;
    component: string;
}
export type RouterType = RouteType[]

export const renderRouterComponent = (name: string, router: RouterType) => {
    const COMPONENT_NAME = name;
    const TYPE_NAME = name + 'Type'

    const IMPORT = `import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import styles from './styles.module.scss';
${router.map(r => `import ${r.component} from './${r.component}';`).join('\n')}`

    const PROPS_TYPE = `export type ${TYPE_NAME} = {}`
    const FUNCTION_HEAD = `function ${COMPONENT_NAME}(props: ${TYPE_NAME}) {`
    const FUNCTION_BODY = `return <Router>
        <Switch>
${router.map(r => `            <Route path={'${r.path}'} strict={true} exact={true}><${r.component} /></Route>`).join('\n')}
            <Route><Redirect to={'${router[0].path}'}/></Route>
        </Switch>
    </Router>`
    const FUNCTION_FOOT = `}`
    const EXPORT = `export default ${COMPONENT_NAME}`

    const template = `${IMPORT}

${PROPS_TYPE}

${FUNCTION_HEAD}
    ${FUNCTION_BODY}
${FUNCTION_FOOT}

${EXPORT}
`
    return template.toString()
}

export const renderComponent = (name: string) => {
    const COMPONENT_NAME = name;
    const TYPE_NAME = name + 'Type'

    const IMPORT = `import React from 'react';
import styles from './styles.module.scss';`

    const PROPS_TYPE = `export type ${TYPE_NAME} = {}`
    const FUNCTION_HEAD = `function ${COMPONENT_NAME}(props: ${TYPE_NAME}) {`
    const FUNCTION_BODY = `return <div className={styles.${camelCase(COMPONENT_NAME)}}>${COMPONENT_NAME}</div>`
    const FUNCTION_FOOT = `}`
    const EXPORT = `export default ${COMPONENT_NAME}`

    const template = `${IMPORT}

${PROPS_TYPE}

${FUNCTION_HEAD}
    ${FUNCTION_BODY}
${FUNCTION_FOOT}

${EXPORT}
`
    return template.toString()
}

export default renderComponent
