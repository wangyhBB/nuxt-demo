<template>
    <div class="footer-container">
        <el-row class="footer-wrapper">
            <el-col :xs="24" class="hidden-md-and-up">
                <div class="mb-info">
                    <p class="tel-title tel-mb">客服电话</p>
                    <p class="tel-number tel-mb">400-880-896</p>
                    <p class="tel-time tel-mb">周一周五 8:30-18:00</p>
                </div>
            </el-col>
            <el-col :xs="24" :md="{span:12}" :lg="{span:12,offset:0}">
                <div class="footer-qcode">
                    <div class="footer-info">
                        <img src="~static/images/qcode.png">
                        <p>关注微信公众号</p>
                        <p class="qcode-important">全城淘点滴全知晓</p>
                    </div>
                    <div class="footer-info">
                        <img src="~static/images/qcode01.png">
                        <p>下载开店宝APP</p>
                        <p class="qcode-important">智慧门店轻松管理</p>
                    </div>
                </div>
            </el-col>
            <el-col :xs="24" :md="12" :lg="{span:12,offset:0}" class="hidden-sm-and-down">
                <div class="footer-tel">
                    <p class="tel-title">客服电话</p>
                    <p class="tel-number">400-880-896</p>
                    <p class="tel-time">周一周五 8:30-18:00</p>
                </div>
            </el-col>
            <el-col :xs="24">
                <div class="footer-copyRright">
                    @2018 全城淘信息技术服务有限公司 闽ICP备18002914号-1
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<style lang="scss">
.footer-container {
    padding-top: 60px;
    width: 100%;
    padding: 30px 0 10px;
    border-top: 1px solid #e5e5e5;
    background-color: #fff;
    .footer-wrapper {
        margin: 0 auto;
        max-width: 1200px;
        height: 100%;
    }
}
.footer-qcode {
    width: 100%;
    float: left;
    overflow: hidden;
}

.footer-info {
    margin: 0 75px 0 10px;
    float: left;
    width: 100%;
    max-width: 133px;
    img {
        float: left;
        width: 133px;
    }
    p {
        float: left;
        width: 100%;
        text-align: center;
        color: #333333;
        margin-top: 6px;
    }
    p.qcode-important {
        color: #a1a1a1;
        font-size: 12px;
    }
}
@media screen and (max-width: 991px) {
    .footer-qcode {
        display: flex;
        justify-content: center;
    }
    .footer-info {
        margin: 0 45px 0 10px;
        float: left;
        width: 100%;
        max-width: 133px;
        img {
            float: left;
            width: 133px;
        }
        p {
            float: left;
            width: 100%;
            text-align: center;
            color: #333333;
            margin-top: 6px;
        }
        p.qcode-important {
            color: #a1a1a1;
            font-size: 12px;
        }
    }
}
@media screen and (max-width: 768px) {
    .footer-container {
        padding: 20px 0 10px;
    }
    .footer-qcode {
        display: flex;
        justify-content: center;
    }
    .footer-info {
        margin: 0 20px;
        float: left;
        width: 100%;
        max-width: 120px;
        img {
            float: left;
            width: 120px;
        }
        p {
            float: left;
            width: 100%;
            text-align: center;
            color: #333333;
            margin-top: 6px;
        }
        p.qcode-important {
            color: #a1a1a1;
            font-size: 12px;
        }
    }
}

.footer-tel p {
    text-align: right;
    margin-right: 16px;
}
.tel-title {
    margin-top: 10px;
    color: $fontColor;
    font-weight: 400;
    font-style: normal;
    font-size: 24px;
}
.tel-number {
    margin-top: 12px;
    font-size: 32px;
    font-weight: 700;
    font-style: normal;
}
.tel-time {
    margin-top: 12px;
    font-size: 14px;
    color: #a1a1a1;
}
.footer-copyRright {
    color: #999999;
    text-align: center;
    font-size: 14px;
    padding: 10px 40px;
    margin: 20px 0;
    // height: 0.64rem;
    // line-height: 0.64rem;
    border-top: 1px solid #e5e5ee;
}
.tel-mb{
    text-align: center;
}
.mb-info{
    margin-bottom: 20px;
}
</style>
