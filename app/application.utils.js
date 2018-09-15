import uuidv4 from 'uuid/v4';
import { updateCurrent } from './status.utils';

/**
 * updateApplication updates an application record in an array of applications
 *
 * @param {array<application>} applications
 * @param {object<application>} updatedApp
 * @returns {array<applications>}
 */
export const updateApplications = (applications, updatedApp) => applications.map((app) => {
  if (app.id === updatedApp.id) {
    return updatedApp;
  }
  return app;
});

/**
 * Returns a new array of applications minus the application matching the application argument
 * @param {array<application>} applications
 * @param {object<application>} application
 * @returns {array<application>}
 */
export const deleteApplication = (applications, application) => applications.filter((app) => {
  if (app.id === application.id) {
    return false;
  }
  return true;
});

/**
 * takes an application object and returns a new application
 * object with a createdAt: property (if none exists)
 * @param {object<application>} application
 * @returns {object<application>}
 */
export const createApplication = (application) => Object.assign({},
  application,
  { id: uuidv4() });

/**
 *
 * @param {object} data
 * @returns {object<Application>}
 */
export const appFromData = (data) => {
  const application = {
    company: data.company,
    contact: data.contact,
    createdAt: data.createdAt,
    state: [
      {
        notes: data.notes,
        status: data.status,
        updated: data.createdAt
      }
    ]
  };
  return application;
};

/**
 * Takes an application record and updates any changed data
 * making sure to only write to the current status, and keep status history in tact
 * @param {object} prev
 * @param {object} next
 * @returns {object<Application>}
 */
export const updateApplication = (prev, next) => {
  const nextState = updateCurrent(prev.state, {
    notes: next.notes,
    status: next.status,
    updated: next.createdAt
  });

  const nextApplication = Object.assign(prev, {
    company: next.company,
    contact: next.contact,
    createdAt: next.createdAt,
    state: nextState
  });
  return nextApplication;
};
