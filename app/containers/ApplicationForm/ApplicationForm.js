import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import CompanyInput from 'components/CompanyInput';
import ContactInput from 'components/ContactInput';
import NotesInput from 'components/NotesInput';
import StatusInput from 'components/StatusInput';
import FormControlButtons from 'components/FormControlButtons';
import { getCurrent, updateCurrent } from '../../status.utils';
import './style.scss';

class ApplicationForm extends React.PureComponent {
  constructor(props) {
    super(props);

    try {
      const { id } = props.match.params;
      const app = props.applications.filter((a) => (a.createdAt === parseInt(id, 10)))[0];
      this.item = app || {};
      if (app.state) {
        this.item.notes = getCurrent(app.state).notes;
        this.item.status = getCurrent(app.state).status;
      }
    } catch (e) {
      this.item = {};
    }

    this.state = {
      company: this.item.company || '',
      contact: this.item.contact || '',
      notes: this.item.notes || '',
      status: this.item.status || 'Applied',
      companyHelpMsg: false
    };

    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.close = this.close.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteApplication(this.item);
    this.close();
  }

  handleChangeField(key, value) {
    // reset help message when updating company with non-blank value
    if (key === 'company' && this.state.companyHelpMsg && value !== '') {
      this.setState(() => ({
        companyHelpMsg: false
      }));
    }

    this.setState(() => ({
      [key]: value
    }));
  }

  close() {
    this.props.history.push('/');
  }

  handleSubmit() {
    if (this.state.company === '') {
      this.setState(() => ({ companyHelpMsg: true }));
    } else {
      if (this.item.company) {
        const nextState = updateCurrent(this.item.state, {
          notes: this.state.notes,
          status: this.state.status,
          updated: Date.now()
        });
        const data = {
          company: this.state.company,
          contact: this.state.contact,
          createdAt: this.item.createdAt,
          state: nextState
        };
        this.props.updateApplication(data);
      } else {
        const data = {
          company: this.state.company,
          contact: this.state.contact,
          createdAt: Date.now(),
          state: [
            {
              notes: this.state.notes,
              status: this.state.status,
              updated: Date.now()
            }
          ]
        };
        this.props.addApplication(data);
      }
      this.close();
    }
  }

  render() {
    return (
      <section className="application-form">
        <h1 className="application-form__title subtitle has-text-centered">
          {(this.item.company) ?
            'Edit' :
            'Create New'
          }
        </h1>
        <div className="container">
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
            onDelete={this.handleDelete}
            onSubmit={this.handleSubmit}
            onCancel={this.close}
            showDelete={this.item.company !== undefined}
          />

        </div>
      </section>
    );
  }
}
export default withRouter(ApplicationForm);

ApplicationForm.propTypes = {
  applications: PropTypes.array,
  match: PropTypes.object,
  history: PropTypes.object,
  addApplication: PropTypes.func,
  updateApplication: PropTypes.func,
  deleteApplication: PropTypes.func,
};
