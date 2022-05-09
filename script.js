const glink = document.querySelector("#text-field"),
       btn = document.querySelector(".btn"),
        dwnLink = document.querySelector(".downloadlink");

btn.addEventListener("click", copylink);
function copylink(ev) {
    ev.preventDefault();
    const glinkValue = glink.value;
    const confirmLink = glinkValue.includes("https://drive.google.com/");
    if (glink.value == "") {
        alert("Enter a Google drive link");
    } else {
        if (confirmLink == true){
            const getDwnLink = glinkValue.replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=download&id=")
            .replace("/view?usp=sharing", "");
            dwnLink.value = getDwnLink;
            //COPY FUNCTION 
            function copyText(ev) {
                if (dwnLink.value == "") {
                    return;
                }else{
                    ev.select();
                    document.execCommand("copy");
                }
            }
            //COPY DOWNLOAD LINK
            const copyDownLink = document.querySelector(".CopyDwnLink")
            .addEventListener("click", () =>{
                const copyDownLink = document.querySelector(".CopyDwnLink");
                copyDownLink.textContent = "copied!!";
                alert("Link copied!!")
               setTimeout(()=>{
                   copyDownLink.textContent = "copy";
               }, 3000)
                return copyText(dwnLink);    
            })
            //EMBED AUDIO LINK
            const embedAudio = document.querySelector(".embedAudio");
            let audio1 = '<audio width="300" height="32" control="controls" src="';
            let audio2 = '"type="audio/mp3"></audio>';
            embedAudio.value = (`${audio1}${dwnLink.value}${audio2}`);
            //COPY AUDIO LINK
            const copyAideo = document.querySelector(".copyAudio")
            .addEventListener("click", ()=>{
                alert("Link copied!!");
                const copyAideo = document.querySelector(".copyAudio");
                copyAideo.textContent = "copied!!";
                setTimeout((e)=>{
                    copyAideo.textContent = "copy";
                }, 3000)
                return copyText(embedAudio);
            })
            //EMBED VIDEO LINK
            const embedVideo = document.querySelector(".embedVideo");
            let video1 ='<iframe src="';
            let video2 = '/preview" width="500" height="315"></iframe>';
            embedVideo.value = `${video1}${dwnLink.value}${video2}`;
            //COPY VIDEO LINK
            const copyVideo = document.querySelector(".copyVideo")
            .addEventListener("click", ()=>{
                const copyVideo = document.querySelector(".copyVideo");
                alert("Link copied!!");
                copyVideo.textContent = "copied!!";
                setTimeout(()=>{
                    copyVideo.textContent = "copy";
                }, 3000)

                return copyText(embedVideo);
            })
        }else{
            alert("Invalid Link, select Google Drive link instead");
        } 
    } 
}