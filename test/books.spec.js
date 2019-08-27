/* global server */
'use strict';

// Load modules

const Code = require('@hapi/code');
const Lab = require('@hapi/lab');
const Server = require('../server');

const Constants = require('../lib/constants');

// Test shortcuts

const { describe, it, before } = exports.lab = Lab.script();
const { expect } = Code;

before(async () => {

    global.server = await Server.deployment();
});

describe('Books', () => {

    it('get the quran.', async () => {

        const books = await server.inject({
            method: 'get',
            url: '/books'
        });

        expect(books.statusCode).to.equal(200);
        expect(books.result[0].slugId).to.equal('book-quran');
        expect(books.result[0].type).to.equal(Constants.bookType.quran);
    });
});
