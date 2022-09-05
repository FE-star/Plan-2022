import compiler from './src/index.mjs'

console.log(
    compiler(`
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
)