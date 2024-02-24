import { describe, it, expect } from 'vitest';
import { getValueAtPath } from './path.js';
import { extractErrorArray } from './errors.js';

const errorsCases = [
	{
		input: { urls: [{ name: ['error'] }] },
		path: 'urls[0].name',
		expected: ['error']
	},
	{
		input: { urls: [{ nested: { name: ['error'] } }] },
		path: 'urls[0].nested.name',
		expected: ['error']
	},
	{
		input: { urls: [{ name: ['error'] }] },
		path: 'urls[1].name[0]',
		expected: undefined
	},
	{
		input: { urls: [{ name: ['error'] }] },
		path: 'urls[0].name[1]',
		expected: undefined
	},
	{
		input: { urls: [{ names: [['error1'], ['error2']] }] },
		path: 'urls[0].names[1]',
		expected: ['error2']
	},
	{
		input: { urls: [{ name: ['error'] }] },
		path: 'urls[1].name[0]',
		expected: undefined
	},
	{
		input: { a: { b: { c: { d: { e: ['error'] } } } } },
		path: 'a.b.c.d.e',
		expected: ['error']
	},
	{
		input: {
			data: [
				{
					messages: [
						['error1', 'error2'],
						['error3', 'error4']
					]
				}
			]
		},
		path: 'data[0].messages[1]',
		expected: ['error3', 'error4']
	},
	{
		input: {
			data: {
				messages: {
					info: ['info1', 'info2'],
					errors: {
						nested: [
							['error1', 'error2'],
							['error3', 'error4']
						]
					}
				}
			}
		},
		path: 'data.messages.errors.nested[1]',
		expected: ['error3', 'error4']
	},
	{
		input: {
			data: {
				items: [
					{
						messages: {
							errors: [
								['error1', 'error2'],
								['error3', 'error4']
							]
						}
					}
				]
			}
		},
		path: 'data.items[0].messages.errors[1]',
		expected: ['error3', 'error4']
	},
	{
		input: {
			a: {
				b: {
					c: {
						d: {
							e: [
								['error1', 'error2'],
								['error3', 'error4']
							]
						}
					}
				}
			}
		},
		path: 'a.b.c.d.e[1]',
		expected: ['error3', 'error4']
	},
	{
		input: {
			data: [
				{
					messages: {
						errors: {
							nested: [
								['error1', 'error2'],
								['error3', 'error4']
							]
						}
					}
				}
			]
		},
		path: 'data[0].messages.errors.nested[1]',
		expected: ['error3', 'error4']
	}

	// more test cases for nested tainted paths
];

const taintedCases = [
	{
		input: {
			urls: {
				1: true
			}
		},
		path: 'urls[1]',
		expected: true
	},
	{
		input: {
			data: [
				{
					messages: {
						errors: {
							nested: {
								1: true
							}
						}
					}
				}
			]
		},
		path: 'data[0].messages.errors.nested[1]',
		expected: true
	},
	{
		input: {
			data: [
				{
					messages: {
						errors: {
							nested: {
								1: true
							}
						}
					}
				}
			]
		},
		path: 'data[0].messages.errors.nested[2]',
		expected: undefined
	},
	{
		input: {
			name: true
		},
		path: 'name',
		expected: true
	},
	{
		input: {},
		path: 'name',
		expected: undefined
	}
];

describe('getValueAtPath', () => {
	it.each(errorsCases)(
		'Should return the correct value for the given errors path - %#',
		({ input, path, expected }) => {
			expect(getValueAtPath(path, input)).toEqual(expected);
		}
	);
	it.each(taintedCases)(
		'Should return the correct value for the given tainted path - %#',
		({ input, path, expected }) => {
			expect(getValueAtPath(path, input)).toEqual(expected);
		}
	);
});

describe('extractErrorArray', () => {
	it.each(errorsCases)(
		'Should extract the correct error array for the given path - %#',
		({ input, path, expected }) => {
			const realExpected = expected === undefined ? [] : expected;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			expect(extractErrorArray(getValueAtPath(path, input) as any)).toEqual(realExpected);
		}
	);
});
