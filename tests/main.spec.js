import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import { search, 
  searchAlbums, 
  searchArtists, 
  searchTracks,
  searchPlaylists } from '../src/main';

describe('Spotify Wrapper', () => {
	describe('Smoke Tests', () => {
		/*
		* search (generico) - + de 1 tipo
		* searchAlbums
		* searchArtists
		* searchTracks
		* searchPlaylists
		*/
		
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
      const fetchedStub = sinon.stub(global, 'fetch');
      const artists = search();

      expect(fetchedStub).to.have.been.calledOnce;

      fetchedStub.restore();
    });

    it('should receive the correct URL to fetch', () => {
      const fetchedStub = sinon.stub(global, 'fetch');
      
      const artists = search('Incubus', 'artists');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artists');
      
      const albums = search('Incubus', 'album');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album')
    });
  });
});