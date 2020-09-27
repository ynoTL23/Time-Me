# Time Me
Time Me is a small app to help you remember timings for any event you need. Just the entry a name, add the time (in seconds) and the interface will update with your entry.

Do you need to remember the time it took you to walk to your neighbor's? Enter the info, submit it and you're good to go.

### Features
- Sorting: you can sort the data by time or alphabetically
- Cloud Storage: data is stored on the Cloud thanks to Google Firebase

---

## Local Development
To work on this locally, you'll need a Firebase account.

1. Pull this repo and `npm install` the dependencies
2. Go to Firebase and create a project
3. Inside the project, make a new "Web App" and copy the Firebase config provided to you
4. Head to `firebase.js` and paste it in the `firebaseConfig` variable
5. Run the typical React scripts to see it in action