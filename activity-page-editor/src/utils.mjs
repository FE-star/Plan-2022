let uuid = 0
export const idMap = new Map

function translateProps(props = {}) {
    const res = Object.keys(props).map(key => {
        if (props[key] !== '') {
            return `${key}="${props[key]}"`
        } else {
            return `${key}`
        }
    }).join(' ')
    if (res) return ` ${res}`
    return ''
}

function createElement(name) {
    return `${name}`
}

function _parse(json, ignores, noWrapper, deps = []) {
    let res = ''
    switch (json.type) {
        case 'Element':
            res += `<${createElement(json.name)}${translateProps(json.props)}>
    ${json.children ?
                    json.children.map(v => _parse(v, ignores, noWrapper, deps))
                        .reduce((a, b) => a + b, '') :
                    ''
                }
  </${json.name}>`
            if (/^[A-Z]/.test(json.name) && ignores.indexOf(json.name) < 0) {
                // set id
                if (!json.id) {
                    json.id = ++uuid + ''
                    idMap.set(json.id, json)
                }
                if (!noWrapper) {
                    res = `<Wrapper id=${json.id}>${res}</Wrapper>`
                }
            }
            break;
        case 'Template':
            res += `<template ${json.name ? json.value ? `#${json.name}="${json.value}"` : `#${json.name}` : ''}>
    ${json.children ?
                    json.children.map(v => _parse(v, ignores, noWrapper, deps))
                        .reduce((a, b) => a + b, '') :
                    ''
                }      
  </template>`
            break;
        case 'Tpl':
            res += `<Tpl_${createElement(json.name)}${translateProps(json.props)} />`
            deps.push({
                name: `Tpl_${json.name}`,
                value: _parse(json.children[0], ['Card'])
            })
            break;
    }
    return res
}

export function parse(json, ignores, noWrapper) {
    const deps = []
    const value = _parse(json, ignores, noWrapper, deps)
    deps.unshift({
        name: 'render',
        value
    })
    return deps
}