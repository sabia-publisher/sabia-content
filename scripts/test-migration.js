import { spawn } from 'child_process'
import { readdir } from 'fs/promises'
import { resolve } from 'path'

async function testMigration() {
  console.log('🧪 Starting migration validation tests...')
  
  const tests = [
    {
      name: 'Dependencies Check',
      command: 'npm',
      args: ['list', '--depth=0'],
      expected: /nuxt@.*4\./
    },
    {
      name: 'Content Files Check',
      command: 'ls',
      args: ['-la', 'content/'],
      expected: /9786599492900/
    }
  ]
  
  for (const test of tests) {
    console.log(`\n🔍 Running: ${test.name}`)
    try {
      const result = await runCommand(test.command, test.args)
      if (test.expected.test(result)) {
        console.log('✅ PASS')
      } else {
        console.log('❌ FAIL')
        console.log('Output:', result.slice(0, 200))
      }
    } catch (error) {
      console.log('❌ ERROR:', error.message)
    }
  }
}

function runCommand(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { shell: true })
    let output = ''
    
    child.stdout.on('data', data => output += data.toString())
    child.stderr.on('data', data => output += data.toString())
    
    child.on('close', code => {
      if (code === 0) resolve(output)
      else reject(new Error(`Command failed with code ${code}`))
    })
  })
}

testMigration().catch(console.error)