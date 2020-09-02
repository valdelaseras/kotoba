export default class Home {
    constructor( outlet, submitHandler ) {
        this.outlet = outlet;
        this.submitHandler = submitHandler;

        this.build();
    }

    build() {
        this.input = 'username-input';
        this.submitBtn = 'submit-btn';

        let template = `
            <div class="column">
                <div class="content">
                    <h1>Yoroshiku!</h1>
                </div>
            </div>
            <div class="column two">
                <div class="content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium a est ac sodales.
                        Etiam feugiat magna ex, id bibendum risus vestibulum ut. In quis efficitur tortor.
                        Vivamus dictum vestibulum turpis et laoreet.
                    </p>
                    <form>
                        <input id=${ this.input } type="text" placeholder="Enter a username" autocomplete="off">
                        <button id=${ this.submitBtn } class="btn btn-primary" type="submit" disabled>Submit</button>
                    </form>
                </div>
            </div>
        `;

        this.outlet.innerHTML = template;

        this.setFocus( this.input );

        document.getElementById( this.input ).addEventListener('keyup', this.toggleBtnState.bind( this ));
        document.getElementById( this.submitBtn ).addEventListener('click', this.submitForm.bind( this ));
    }

    // better to use hidden attr on 1 parent elm for this template within outlet
    hide = () => {
        this.outlet.innerHTML = null;
    };

    setFocus = ( id ) => {
        document.getElementById( id ).focus();
    };

    formIsValid = () => {
        if ( document.getElementById( this.input ).value ) {
            if ( document.getElementById( this.input ).checkValidity() ) {
                return true;
            }
        }
    };

    toggleBtnState = () => {
        if ( this.formIsValid() ) {
            document.getElementById( this.submitBtn ).disabled = false;
        } else {
            document.getElementById( this.submitBtn ).disabled = true;
        }
    };

    submitForm = ( e ) => {
        e.preventDefault();

        let username = document.getElementById( this.input ).value;
        localStorage.setItem( 'ktb-username', username );

        this.submitHandler( username );
    };
}

