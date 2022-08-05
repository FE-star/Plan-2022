import { mount } from '@vue/test-utils';
import data from '../data/data.mjs'
import { expect, describe, test } from 'vitest'
import { getByText } from '@testing-library/dom'
import Tags from './tags.vue'

test('render tags', async () => {
    const tags = data.data.result[0].icons

    const wrapper = mount(Tags, {
        propsData: {
            tags
        }
    })
    const { element } = wrapper
 
    tags.forEach(tag => {
        expect(getByText(element, tag.text))
    })
});