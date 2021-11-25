import React, { useEffect } from "react";
import 'features/diary/style/DiaryText.scss'

export default function Test(){
    function initManuscript() {
        const manuscript = document.querySelectorAll(".manuscript");
        const handleResize = () => {
            manuscript.forEach((elt) => {
                resizeMnuascriptContainer(elt);
                resizeImage(elt);
            });
        };
    
        window.addEventListener("load", handleResize, { passive: true });
        window.addEventListener("resize", handleResize, { passive: true });
    
        manuscript.forEach((element) => {
            element.querySelectorAll("p").forEach((element) => {
                const text = element.innerText;
    
                element.innerHTML = "";
                [...text].forEach((word) => {
                    const span = document.createElement("span");
                    const textNode = document.createTextNode(word);
    
                    span.appendChild(textNode);
                    element.append(span);
                });
            });
        });
    
        handleResize();
    }
    useEffect(()=>{initManuscript()},[])
    function resizeMnuascriptContainer(element) {
        element.style.width = `${
            (Math.floor(element.parentElement.offsetWidth / 24) - 1) * 24 - 1
        }px`;
    }
    
    function resizeImage(element) {
        element.querySelectorAll("img").forEach((img) => {
            const { naturalWidth, naturalHeight } = img;
            const ratio = naturalHeight / naturalWidth;
            const newHeight = element.offsetWidth * ratio;
    
            img.height = Math.floor(newHeight - (newHeight % 32) - 8);
        });
    }
    
    initManuscript();
    return(
        <div class="manuscript-all" id="diaryText">
        <div class="manuscript">
            <p>
               오늘은 얄리얄라 얄라 춤을 췄다.
               어뭐지?
               개쩐당ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ
            </p>
        </div>
    </div>
    )
}