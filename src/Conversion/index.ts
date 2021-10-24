import Big from 'big.js'
import { Command } from 'commander'
import * as dotenv from 'dotenv'
import { currencyData } from './conversion'
import moment from 'moment'

dotenv.config()

const program = new Command()

const monthlyProjection = async ({
	dateFrom,
	denomination,
	denominationAmount,
	denominationTo,
}: any) => {
	let months = 0
	do {
		months++
		const d = moment(dateFrom)
		let dateTo = d.add(months, 'M').format('YYYY-MM-DD')
		let currency: any = await currencyData({
			denomination: denominationTo,
			dateFrom,
			dateTo,
		})
		console.log(denomination)
		console.log(denominationAmount.toFixed(4))
		console.log(dateTo)

		const value = currency[`${dateTo}`][`${denomination}`]

		console.log(value)

		const predictedAmount = denominationAmount.times(value)
		//USD to AUD
		console.log(predictedAmount.toFixed(4))
	} while (months !== 12)
}

program
	.version('1.0.0')
	.command('convert')
	.arguments(
		'<denomination> <dateFrom> <dateTo> <denominationTo> <denominationAmount>'
	)
	.action(
		async (
			denomination,
			dateFrom,
			dateTo,
			denominationTo,
			denominationAmount
		) => {
			const currencyLater: any = await currencyData({
				denomination,
				dateFrom,
				dateTo,
			})
			//
			// npx ts-node src/Conversion/index.ts convert AUD 2019-10-01 2020-10-23 USD 100
			//convert AUD to USD
			const currencyConversionTo: any = new Big(denominationAmount).times(
				currencyLater[`${dateFrom}`][`${denominationTo}`]
			)
			console.log(currencyConversionTo.toFixed(5)) //67.07720

			await monthlyProjection({
				dateFrom,
				denomination, //convert back to AUD
				denominationAmount: currencyConversionTo, //67.07720
				denominationTo,
			})

			//convert USD back to AUD
			const currencyLaterYear: any = await currencyData({
				denomination: denominationTo,
				dateFrom,
				dateTo,
			})

			const currencyConversionToYearLater: any = new Big(
				denominationAmount
			).times(currencyLaterYear[`${dateTo}`][`${denomination}`])

			console.log(currencyConversionToYearLater.toFixed(5)) //140.15400
			// roi
			//140.15400 - 100/100 * 100
			currencyConversionToYearLater
				.minus(denominationAmount)
				.div(100)
				.times(100)
			console.log(
				currencyConversionToYearLater
					.minus(denominationAmount)
					.div(100)
					.times(100)
					.toFixed(2)
			)
		}
	)

program.parse(process.argv)

// const currencyNow: any = await currencyData({
// 	denomination,
// 	dateFrom,
// 	dateTo: dateFrom,
// })

// const currency: any = await currencyData({
// 	denomination,
// 	dateFrom,
// 	dateTo,
// })

// const amount = new Big(denominationAmount)
// const value = findKeyValue({ currency: currencyNow, denominationTo })
// const amountConversionNow = amount.times(value)

// console.log(
// 	await monthlyProjection({
// 		denomination,
// 		dateFrom,
// 		denominationTo,
// 		denominationAmount,
// 	})
// )
// converted dollar amount now
// console.log(amountConversionNow.toFixed(5))
//converted dollar amount later
