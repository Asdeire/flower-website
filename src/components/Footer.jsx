import React from "react";

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer__container">
                <div class="footer__column">
                    <h2 class="footer__title">PLANTKU</h2>
                    <h3 class="footer__subtitle">Plantku House</h3>
                    <p class="footer__address">
                        Jl. Laksda Adisucipto No.51, Demangan, Kec. Depok, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55282
                    </p>
                </div>
                <div class="footer__column">
                    <h3 class="footer__subtitle">Perusahaan</h3>
                    <ul class="footer__list">
                        <li><a href="#">Tentang Kami</a></li>
                        <li><a href="#">Hubungi Kami</a></li>
                    </ul>
                </div>
                <div class="footer__column">
                    <h3 class="footer__subtitle">Produk</h3>
                    <ul class="footer__list">
                        <li><a href="#">Tanaman</a></li>
                        <li><a href="#">Tanaman Lain</a></li>
                    </ul>
                </div>
                <div class="footer__column">
                    <h3 class="footer__subtitle">Berlangganan Email Kami</h3>
                    <form class="footer__form">
                        <input
                            type="email"
                            placeholder="Masukan Alamat Email"
                            class="footer__input"
                        />
                        <button type="submit" class="footer__button">Submit</button>
                    </form>
                </div>
            </div>
        </footer>
    );
}

export default Footer;