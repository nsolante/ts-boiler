const world = 'world'

export function hello(world: string): string {
	console.log(`Hello ${world}! `)

	return `Hello ${world}! `
}

hello(world)
