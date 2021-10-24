import * as https from 'https'
import axios from 'axios'

// USD&date_from=2020-10-01&date_to=2021-10-23

interface CurrencyConvesion {
	denomination: string
	dateFrom: string
	dateTo: string
}
export const currencyData = async ({
	denomination,
	dateFrom,
	dateTo,
}: CurrencyConvesion) => {
	try {
		const response = await axios({
			method: 'get',
			url: `https://freecurrencyapi.net/api/v2/historical?apikey=95f410b0-33f7-11ec-a13c-b3a57a1739bf&base_currency=${denomination}&date_from=${dateFrom}&date_to=${dateTo}`,
		})
		const currencyInfo: any = response.data

		// console.log(Object.keys(currencyInfo.data))

		// console.log(dateFrom)
		// console.log(dateTo)
		return currencyInfo.data
	} catch (error) {
		console.log(error)
	}
}
