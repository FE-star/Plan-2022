#!/usr/bin/env node
import * as fs from 'node:fs'
import * as path from 'node:path'
import prompts from 'prompts'
import { program } from "commander"
import renderTemplate from '../utils/renderTemplate.mjs'

function isValidPackageName(projectName) {
    return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(projectName)
}

function toValidPackageName(projectName) {
    return projectName
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/^[._]/, '')
      .replace(/[^a-z0-9-~]+/g, '-')
}

function emptyDir() {
    // TOOD
}

function run(result, targetDir, options) {
    const cwd = process.cwd()
    const root = path.join(cwd, targetDir)
    if (fs.existsSync(root) && options.enforce) {
        emptyDir(root)
    } else {
        fs.mkdirSync(root)
    }

    const pkg = { name: result.projectName, version: '0.0.0', files: [
        "es/",
        "lib/",
        "build",
        "dist"
      ], }
    fs.writeFileSync(path.resolve(root, 'package.json'), JSON.stringify(pkg, null, 2))

    const templateRoot = new URL('../template', import.meta.url).pathname
    const render = function render(templateName) {
        const templateDir = path.resolve(templateRoot, templateName)
        renderTemplate(templateDir, root)
    }

    render('base')
}

function ask(targetDir, options) {
    const defaultProjectName = !targetDir ? 'lowcode-element' : targetDir

    if (options.enforce) {
        const value = String(defaultProjectName).split('/')
        targetDir = value[value.length - 1]
        run({ projectName: defaultProjectName }, targetDir, options)
    } else {
    
        try {
            prompts([
                {
                    name: 'projectName',
                    type: 'text',
                    message: 'Project name:',
                    initial: defaultProjectName,
                    onState: (state) => {
                        const value = String(state.value).split('/')
                        targetDir = value[value.length - 1]
                    }
                }
            ], {
                onCancel: () => {
                throw new Error('Operation cancelled')
                }
            }).then(result => {
                run(result, targetDir, options)
            })
        } catch(cancelled) {
            console.error(cancelled.message)
            process.exit(1)
        }
    }
}

program.version('0.0.1', '-v, --version')
    .argument('[name]', 'lowcode element name')
    .action(function (name) {
        if (isValidPackageName(name)) {
            const options = program.opts();
            try {
                ask(name, options)
            } catch(e) {
                console.log(e)
            }
        }
    })
    .option('-e, --enforce', 'force create and igrnoe prompts')
    .parse()
