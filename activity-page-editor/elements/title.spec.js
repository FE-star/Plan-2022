import { mount } from '@vue/test-utils';
import data from '../data/data.mjs'
import { expect, describe, test } from 'vitest'
import { getByText } from '@testing-library/dom'
import Title from './title.vue'

test('render title', async () => {
    const msg = data.data.result[0].title

    const wrapper = mount(Title, {
        propsData: {
            msg
        }
    })

    expect(getByText(wrapper.element, msg)).toBeInstanceOf(window.HTMLElement)
});