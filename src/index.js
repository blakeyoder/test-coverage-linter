const commandLineArgs = require('command-line-args')
const glob = require('glob')

const optionDefinitions = [
  { name: 'source-path', alias: 's', type: String },
  { name: 'test-path', alias: 't', type: String },
  { name: 'delta', alias: 'd', type: Number }
]

const options = commandLineArgs(optionDefinitions, { camelCase: true })

const { sourcePath } = options

const sourceFolders = glob.sync(sourcePath) 
