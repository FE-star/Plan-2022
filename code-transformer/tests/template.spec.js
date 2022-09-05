import compiler from '../src/index.mjs'
import { HtmlDiffer } from 'html-differ'
import * as logger from 'html-differ/lib/logger'

var options = {
    ignoreAttributes: [],
    compareAttributesAsJSON: [],
    ignoreWhitespaces: true,
    ignoreComments: true,
    ignoreEndTags: false,
    ignoreDuplicateAttributes: false
};

var htmlDiffer = new HtmlDiffer(options);

const res1 = `<view class="container">
  <view class="userinfo">
    <block wx:if="{{canIUseOpenData}}">
      <view class="userinfo-avatar" bindtap="bindViewTap">
        <open-data type="userAvatarUrl"></open-data>
      </view>
      <open-data type="userNickName"></open-data>
    </block>
    <block wx:elif="{{!hasUserInfo}}">
      <button wx:if="{{canIUseGetUserProfile}}" bindtap="getUserProfile"> 获取头像昵称 </button>
      <button wx:elif="{{canIUse}}" open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>
      <view wx:else> 请使用1.4.4及以上版本基础库 </view>
    </block>
    <block wx:else>
      <image bindtap="bindViewTap" class="userinfo-avatar" src="{{userInfo.avatarUrl}}" mode="cover"></image>
      <text class="userinfo-nickname">{{userInfo.nickName}}</text>
    </block>
  </view>
  <view class="usermotto">
    <text class="user-motto">{{motto}}</text>
  </view>
</view>`

function check(tpl1, tpl2) {
    const isEqual = htmlDiffer.isEqual(tpl1, tpl2)
    if (!isEqual) {
        const diff = htmlDiffer.diffHtml(tpl1, tpl2)
        logger.logDiffText(diff, { charsAroundDiff: 50 })
        throw new Error('no right')
    }
}

describe('template', () => {
    it('test 1', () => {
        const { template } = compiler(`
            <template>
                <view class="container">
                    <view class="userinfo">
                    <block v-if="canIUseOpenData">
                        <view class="userinfo-avatar" @click="bindViewTap">
                            <open-data type="userAvatarUrl"></open-data>
                        </view>
                        <open-data type="userNickName"></open-data>
                    </block>
                    <block v-else-if="!hasUserInfo">
                        <button v-if="canIUseGetUserProfile" @click="getUserProfile"> 获取头像昵称 </button>
                        <button v-else-if="canIUse" open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>
                        <view v-else> 请使用1.4.4及以上版本基础库 </view>
                    </block>
                    <block v-else>
                        <image @click="bindViewTap" class="userinfo-avatar" :src="userInfo.avatarUrl" mode="cover"></image>
                        <text class="userinfo-nickname">{{userInfo.nickName}}</text>
                    </block>
                    </view>
                    <view class="usermotto">
                        <text class="user-motto">{{motto}}</text>
                    </view>
                </view>
            </template>
        `)

        // const res = sanitizeHtml(template)
        check(template, res1)
    })
})