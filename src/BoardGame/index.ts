import { wallet } from './wallet'
import { Command } from 'commander'
import readline from 'readline'
const program = new Command()

const dataBase = [[{ name: 'BlueCoin', cost: 2 }]]

// program.command('create <name> <amount>').action((name, amount) => {
// 	console.log(`${name}, ${amount}`)

// 	wallet({ Person: name, Balance: amount })
// })

// program.command('find <name>').action((name, amount) => {
// 	console.log(`${name}`)

// 	wallet({ Person: name, Balance: amount })
// })

// program.parse(process.argv)

// const options = program.opts()
// if (options.debug) console.log(options)
// console.log('pizza details:')
// if (options.small) console.log('- small pizza size')
// if (options.pizzaType) console.log(`- ${options.pizzaType}`)

// process.stdin.resume()
// process
