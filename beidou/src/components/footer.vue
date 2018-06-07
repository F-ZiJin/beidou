<template lang="html">
  <div class="footerBox">
    <div class="container">
        <!-- 友情链接 -->
        <div class="youqingLink">
            <div class="row">
                <div class="col-md-10">
                    <p class="youqingLinkP">友情链接</p>
                    <ul>
                        <li><a>中国载人航天工程网</a></li>
                        <li><a>中国航天科技集团有限公司</a></li>
                        <li><a>中国科学院</a></li>
                        <li><a>中国电子科技集团公司</a></li>
                        <li><a>中国兵器工业集团公司</a></li>
                        <li><a>中国控件技术研究院</a></li>
                        <li><a>中国载人航天工程网</a></li>
                        <li><a>中国载人航天工程网</a></li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <a><img src=""></a>
                </div>
            </div>
        </div>
        <!-- 版权所有 -->
        <div class="copyright">
            <div class="row">
                <div class="col-xs-3 col-md-1">
                    <img src="../assets/imgs/bigDipperBanquan.png">
                </div>
                <div class="col-xs-9 col-md-11">
                    <div class="cright">
                        <span>©北斗地基增强系统网站&nbsp;&nbsp;版权所有</span>
                        <span>京ICP备05022684号-2</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  .footerBox {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background-image: url(../assets/imgs/bigDipper_footerBg.jpg);
    background-size: 100% 100%;
  }
  .youqingLink {
    padding: 20px 12px 15px;
    overflow: hidden;
    border-bottom: 1px solid #15608c;
  }
  .youqingLinkP {
    color: #97fcff;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 25px;
  }
  .youqingLink ul {
    overflow: hidden;
    white-space: nowrap;
    padding-left: 0;
  }
  .youqingLink ul li {
    white-space: nowrap;
    float: left;
    display: inline;
    margin-right: 20px;
    margin-bottom: 15px;
  }
  .youqingLink ul li a {
    display: block;
    height: 32px;
    line-height: 32px;
    padding: 0 15px;
    color: #c2fefe;
    font-size: 16px;
    transition: all .25s;
    -moz-transition: all .25s;
    -webkit-transition: all .25s;
    -o-transition: all .25s;
  }
  .copyright {
    margin: 15px 0 0;
    padding-bottom: 15px;
    overflow: hidden;
  }
  .copyrightUl {
    overflow: hidden;
    padding-left: 0;
  }
  .copyrightUl li {
    float: left;
  }
  .copyrightUl li a {
    display: inline-block;
    font-size: 14px;
    color: #ccc;
    transition: all .25s;
    -moz-transition: all .25s;
    -webkit-transition: all .25s;
    -o-transition: all .25s;
  }
  .copyrightUl li span {
    display: inline-block;
    padding: 0 20px;
    color: #ccc;
  }
  .cright span {
    color: #ccc;
    padding-right: 45px;
  }
</style>
