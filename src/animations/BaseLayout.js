import {gsap} from "gsap";
import {Expo, Power3,Power2, Back} from "gsap/gsap-core";


export function animateList(list,items){
    gsap.fromTo(list,{opacity:1},{opacity:1,duration: 1})
    gsap.fromTo(items,{
            translateY: 20,
            opacity: 0,
            backgroundColor: 'unset'

        },
        {
            translateY: 0,
            stagger: 0.05,
            opacity: 1,
            duration: 0.6,
        }
    )
}

export function changeBackground(){

    setTimeout(()=>{
        let sectionsPositionsY;
        const sec = document.querySelectorAll('section')
        const sections = [];
        sec.forEach((item)=>{
            sections.push(item)
        })
        sectionsPositionsY = sections.reduce((acc,item)=>{
            acc[(item.className).toString()] = item.offsetTop
            return acc
        },{})
        window.addEventListener('scroll',()=>{
            if (window.pageYOffset + window.innerHeight > sectionsPositionsY.footer*1.2){
                document.documentElement.style
                    .setProperty('--main-bg-color', 'black');
                document.documentElement.style
                    .setProperty('--main-text-color', 'white');
            }else if(window.pageYOffset + window.innerHeight > sectionsPositionsY.visitUs + 50){
                document.documentElement.style
                    .setProperty('--main-bg-color', 'white');
                document.documentElement.style
                    .setProperty('--main-text-color', 'black');
            } else {
                document.documentElement.style
                    .setProperty('--main-bg-color', '#ea8823');
                document.documentElement.style
                    .setProperty('--main-text-color', 'black');
            }
        })
    },300)

}
export function showSection(){
    document.querySelectorAll('section').forEach((item,index)=>{
            if(window.pageYOffset > item.offsetTop - window.innerHeight){
                gsap.to(item,{translateY:0,duration:1,ease:"back.out(1.7)"})
            }
    })
}

export function animateBody(){

    const wrapper = document.querySelector('.wrapper')
    gsap.to(wrapper,{
            opacity:1,
            duration: 0.7,
            ease: 'power1.in',
        });
}
export function setCursorPosition(){
    window.addEventListener('mousemove',(event)=>{
        const pos = {
            X:event.clientX,
            Y:event.clientY,
        };
        gsap.to('#cursor-point',{
            display: 'block',
            left:pos.X,
            top:pos.Y,
            duration:0,
        })
        gsap.to('#cursor',{
            display: 'block',
            left: pos.X,
            top: pos.Y,
            duration: 1,
            ease: "elastic.out(1, 0.3)",
        })
    })


}

export function setBigCursor(elements){
    document.querySelectorAll(elements).forEach(item=>{
        item.addEventListener('mouseenter',()=>{
                gsap.to('#cursor',{
                    width: 70,
                    height: 70,
                    ease: "elastic.out(1, 0.3)",
                    duration: 1.5,
                })
            }
        )
        item.addEventListener('mouseleave',()=>{
                gsap.to('#cursor',{
                    width: 30,
                    height: 30,
                    ease: "elastic.out(1, 0.3)",
                    duration: 1.5,
                })
            }
        )
    })
}

export function card3D(elements){
    if (window.innerHeight>600){
        let xPositionFromCenter,yPositionFromCenter,transformX,transformY;
        const cards = document.querySelectorAll(elements);
        cards.forEach(item=>{
            function setTransform(event){
                xPositionFromCenter = event.offsetX - item.childNodes[0].offsetWidth/2;
                yPositionFromCenter = event.offsetY - item.childNodes[0].offsetHeight/2;
                transformX = xPositionFromCenter/8;
                transformY = -yPositionFromCenter/12;

                gsap.to(item.childNodes[0],{
                        transform: `rotateY(${transformX}deg) rotateX(${transformY}deg)`,
                        duration: 0.2,
                });
            }
            item.addEventListener('mouseenter',()=>{
                item.childNodes[0].addEventListener('mousemove',setTransform)
            });

            item.addEventListener('mouseleave',()=>{
                item.childNodes[0].removeEventListener('mousemove',setTransform)
                gsap.to(item.childNodes[0],{
                    transform: 'unset',
                    duration: 0.5,
                });
            });
        })
    }
}
export function drawSVG(path,time){
    const length = document.querySelector(path).getTotalLength();
    gsap.to(path,{
        strokeDasharray: length,
        duration: time,
        ease: Expo.easeIn,
        onComplete:()=>{
            gsap.to(path,{
                fill: 'white',
                duration: 2,
                ease: Expo.easeIn,
                onComplete: ()=>{
                    gsap.to(path,{
                        translateY: -80,
                        duration: 2,
                        ease: Power3.easeInOut,
                        onComplete: ()=>{
                            gsap.fromTo('.message span',{
                                opacity: 0,
                                translateY: 30,
                            },{
                                opacity:1,
                                translateY: 0,
                                stagger: 0.1,
                                ease: Back.easeOut.config(1.7),
                            })
                        }
                    })
                }
            })
        }
    })
}
export function hideWelcome(){
    gsap.to('.welcome > *',{
        opacity:0,
        translateY: -700,
        duration: 2,
        ease: Power2.easeIn,
    })
}