import React from 'react';
import PropTypes from 'prop-types';
import CompanyInput from 'components/CompanyInput';
import ContactInput from 'components/ContactInput';
import NotesInput from 'components/NotesInput';
import StatusInput from 'components/StatusInput';
import FormControlButtons from 'components/FormControlButtons';
import './style.scss';

export default class ApplicationForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // mode: props.mode || 'create',
      company: props.company || '',
      contact: props.contact || '',
      notes: props.notes || '',
      status: props.status || 'Considering',
      companyHelpMsg: false
    };
    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeField(key, value) {
    // reset help message when updating company with non-blank value
    if (key === 'company' && this.state.companyHelpMsg && value !== '') {
      this.setState(() => ({
        companyHelpMsg: ''
      }));
    }

    this.setState(() => ({
      [key]: value
    }));
  }

  handleSubmit() {
    if (this.state.company === '') {
      this.setState(() => ({ companyHelpMsg: true }));
    } else {
      this.props.onSubmit({
        company: this.state.company,
        contact: this.state.contact,
        state: [
          {
            notes: this.state.notes,
            status: this.state.status,
            updated: Date.now()
          }
        ]
      });
      this.props.onCancel();
    }
  }

  render() {
    return (
      <section className="application-form section">
        <div className="container">
          <h1 className="application-form__title subtitle has-text-centered">
            {(this.props.company) ?
              'Edit' :
              'Create New'
            }
          </h1>
          <CompanyInput
            handleChangeField={this.handleChangeField}
            company={this.state.company}
            companyHelpMsg={this.state.companyHelpMsg}
          />
          <ContactInput
            handleChangeField={this.handleChangeField}
            contact={this.state.contact}
          />
          <NotesInput
            handleChangeField={this.handleChangeField}
            notes={this.state.notes}
          />

          <StatusInput
            handleChangeField={this.handleChangeField}
            status={this.state.status}
          />
          <FormControlButtons
            onDelete={this.props.onDelete}
            onSubmit={this.handleSubmit}
            onCancel={this.props.onCancel}
            showDelete={this.props.company}
          />

        </div>
      </section>
    );
  }
}

ApplicationForm.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  onDelete: PropTypes.func,
  company: PropTypes.string,
  contact: PropTypes.string,
  notes: PropTypes.string,
  status: PropTypes.string
};
