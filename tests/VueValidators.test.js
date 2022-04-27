// ./tests/VueValidators.test.js

import { mount } from '@vue/test-utils'
import VueValidators from '../src/components/VueValidators.vue'



test('VueValidators.vue component mounts successfully', async () => {

    expect(VueValidators).toBeTruthy()

})



test('VueValidators.vue component text prop accepts a string value', async () => {

    const testString = 'Test String Value'

    const wrapper = mount(VueValidators, {
        props: {
            text: testString
        },
    })

    expect(wrapper.text()).toContain(testString)
    
})



test('VueValidators.vue component default slot accepts an element node with a child text node', async () => {

    const testStrLiteral = `<div>Test String Value</div>`

    const wrapper = mount(VueValidators, {
        slots: {
            default: testStrLiteral
        },
    })

    expect(wrapper.html()).toContain(testStrLiteral)
    
})
