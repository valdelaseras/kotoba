export default class Lobby {
    constructor( outlet ) {
        this.outlet = outlet;

        this.build();
    }

    build() {
        let template = `
            <div class="column">
                <div class="column">
                    <div class="content">
                        <h1>Lobby</h1>
                        <h2>Welcome { user.name }!</h2>
                    </div>
                </div>
           
                        
                <div class="column two">
                    <div class="content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium a est ac sodales.
                            Etiam feugiat magna ex, id bibendum risus vestibulum ut. In quis efficitur tortor.
                            Vivamus dictum vestibulum turpis et laoreet.
                        </p>
                    </div>
                </div>
                
                <div class="column">
                
                    <div class="column three">
                        <div class="content">
                            <h3>Practice Kana</h3>
                            <!--turn these uls into custom web components-->
                            <ul>
                                <li>
                                    <a role="button" class="btn btn-secondary">Hiragana</a>
                                </li>
                                <li>
                                    <a role="button" class="btn btn-secondary">Katakana</a>
                                </li>
                                <li>
                                    <a role="button" class="btn btn-secondary">Mixed</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                   
                    <div class="column three">
                        <div class="content">
                            <h3>Practice Kanji</h3>
                            <!--turn these uls into custom web components-->
                            <ul>
                                <li>
                                    <a role="button" class="btn btn-secondary">Kanji N5</a>
                                </li>
                                <li>
                                    <a role="button" class="btn btn-secondary">Kanji N4</a>
                                </li>
                                <li>
                                    <a role="button" class="btn btn-secondary">Kanji N3</a>
                                </li>
                                <li>
                                    <a role="button" class="btn btn-secondary">Kanji N2</a>
                                </li>
                                <li>
                                    <a role="button" class="btn btn-secondary">Kanji N1</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="column three">
                        <div class="content">
                            <!--dynamic content box goes here-->
                            <!-- - display some description depending on which test was clicked-->
                            <!-- - display a select elm to allow user to choose practice styles-->
                            <!-- - start test button-->
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.outlet.innerHTML = template;
    }
}
