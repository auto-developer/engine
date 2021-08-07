import {camelCase} from "change-case";

const renderComponent = (name: string) => {
    const COMPONENT_NAME = name;
    const TYPE_NAME = name + 'TYPE'
    const template = `import React from 'react';
import styles from './styles.module.scss';

export type ${TYPE_NAME} = {
    
}

function ${COMPONENT_NAME}(props: ${TYPE_NAME}) {
    return <div className={styles.${camelCase(COMPONENT_NAME)}}>${COMPONENT_NAME}</div>
}

export default ${COMPONENT_NAME}
`
    return template.toString()
}

export default renderComponent
