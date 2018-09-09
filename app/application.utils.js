/**
 * updateApplication updates an application record in an array of applications
 *
 * @param {array<application>} applications
 * @param {object<application>} updatedApp
 * @returns {array<applications>}
 */
export const updateApplication = (applications, updatedApp) => applications.map((app) => {
  if (app.createdAt === updatedApp.createdAt) {
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
  if (app.createdAt === application.createdAt) {
    return false;
  }
  return true;
});

/**
 * takes an application object and returns a new application
 * object with a createdAt: property
 * @param {object<application>} application
 * @returns {object<application>}
 */
export const createApplication = (application) => Object.assign({},
  { createdAt: Date.now() },
  application);
