'use strict'
import mocha from 'mocha'
import chai from 'chai'
import {execWithEsm, execWithStdEsm} from './utils'

const {describe, it} = mocha
const {expect} = chai

describe('cjs-mjs differences', function() {
  const expectedOutput = ['the handle', 'the spout', 'hot tea']
  const expectedScaldingOutput = ['the handle', 'the spout', 'scalding tea']

  describe('syntax', () => {
    it('simple import/export, no default', async () => {
      expect(execWithEsm('01-almost-unlike', 'cjs', '01-main-named.js')).to.eql(expectedOutput)

      expect(execWithEsm('01-almost-unlike', 'esm', '01a-main-named.mjs'))
        .to.include('error:')
        .and.to.include('require is not defined')

      expect(execWithEsm('01-almost-unlike', 'esm', '01-main-named.mjs')).to.eql(expectedOutput)
    })

    it('binding', async () => {
      expect(execWithEsm('01-almost-unlike', 'cjs', '02-main-binding.js')).to.eql(expectedOutput)

      expect(execWithEsm('01-almost-unlike', 'esm', '02-main-binding.mjs')).to.eql(
        expectedScaldingOutput,
      )
    })

    it('default', async () => {
      expect(execWithEsm('01-almost-unlike', 'cjs', '03-main-default.js')).to.eql(expectedOutput)

      expect(execWithEsm('01-almost-unlike', 'esm', '03-main-default.mjs')).to.eql(expectedOutput)
    })

    it('default plus', async () => {
      expect(execWithEsm('01-almost-unlike', 'cjs', '04-main-default-plus.js')).to.eql(
        expectedOutput.concat('the pot is black'),
      )

      expect(execWithEsm('01-almost-unlike', 'esm', '04-main-default-plus.mjs')).to.eql(
        expectedOutput.concat('the pot is black'),
      )
    })

    it('renaming', async () => {
      expect(execWithEsm('01-almost-unlike', 'cjs', '05-main-renamed.js')).to.eql(expectedOutput)

      expect(execWithEsm('01-almost-unlike', 'esm', '05-main-renamed.mjs')).to.eql(expectedOutput)
    })
  })

  describe('resolution', () => {
    it('folder with index.*', async () => {
      expect(execWithEsm('01-almost-unlike', 'cjs', '06-main-dir-index.js')).to.eql(expectedOutput)

      expect(execWithEsm('01-almost-unlike', 'esm', '06-main-dir-index.mjs')).to.eql(expectedOutput)
    })

    it('folder with package.json', async () => {
      expect(execWithEsm('01-almost-unlike', 'cjs', '07-main-dir-package.js')).to.eql(
        expectedOutput,
      )

      expect(execWithEsm('01-almost-unlike', 'esm', '07-main-dir-package.mjs')).to.eql(
        expectedOutput,
      )
    })

    it('node_modules', async () => {
      expect(execWithEsm('01-almost-unlike', 'cjs', '08-main-dir-node_modules.js')).to.eql(
        expectedOutput,
      )

      expect(execWithEsm('01-almost-unlike', 'esm', '08-main-dir-node_modules.mjs')).to.eql(
        expectedOutput,
      )
    })
  })

  describe('misc', () => {
    it('import.meta.url', async () => {
      const expectedOutput = ['Hello, world']

      expect(execWithEsm('01-almost-unlike', 'cjs', '09-main-dirname.js')).to.eql(expectedOutput)

      expect(execWithEsm('01-almost-unlike', 'esm', '09-main-dirname.mjs')).to.eql(expectedOutput)

      expect(execWithStdEsm('01-almost-unlike', 'esm', '09-main-dirname.mjs')).to.eql(
        expectedOutput,
      )
    })

    it('dynamic import', async () => {
      expect(execWithEsm('01-almost-unlike', 'cjs', '10-main-dynamic-import.js')).to.eql([
        'hot tea',
      ])

      expect(execWithEsm('01-almost-unlike', 'esm', '10-main-dynamic-import..mjs')).to.include(
        'error:',
      )

      expect(execWithStdEsm('01-almost-unlike', 'esm', '10-main-dynamic-import.mjs')).to.eql([
        'the kettle hot tea',
      ])
    })
  })
})
