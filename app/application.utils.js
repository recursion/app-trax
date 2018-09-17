import { updateCurrent } from './status.utils';

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
