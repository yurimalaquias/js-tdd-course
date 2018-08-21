import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai'

chai.use(sinonChai);

global.fetch = require('node-fetch');

import {
	search,
	searchAlbums,
	searchArtists,
	searchTracks,
	searchPlaylists
} from '../src/main';

describe('Spotify Wrapper', () => {
	let stubedFetch;
	let promise;

	beforeEach(() => {
		stubedFetch = sinon.stub(global, 'fetch');
		promise = stubedFetch.resolves(
			{ json: () => ({ album: 'name' }) });
	});

	afterEach(() => {
		stubedFetch.restore();
	});

	describe('Smoke Tests', () => {

		it('should exist the search method', () => {
			expect(search).to.exist;
		});

		it('should exist the searchAlbums method', () => {
			expect(searchAlbums).to.exist;
		});

		it('should exist the searchArtist method', () => {
			expect(searchArtists).to.exist;
		});

		it('should exist the searchTracks method', () => {
			expect(searchTracks).to.exist;
		});

		it('should exist the searchPlaylists method', () => {
			expect(searchPlaylists).to.exist;
		});
	});

	describe('Generic Search', () => {
		it('should call fetch function', () => {
			const artists = search();
			expect(stubedFetch).to.have.been.calledOnce;
		});

		it('should call fetch with the correct URL', () => {
			context('passing one type', () => {
				const artists = search('Incubus', 'artists');
				const albums = search('Incubus', 'album');

				expect(stubedFetch).to.have.been
					.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artists');

				expect(stubedFetch).to.have.been
					.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
			});

			context('passing more than one type', () => {
				const artistsAndAlbums = search('Incubus', ['artist', 'album']);
				expect(stubedFetch).to.have.been
					.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album')
			});
		});
		// it('should return the JSON Data from the Promise', () => {
		// 	promise.resolves({ body: 'json' });
		// 	const artists = search('Incubus', 'artist');
		// 	expect(artists).to.be.eql({ body: 'json' })
		// });
	});

	describe('Search Artists', () => {
		it('should call fetch function', () => {
			const artist = searchArtists('Incubus');
			expect(stubedFetch).to.be.calledOnce;
		});

		it('should call fetch with the correct URL', () => {
			const artists = searchArtists('Incubus');
			expect(stubedFetch).to.have.been.calledWith('http://api.spotify.com/v1/search?q=Incubus');
		})
	});

});