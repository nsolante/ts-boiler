export interface Wallet {
	Person: string
	Balance: number
}

const bank = []
export const wallet = ({ Person, Balance }: Wallet) => {
	bank.push([{ Person, Balance }])
}
