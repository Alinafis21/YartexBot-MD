/* ⚙️ Credits to:
* AzamiJs
* Elrebelde21
* GataNina-Li */

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['212618951915', 'ALI NAFIS🍧', true], ['212618951915', '👑 𝐎𝐰𝐧𝐞𝐫 👑', true], ['212618951915'], ['212618951915'], ['212618951915'], ['212618951915'], ['212618951915'], ['212618951915'], ['212618951915'], ['212618951915'], ['212618951915'], ['212618951915'], ['212618951915'], ['212618951915'], ['212618951915'], ['212618951915']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +212618951915
global.confirmCode = ''

global.suittag = ['212618951915']
global.mods = ['212618951915']
global.prems = ['212618951915']

//Solo desarrolladores aprobados
global.isdev = [ /* ['212618951915'], */ ['5214434703586'], ['5492266466080'], ['5492266613038'], ['573012482597'], ['5215610314499'], ['51935531943'], ['33760536110'], ['5492964650915'], ['50558124470']]

//Aqui encuentras los nombres del bot 
global.packname = ''
global.author = 'YORIBOT-MD'
global.wm = 'YORIBOT - MD'
global.wm2 = 'YORI : Bot'
global.azami = 'ALI_NAFIS'
global.cb = 'ALI_NAFIS'


//Las Versiones Y Entre Otros
global.vs = 'V2'
global.library = 'NAFIS'
global.baileys = '@Alinafis21'
global.lenguaje = 'MOROCCO'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = 'ALI NAFIS'
global.devnum = '+212618951915'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
