export function headComponent(title = "Home") {
    return `
        <div class="bg-primary">
            <div class="d-flex align-items-center justify-content-center ">               
                <div class="d-flex align-items-center ms-5 gap-3 ">
                    <img class="logo" src="./image/logo.png" alt="logo">       
                    <h2 id="h2">I<span>T</span><span>E</span></h2>  
                </div>
                <div class="d-flex gap-2 menu">
                    <a class="btn text-white fw-bold" href="home.html">HOME</a>
                    <a class="btn text-white fw-bold" href="product.html">PRODUCT</a>
                    <a class="btn text-white fw-bold" href="aboutus.html">ABOUT US</a>
                </div>           
            </div>
        </div>
    `;
}

export function footComponent() {
    return `
            
            <div class="gridfooter">  
                <div style="width: 100%;">
                </div>

                    <div style="width: 100%; display: flex; align-items: center; justify-content: center;">
                        <img class="logo" src="./image/logo.png" alt="logo">       
                        <h2 id="h2" style="width: 0;">I<span>T</span><span>E</span></h2>
                    </div>
                

                <div >
                    <ul id="contactbelow" class="grid-container">
                        <span class="mb-2"><i class="fa-brands fa-telegram text-info me-2"></i>Telegram : <span>@ITE_Store</span></span>
                        <span class="mb-2"><i class="fa-solid fa-at text-info me-2"></i>Gmail : <span>ITEStore@gmail.com</span></span>
                        <span class="mb-2"><i class="fa-brands fa-facebook text-info me-2"></i> Facebook : <span>ITE Store</span></span>
                    </ul>
                </div>
            </div> 

    `;
}   