import { readFileSync } from 'fs';
import { gql, makeExecutableSchema } from 'apollo-server';
import { addMocksToSchema } from '@graphql-tools/mock';
import casual from 'casual';

import { resolvers } from '.';

const schema = readFileSync(__dirname.concat('/schema.graphql'), 'utf8');

const typeDefs = gql`
	${schema}
`;

const mockScalar = {
	BigDecimal: () => 106,
	Country: () => 'US',
	Currency: () => 'USD',
	Date: () => casual.date('YYYY-MM-DD'),
	DateTime: () => casual.date('YYYY-MM-DDTHH:mm:ss.SSSZZ'),
	Json: () => '{}',
	KeyReferenceInput: () => '',
	Locale: () => 'en',
	Long: () => 6,
	SearchFilter: () => 'field:filter_criteria',
	SearchSort: () => 'field',
	Set: () => '',
	Time: () => casual.date('HH:mm:ss.SSSZZ'),
	YearMonth: () => casual.date('YYYY-MM'),
};

const schemaExe = makeExecutableSchema({ resolvers, typeDefs: typeDefs });
export const typeDefsMocked = addMocksToSchema({
	schema: schemaExe,
	mocks: mockScalar,
	preserveResolvers: true,
});
