---
title: Vestibulum ante ipsum primis in faucibus
tags: [ javascript, typescript, nodejs, reactjs ]
date: 2020-04-20T05:25:44.226Z
path: blog/promises-in-javascript
cover: ./javascript.png
excerpt: orci luctus et ultrices posuere cubilia curae
---

Curabitur eu dui in ex tristique dignissim in eu ante. Nullam imperdiet elit in magna condimentum, ut gravida orci ornare. Nullam at ipsum sit amet nibh fermentum pretium. Donec eu arcu in ante luctus maximus sit amet vel ante. Mauris vel risus sit amet nulla convallis condimentum. Vestibulum in tellus ut ipsum sagittis aliquet ut at est. Nulla sit amet condimentum neque. Sed placerat euismod massa, in eleifend quam dignissim at. Nunc rutrum ligula ut massa gravida molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris diam libero, iaculis a commodo a, dictum eu sem. Ut venenatis, ipsum id pellentesque ornare, leo eros finibus odio, quis tincidunt libero enim sodales elit. Cras sapien metus, lacinia et egestas tempor, porttitor id nisl.

## Vivamus et vehicula diam.

Cras sit amet turpis accumsan, fermentum erat non, tempor eros. Etiam maximus ornare nisl. Aenean suscipit in magna in fringilla. Nunc sodales lorem vel urna ultricies congue. Nam aliquam vitae odio sed consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque risus metus, euismod quis lobortis non, pulvinar ut neque. Fusce rhoncus est id sapien tincidunt auctor. Nam aliquam fermentum lacus. Cras vulputate, risus in finibus dictum, enim tellus aliquet velit, eu scelerisque arcu purus ut neque.

```javascript
    let promiseObj = new Promise(()=> 'some promise');

    console.log(promiseObj);

    /**
    * the output will be Promise {<pending>} not 'some promise'
    */
```

Nam bibendum

```javascript
    const promise = new Promise((resolve, reject) => { 
        try{
            setTimeout(() => { 
                resolve('resolved promise'); 
            }, 5000); 
        }
        catch (e) {
            reject(e)
        }
    }); 

    // this will print - 'resolved promise'
    promise.then((val) => console.log(val))
```


