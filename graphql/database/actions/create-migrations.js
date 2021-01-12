const fs = require('fs')
const path = require('path')

let tableName

try {
    tableName = process.argv.find((arg) => arg.includes('--tableName='))
        .split('=')[1]
} catch (err) {
    console.log('--tableName parameter not found')
}

const fileName = new Date().getTime() + `_${tableName}.sql`

fs.writeFile(path.resolve(__dirname, `../migrations/${fileName}`), '', (err) => {
    if (err) throw new Error(err)
    else console.log(`Created new migration file in migrations folder`)
})