import program from 'commander'
import { VERSION } from './utils/constants'
import create from './create'

program.command('create')
  .description('create d2-admin template')
  .alias('c')
  .action(() => {
    create()
  })

program.command('doc')
  .description('d2-admin doc')
  .alias('d')
  .action(() => {
    console.log('Document: https://d2-projects.github.io/d2-admin-doc/')
    console.log('中文文档: https://d2-projects.github.io/d2-admin-doc/zh/')
  })

program.version(VERSION,'-v --version').parse(process.argv)
