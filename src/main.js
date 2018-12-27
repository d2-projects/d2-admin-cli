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
    console.log('文档: https://doc.d2admin.fairyever.com/zh/')
  })

program.version(VERSION,'-v --version').parse(process.argv)
