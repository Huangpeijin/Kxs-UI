<script lang="ts" setup>

let imgData = [
    {
        url: "https://img-blog.csdnimg.cn/bc3292108e9c4f3ab289d32ff8fba599.jpg",
        id: 0
    },
    {
        url: "https://img-blog.csdnimg.cn/96d9b0d116e943e69050d1cb09a3c068.jpg",
        id: 1
    },
    {
        url: "https://img-blog.csdnimg.cn/6309a2bf616d42449bd1a64594a31ad0.jpg",
        id: 2
    }, {
        url: "https://img-blog.csdnimg.cn/f70ea795c036419db9002a1d452ab01a.jpg",
        id: 3
    },
    {
        url: "https://img-blog.csdnimg.cn/3be574c4c3bf402689c52bf3d1c021de.png",
        id: 4
    },
]
</script>

# Carousel 轮播图

## ● 基础轮播图  
<p>在有限空间内，循环播放同一类型的图片、文字等内容</p>
<div class="borderBox">
         <k-carousel  
            :carouselW="671"
            :carouselH="300"
            :imgData="imgData"
            :autoplay="2000"
            :showPointer="true"
            :isHorizontal="true"
        >
        </k-carousel>   
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
    <div>
        <k-carousel  
            :carouselW="671"
            :carouselH="300"
            :imgData="imgData"
            :autoplay="2000"
            :showPointer="true"
            :isHorizontal="true"
        >
        </k-carousel>
    </div>
</template>
<script lang="ts" setup>

let imgData = [
    {
        url: "https://img-blog.csdnimg.cn/bc3292108e9c4f3ab289d32ff8fba599.jpg",
        id: 0
    },
    {
        url: "https://img-blog.csdnimg.cn/96d9b0d116e943e69050d1cb09a3c068.jpg",
        id: 1
    },
    {
        url: "https://img-blog.csdnimg.cn/6309a2bf616d42449bd1a64594a31ad0.jpg",
        id: 2
    }, {
        url: "https://img-blog.csdnimg.cn/f70ea795c036419db9002a1d452ab01a.jpg",
        id: 3
    },
    {
        url: "https://img-blog.csdnimg.cn/3be574c4c3bf402689c52bf3d1c021de.png",
        id: 4
    },
]
</script>

  ```
</details>

## ● 指示点
<p><code>showPointer</code>属性定义了是否显示指示器。 默认情况下设置为 true ，设置为 false 则不会显示指示器。</p> 
<div class="borderBox">
       <k-carousel
        :imgData="imgData"
        :autoplay="2000"
        :showPointer="false"
        :isHorizontal="true"
      >
      </k-carousel> 
</div>

<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
    <div>
      <k-carousel
        :imgData="imgData"
        :autoplay="2000"
        :showPointer="false"
        :isHorizontal="true"
      >
      </k-carousel>
    </div>
</template>
<script lang="ts" setup>
let imgData = [
    {
        url: "https://img-blog.csdnimg.cn/bc3292108e9c4f3ab289d32ff8fba599.jpg",
        id: 0
    },
    {
        url: "https://img-blog.csdnimg.cn/96d9b0d116e943e69050d1cb09a3c068.jpg",
        id: 1
    },
    {
        url: "https://img-blog.csdnimg.cn/6309a2bf616d42449bd1a64594a31ad0.jpg",
        id: 2
    }, {
        url: "https://img-blog.csdnimg.cn/f70ea795c036419db9002a1d452ab01a.jpg",
        id: 3
    },
    {
        url: "https://img-blog.csdnimg.cn/3be574c4c3bf402689c52bf3d1c021de.png",
        id: 4
    },
]
</script>

  ```
</details>

## ● 垂直轮播图
<p><code>isHorizontal</code>属性定义了是否垂直显示轮播图。 默认情况下设置为 true，显示为水平轮播图。设置为 false 则可以让轮播图在垂直方向上显示。</p> 
<div class="borderBox">
        <k-carousel
        :imgData="imgData"
        :autoplay="2000"
        :showPointer="true"
        :isHorizontal="false"
      >
      </k-carousel>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
    <div>
        <k-carousel
        :imgData="imgData"
        :autoplay="2000"
        :showPointer="true"
        :isHorizontal="false"
      >
      </k-carousel>
    </div>
</template>
<script lang="ts" setup>
let imgData = [
    {
        url: "https://img-blog.csdnimg.cn/bc3292108e9c4f3ab289d32ff8fba599.jpg",
        id: 0
    },
    {
        url: "https://img-blog.csdnimg.cn/96d9b0d116e943e69050d1cb09a3c068.jpg",
        id: 1
    },
    {
        url: "https://img-blog.csdnimg.cn/6309a2bf616d42449bd1a64594a31ad0.jpg",
        id: 2
    }, {
        url: "https://img-blog.csdnimg.cn/f70ea795c036419db9002a1d452ab01a.jpg",
        id: 3
    },
    {
        url: "https://img-blog.csdnimg.cn/3be574c4c3bf402689c52bf3d1c021de.png",
        id: 4
    },
]
</script>

  ```
</details>
## ● 卡片式播图
<p>当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格。交互效果不弱于标准轮播图。</p> 
<div class="borderBox">
        <k-carouselcard  
        :imgData="imgData"
        :autoplay="2000"
        :showPointer="true"
      >
      </k-carouselcard> 
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
    <div>
        <k-carouselcard  
        :imgData="imgData"
        :autoplay="2000"
        :showPointer="true"
      >
      </k-carouselcard>
    </div>
</template>
<script lang="ts" setup>
let imgData = [
    {
        url: "https://img-blog.csdnimg.cn/bc3292108e9c4f3ab289d32ff8fba599.jpg",
        id: 0
    },
    {
        url: "https://img-blog.csdnimg.cn/96d9b0d116e943e69050d1cb09a3c068.jpg",
        id: 1
    },
    {
        url: "https://img-blog.csdnimg.cn/6309a2bf616d42449bd1a64594a31ad0.jpg",
        id: 2
    }, {
        url: "https://img-blog.csdnimg.cn/f70ea795c036419db9002a1d452ab01a.jpg",
        id: 3
    },
    {
        url: "https://img-blog.csdnimg.cn/3be574c4c3bf402689c52bf3d1c021de.png",
        id: 4
    },
]
</script>

  ```
</details>

## ● Attributes 参数
|      参数      |                        说明                        |   类型   | 默认值  |
| :----------------: | :------------------------------------------------: | :------: | :-----: |
|    carouselW   |      轮播图长度                                      |  number  | 671        |
|    carouselH   |      轮播图宽度                                      |  number  |    300     |
|     imgData    |      轮播图图片数据                                  |  Object  | [ ]         |
|    autoplay    |      自动播放时间间距                                |  number  | 2000        |
|  showPointer   |        是否显示指示点                                |  boolead  |    true    |
|  isHorizontal  |      是否水平显示                                    |  boolead  | true      |