let n = 1
getPage.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open("GET", `/page${n+1}`)
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response)
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li)
            })
            n+=1
        }
    }
    request.send()
}
getJSON.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response)
            console.log(typeof request.response)
            const object = JSON.parse(request.response)
            console.log(object)
            console.log(typeof object)
            myName.textContent = object.name
        }
    }
    request.send()
}
getXML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open("GET","/4.xml")
    request.onreadystatechange = () =>{
        console.log(request.readyState)
        if(request.readyState ===4 && request.status === 200){
            const dom = request.responseXML
            console.log(dom)
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())

        }
    }
    request.send()
}
getHTML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open("GET","/3.html")
    request.onload = ()=>{
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = ()=>{}
    request.send()
}
getJs.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open("GET", "2.js")
    request.onload = () =>{
        // 创建 script 标签
        const script = document.createElement('script')
        // 添加 script内容
        script.innerHTML = request.response
        // 添加到 头里
        document.body.appendChild(script)
    }
    request.onerror = () =>{}
    request.send()
}
getCss.onclick = () =>{
    // 创建 XMLHttpRequest
    const request = new XMLHttpRequest()
    // 创建 open 方法
    request.open("GET", "/style.css")
    // 创建onload && onerror
    request.onreadystatechange = ()=> {
        console.log(request.readyState)
        if(request.readyState ===4){
            if(request.status >= 200 && request.status <300){
                const style = document.createElement('style')
                style.innerHTML  = request.response
                document.head.appendChild(style)
            }
        }
        
    }

    // 发送请求
    request.send()
}