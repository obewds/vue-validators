// ./tests/vue-validators.test.js

import { blockLevelElementTags } from '../src/index'
import { elementTags } from '../src/index'
import { emptyElementTags } from '../src/index'
import { inlineLevelElementTags } from '../src/index'
import { unsupportedElementTags } from '../src/index'



test('blockLevelElementTags data set array returns a truthy value', async () => {

    expect(blockLevelElementTags).toBeTruthy()
    expect(blockLevelElementTags.length > 0).toBeTruthy()

})



test('elementTags data set array returns a truthy value', async () => {

    expect(elementTags).toBeTruthy()
    expect(elementTags.length > 0).toBeTruthy()

})



test('emptyElementTags data set array returns a truthy value', async () => {

    expect(emptyElementTags).toBeTruthy()
    expect(emptyElementTags.length > 0).toBeTruthy()

})



test('inlineLevelElementTags data set array returns a truthy value', async () => {

    expect(inlineLevelElementTags).toBeTruthy()
    expect(inlineLevelElementTags.length > 0).toBeTruthy()

})



test('unsupportedElementTags data set array returns a truthy value', async () => {

    expect(unsupportedElementTags).toBeTruthy()
    expect(unsupportedElementTags.length > 0).toBeTruthy()

})
