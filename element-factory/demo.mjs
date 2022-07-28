import compiler from './src/index.mjs'

console.log(
    compiler(`
        <Header>
            <h1>Hello World</h1>
        </Header>
        <Content>
            <p>hahahahah</p>
        </Content>
    `)
)