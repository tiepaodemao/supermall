<template>
  <div>
    <h2>热 门 排 行</h2>
    <div id="fatureView">
      <div v-for="item in imgs" :key="item.id">
        <a :href="item.link">
          <img :src="item.image"/>
          <p>{{item.title}}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "FatureView",
      data(){
        return{
          imgs:
            [
              {
                image:'https://img.alicdn.com/imgextra/i4/48604869/O1CN01XMugZk1lq31zjhffk_!!0-saturn_solar.jpg_220x220.jpg_.webp',
                title:'卫衣',
                link:'https://detail.tmall.com/item.htm?id=611845347027&ali_refid=a3_430698_1006:1106798438:N:hSmU6r868qwf7OC74TQgHg==:cba033d46747a07fc931e578d0171b20&ali_trackid=1_cba033d46747a07fc931e578d0171b20&spm=a2e1o.8267851.07626516002.72'
              },
              {
                image:'https://img.alicdn.com/imgextra/i3/109668505/O1CN01FUJkzT2ChL66CAE3Q_!!0-saturn_solar.jpg_220x220.jpg_.webp',
                title:'牛仔裤',
                link:'https://detail.tmall.com/item.htm?id=564046716061&ali_refid=a3_430698_1006:1110701645:N:msaGm4RrFQCLE3DYSic+Ww==:536557a0e48c694bf0d11716adb3c424&ali_trackid=1_536557a0e48c694bf0d11716adb3c424&spm=a2e1o.8267851.07626516002.4'
              },
              {
                image:'https://img.alicdn.com/imgextra/i2/117633230/O1CN01O2N5hA1ZjNsOQOrDa_!!0-saturn_solar.jpg_220x220.jpg_.webp',
                title:'t恤',
                link:'https://detail.tmall.com/item.htm?id=567673155903&ali_refid=a3_430698_1006:1123736227:N:vu+6w0AxoaLnyxeml1ix2w==:148ee16fa716544d76334911c441e4fe&ali_trackid=1_148ee16fa716544d76334911c441e4fe&spm=a2e1o.8267851.07626516002.21'
              },
              {
                image:'https://img.alicdn.com/imgextra/i1/42908172/O1CN01noGi9u2AEpEyp7LcL_!!0-saturn_solar.jpg_220x220.jpg_.webp',
                title:'外套',
                link:'https://detail.tmall.com/item.htm?id=587389403476&ali_refid=a3_430698_1006:1105573220:N:2rimfrpWUC6gvtbtaLLSOA==:40758a5d3fe9c976772f03dedb5a4ad1&ali_trackid=1_40758a5d3fe9c976772f03dedb5a4ad1&spm=a2e1o.8267851.07626516002.8'
              },
              {
                image:'https://img.alicdn.com/imgextra/i2/104405815/O1CN01TeluwA1spJiJ66k3b_!!0-saturn_solar.jpg_220x220.jpg_.webp',
                title:'衬衫',
                link:'https://detail.tmall.com/item.htm?id=612379772145&ali_refid=a3_430698_1006:1110141948:N:5WruHMiFGvkbRxVv7grdtg==:d8ddf9426866e89be6f87857e152b8bb&ali_trackid=1_d8ddf9426866e89be6f87857e152b8bb&spm=a2e1o.8267851.07626516002.55'
              },
              {
                image:'https://img.alicdn.com/imgextra/i2/128606250/O1CN01oWPQOs1w2XzYjc8FO_!!0-saturn_solar.jpg_220x220.jpg_.webp',
                title:'冲锋衣',
                link:'https://detail.tmall.com/item.htm?id=601556494408&ali_refid=a3_430698_1006:1151672841:N:0vQDC/S4t4NscKLKWTgdvOclI9Jphfa1:7a3f8395cf9e34b3f67c276479a0c0aa&ali_trackid=1_7a3f8395cf9e34b3f67c276479a0c0aa&spm=a2e1o.8267851.07626516002.8'
              },
              {
                image:'https://img.alicdn.com/bao/uploaded/i4/2072111873/TB2_IXotAZmBKNjSZPiXXXFNVXa_!!2072111873.jpg',
                title:'内衣',
                link:'https://detail.tmall.com/item.htm?spm=a220m.1000858.1000725.55.16fa63ffAH0S1f&id=556422923276&skuId=3606192342119&user_id=2072111873&cat_id=2&is_b=1&rn=2fec7f1229fbd0d2c8d52ab106b79690'
              },
              {
                image:'https://img.alicdn.com/imgextra/i4/188124207/O1CN01ljcYbk1gwqoh7GzYe_!!188124207.jpg_430x430q90.jpg',
                title:'棉衣',
                link:'https://detail.tmall.com/item.htm?spm=a220m.1000858.1000725.21.4f3c55c1qvf9td&id=600996246896&skuId=4251409605605&user_id=188124207&cat_id=2&is_b=1&rn=9b71ba2c45f9e3cfa388761c549ce32f'
              }
          ]
        }
      }
    }
</script>

<style scoped>
  #fatureView {
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;
  }
  #fatureView>div{
    text-align: center;
    width: 25%;
    font-size: 15px;
    margin-bottom: 20px;
  }
  #fatureView img{
    width: 65%;
    height: auto;
    border-radius:50%;
  }
  h2{
    margin-top: 20px;
    text-align: center;
  }
</style>
