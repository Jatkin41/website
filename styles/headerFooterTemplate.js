class headerTemplate extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div style="background-color: #a76565;" id=Top;> <!--heading div-->
            <div>
                <h1 class="heading">website that i made</h1>
            </div>
            <div>
                <div class="topnav">
                    <div><a href="home.html">Home</a></div>
                    <div><a href="about.html">About Me</a></div>
                    <div><a href="photography.html">Photography</a></div>
                    <div><a href="other.html">Other</a></div>
                </div>
            </div>
        </div>
        `
    }
}

class footerTemplate extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="footer">
            <div>
                <div>
                    &copy; Joshua Atkinson 2024 &#8277; <a href="https://github.com/Jatkin41/Website">Source Code</a>
                    <div class="top">
                        <a href="#Top">Top of Page</a>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('header-template', headerTemplate);
customElements.define('footer-template', footerTemplate);