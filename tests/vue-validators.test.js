// ./tests/vue-validators.test.js

import { animationDirections } from '../src/index'
import { blockLevelElementTags } from '../src/index'
import { blockOrders } from '../src/index'
import { buttonTypes } from '../src/index'
import { elementTags } from '../src/index'
import { emptyElementTags } from '../src/index'
import { fontAwesomeFamilies } from '../src/index'
import { fontAwesomeSizes } from '../src/index'
import { headingLevels } from '../src/index'
import { inlineLevelElementTags } from '../src/index'
import { inputTypes } from '../src/index'
import { sourceAudioTypes } from '../src/index'
import { sourceImageTypes } from '../src/index'
import { sourceVideoTypes } from '../src/index'
import { unsupportedElementTags } from '../src/index'



test('animationDirections data set array returns a truthy value', async () => {

    expect(animationDirections).toBeTruthy()
    expect(animationDirections.length > 0).toBeTruthy()

})



test('blockLevelElementTags data set array returns a truthy value', async () => {

    expect(blockLevelElementTags).toBeTruthy()
    expect(blockLevelElementTags.length > 0).toBeTruthy()

})



test('blockOrders data set array returns a truthy value', async () => {

    expect(blockOrders).toBeTruthy()
    expect(blockOrders.length > 0).toBeTruthy()

})



test('buttonTypes data set array returns a truthy value', async () => {

    expect(buttonTypes).toBeTruthy()
    expect(buttonTypes.length > 0).toBeTruthy()

})



test('elementTags data set array returns a truthy value', async () => {

    expect(elementTags).toBeTruthy()
    expect(elementTags.length > 0).toBeTruthy()

})



test('emptyElementTags data set array returns a truthy value', async () => {

    expect(emptyElementTags).toBeTruthy()
    expect(emptyElementTags.length > 0).toBeTruthy()

})



test('fontAwesomeFamilies data set array returns a truthy value', async () => {

    expect(fontAwesomeFamilies).toBeTruthy()
    expect(fontAwesomeFamilies.length > 0).toBeTruthy()

})



test('fontAwesomeSizes data set array returns a truthy value', async () => {

    expect(fontAwesomeSizes).toBeTruthy()
    expect(fontAwesomeSizes.length > 0).toBeTruthy()

})



test('headingLevels data set array returns a truthy value', async () => {

    expect(headingLevels).toBeTruthy()
    expect(headingLevels.length > 0).toBeTruthy()

})



test('inlineLevelElementTags data set array returns a truthy value', async () => {

    expect(inlineLevelElementTags).toBeTruthy()
    expect(inlineLevelElementTags.length > 0).toBeTruthy()

})



test('inputTypes data set array returns a truthy value', async () => {

    expect(inputTypes).toBeTruthy()
    expect(inputTypes.length > 0).toBeTruthy()

})



test('sourceAudioTypes data set array returns a truthy value', async () => {

    expect(sourceAudioTypes).toBeTruthy()
    expect(sourceAudioTypes.length > 0).toBeTruthy()

})



test('sourceImageTypes data set array returns a truthy value', async () => {

    expect(sourceImageTypes).toBeTruthy()
    expect(sourceImageTypes.length > 0).toBeTruthy()

})



test('sourceVideoTypes data set array returns a truthy value', async () => {

    expect(sourceVideoTypes).toBeTruthy()
    expect(sourceVideoTypes.length > 0).toBeTruthy()

})



test('unsupportedElementTags data set array returns a truthy value', async () => {

    expect(unsupportedElementTags).toBeTruthy()
    expect(unsupportedElementTags.length > 0).toBeTruthy()

})
