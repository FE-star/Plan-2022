import { mount } from '@vue/test-utils';
import data from '../data/data.mjs'
import { expect, describe, test } from 'vitest'
import Pic from './rect-pic.vue'

test('render pic', async () => {
    const value = data.data.result[0].pict_url

    const wrapper = mount(Pic, {
        propsData: {
            value: value
        }
    })
    const imgs = await wrapper.findAll('img')
    expect(imgs.length).toBe(1)
    imgs.every(img => {
        expect(img.element.src).toBe(`http:${value}`)
    })
});