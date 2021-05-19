import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { compose } from 'redux'

class Signup extends React.Component {

    onSubmit = (formProps) => {
        this.props.signup(formProps)
    }

    render () {
        const { handleSubmit } = this.props //ovo nam daje redux form
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <fieldset>
                        <label>Email</label>
                        <Field 
                            name="email"
                            type="text"
                            component="input"
                            autoComplete="none"
                        />
                    </fieldset>
                    <fieldset>
                        <label>Password</label>
                        <Field 
                            name="password"
                            type="password"
                            component="input"
                            autoComplete="none"
                        />
                    </fieldset>
                    <button>Signup</button>
                </form>
            </div>
        )
    }
}

export default compose( //compose od reduxa nam omogućuje primjenjivanje više HOC (Higher Order Component) na jednu komponentu
    connect(null, actions),
    reduxForm({ form: 'signup' })
)(Signup)