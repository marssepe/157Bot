import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

global.owner = [
   ['526567044256', 'Hitler', true]
]

global.creadorbot = [
   ['526567044256', 'Hitler', true]
]

global.mods = ['526567044256']
global.prems = ['526567044256']


global.packname = '157Bot'
global.157Bot
global.wm = '157Bot'
global.Marssepe
global.dev = '157Bot'
global.errorm = 'Error: ${error.message}'
global.nombrebot = '157Bot'
global.textbot = `157Bot`
global.vs = '3.0.0'


global.catalogo = fs.readFileSync('./media/catalogo.jpg')


global.repobot = 'https://whatsapp.com/channel/0029Vb3ahtE96H4Lk7DfEU0B'
global.grupo = 'https://chat.whatsapp.com/HvDCvNqXSiW19MFXJmWhoF'
global.comu = 'https://whatsapp.com/channel/0029Vb3ahtE96H4Lk7DfEU0B'
global.channel = 'https://whatsapp.com/channel/0029Vb3ahtE96H4Lk7DfEU0B'
global.insta = 'https://whatsapp.com/channel/0029Vb3ahtE96H4Lk7DfEU0B'


global.estilo = { key: {  fromMe: false, participant: `contacto@Marssepe.dev`, ...(false ? { remoteJid: "contacto@Marssepe.dev" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'MOONFORCE 乂 TEAM', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: 'contacto@Marssepe.dev'}}}


global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        


global.multiplier = 69 
global.maxwarn = '3'


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
