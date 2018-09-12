## App-Trax

A simple job application status tracker. This application only runs and stores data locally (for now), allowing you to easily track the progress of your job hunt by adding companies you've applied to - then tracking their status and adding notes as the process progresses.

Demo: https://lab.recursionslaboratory.com


Starter project cloned from the boilerplate: https://github.com/flexdinesh/react-redux-boilerplate 

## Features / Todo

- [x] Create new applications
- [x] Update application status
- [x] Edit application records
- [x] Delete application
- [x] View application history
- [ ] Add instructions/help
- [ ] Calculate and view statistics on application progressions
- [ ] Sort by status
- [ ] Increase test coverage.
- [ ] Improved desktop views
- [ ] Convert to indexedDB -> web DB using something like pouchDB and couchDB for better storage and syncing options.
- [ ] Update status color based on time since last update / automatically set to no-reply after X time?

## Known Issues

- Create New form does not render properly / is not fully scrollable on safari mobile.

## Usage Instructions

1. Use the + button to create a new application
    - Add notes or contact info if applicable
    - Set the current status if other than 'Applied'
2. Update an application by clicking on the colored status button / sync icon.
    - Change the status to whatever the new status is
    - Add new notes related to this status change.
3. Click the expand button (4 outward arrows) beside an applications name to expand it.
    - Click the edit (pen and paper) button to edit any info here (should not be needed unless you made a mistake)
    - Click the history button (clock with circling arrow) to see this applications progress history

## Development
1. Clone the repo
```
git clone https://github.com/recursion/app-trax
```
2. install dependencies
```
npm install
```
3. run the dev server
```
npm run start
```

## Testing 
- Test once with coverage: `npm run test`
- Test watch: `npm run test:watch`

## License

MIT license, Copyright (c) 2018 Michael Symmes
