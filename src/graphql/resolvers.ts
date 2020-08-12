interface categoriesArgs {
	where: string;
	sort: string[];
	limit: number;
	offset: number;
}

export const resolvers = {
	Query: {
		me: (): any => ({ activeCart: null }),
		categories: (root: any, args: categoriesArgs): any =>
			require('./json_resolvers/categories.json'),
		products: (root: any, args: any) => ({
			results: [
				require('./json_resolvers/product.fun.json'),
				require('./json_resolvers/product.camshaft.json'),
				require('./json_resolvers/product.crankshaft.json'),
				require('./json_resolvers/product.intakemanifold.json'),
				require('./json_resolvers/product.supercharger.json'),
			],
		}),
		product: (
			root: any,
			args: { sku: string; variantKey: string; id: string; key: string }
		): any =>
			require(`./json_resolvers/product.${args.sku.toLowerCase()}.json`),
	},
	Mutation: {
		updateMyCart: (
			root: any,
			args: { id: string; version: number; actions: any }
		): any => {
			console.log(args.actions);

			// eslint-disable-next-line @typescript-eslint/no-var-requires
			const cart = require('./json_resolvers/myCart.json');

			addProductToCart(cart, args.actions);

			return cart;
		},
	},
};

function addProductToCart(cart: { lineItems: any[] }, actions: any[]) {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const part = require(`./json_resolvers/product.${actions[0].addLineItem.sku}.json`);

	console.log(part);

	const cartPart = {
		id: part.id,
		name: part.masterData.current.name,
		productSlug: part.masterData.current.slug,
		quantity: actions[0].addLineItem.quantity,
		price: part.masterData.current.variant.price,
		totalPrice: {
			centAmount: 1,
			currencyCode: 'USD',
			fractionDigits: 0,
			__typename: 'Money',
		},
		variant: part.masterData.current.variant,
		__typename: 'LineItem',
	};

	cart.lineItems.push(cartPart);
}
