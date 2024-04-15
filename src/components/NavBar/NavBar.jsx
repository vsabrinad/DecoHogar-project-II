import React from 'react';
const NavBar = () => {
    return (  <> 
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <img src='https://www.bing.com/images/search?view=detailV2&ccid=AUgoxcR9&id=8472A00DE1B25BA53270A6AC3A2B0AA4EDFD0257&thid=OIP.AUgoxcR9FqWHMZ5fCmiHYAHaHa&mediaurl=https%3a%2f%2fi.pinimg.com%2f736x%2f48%2f73%2f51%2f487351147e6622c1384ef8e71229d7b2.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.014828c5c47d16a587319e5f0a688760%3frik%3dVwL97aQKKzqspg%26pid%3dImgRaw%26r%3d0&exph=736&expw=736&q=Logotipos+Con+Corazon+Y+Casa&simid=608002159615420124&FORM=IRPRST&ck=E2EB48D0C316B85260534712F7BA5F97&selectedIndex=9&itb=0'></img>
                <a class="navbar-brand" href="#">Oli's house-DecoHogar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">¿Quienes somos?</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contacto</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Deco</a></li>
                                    <li><a class="dropdown-item" href="#">Espejos</a></li>
                                    <li><a class="dropdown-item" href="#">Kit de Baño</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                            <i src="https://www.flaticon.es/icono-gratis/anadir-al-carrito_2438133">1</i>
                            </li>
                        </ul>
                    </div> 
                </div>
            </nav>
        </div>
    </>);
}
export default NavBar;