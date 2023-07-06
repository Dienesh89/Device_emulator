// for top buttons
let devices = document.querySelectorAll(".devices");

function fixBG() {
    devices.forEach((device,index)=>{
        try{
            device.classList.remove("bg-purple-500")
        }catch(error){}
        device.classList.add("bg-white")
        
        if (index === 0) {
            device.innerHTML = `<img src="/static/icons/desktop.svg" alt="Desktop" class="w-10 h-10"/>`
        }
        else if (index === 1) {
            device.innerHTML = `<img src="/static/icons/laptop.svg" alt="Desktop" class="w-10 h-10"/>`
        }
        else if (index === 2) {
            device.innerHTML = `<img src="/static/icons/tablet.svg" alt="Desktop" class="w-10 h-10"/>`
        }
        else if (index === 3) {
            device.innerHTML = `<img src="/static/icons/mobile.svg" alt="Desktop" class="w-10 h-10"/>`
        }
        else if(index === 4){
            //device.innerHTML = `<img src="/static/icons/down_chevron.svg" alt="Desktop" class="w-10 h-10"/>`
            let svg = document.querySelector(`#${device.id} img`);
            svg.src = "/static/icons/down_chevron.svg"
        }
    })
}


devices.forEach((device,index)=>{
    device.addEventListener("click",(event)=>{
        event.preventDefault();
        (async function(){
            await fixBG()
            
            try{
            device.classList.remove("bg-white")
            }catch(error){}
            
            device.classList.add("bg-purple-500")
            
            if (index === 0) {
            device.innerHTML = `<img src="/static/icons/desktop_white.svg" alt="Desktop" class="w-10 h-10"/>`
            }
            else if (index === 1) {
                device.innerHTML = `<img src="/static/icons/laptop_white.svg" alt="Desktop" class="w-10 h-10"/>`
            }
            else if (index === 2) {
                device.innerHTML = `<img src="/static/icons/tablet_white.svg" alt="Desktop" class="w-10 h-10"/>`
            }
            else if (index === 3) {
                device.innerHTML = `<img src="/static/icons/mobile_white.svg" alt="Desktop" class="w-10 h-10"/>`
            }
            else if(index === 4){
                //device.innerHTML = `<img src="/static/icons/down_chevron_white.svg" alt="Responsive" class="w-10 h-10"/>`
                let svg = document.querySelector(`#${device.id} img`);
                svg.src = "/static/icons/down_chevron_white.svg"
            }
            
        })()
    })
})

