import ora from 'ora'
import inquirer from 'inquirer'
import downLoadGit from 'download-git-repo'

let create = async () => {
    let loading = ora('模板拉取中...')
    let answer = await inquirer.prompt([
      {
        type: 'input',
        name: 'projectName',
        message:'项目名称',
        default:'d2-admin-demo'
      },
      {
        type: 'list',
        name: 'projectType',
        message: '项目模板',
        choices: ['完整版（包含所有插件和示例代码）', '简化版（不包含非必须插件和组件，保留所有系统功能）'],
        default: '完整版'
      }
    ])

    let project = answer.projectName
    let templateName = answer.projectType === '完整版' ? 'd2-projects/d2-admin' : 'd2-projects/d2-admin-start-kit'
    loading.start()

    downLoadGit(templateName, process.cwd() + '/' + project, (err) => {  
      if (err) {
        console.log(err)
        return
      }
      console.log(process.cwd()+'/'+project)
      loading.succeed()
      console.log('')
      console.log('模板拉取成功！')
      console.log('')
      console.log('请使用以下命令启动项目：')
      console.group('')
      console.log(`cd ${project}`)
      console.log('npm install')
      console.log('npm run serve')
    })
}

export default create
