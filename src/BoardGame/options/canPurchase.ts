import { Wallet } from '../wallet'

interface Order {
	wallet: Wallet
}

export const canPurchase = ({ wallet }: Order): boolean => {
	return true
}
