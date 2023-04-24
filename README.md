## Find the deployed app [here](https://b00mparry.github.io/kingmaker/). 👑

### Usage and notes
1. The application was built displaying the dates in the format `DD/MM/YYYY` in the table.
2. Use the `addCampaigns()` method to add campaigns. This method takes an array of campaign objects where the dates are in the format `MM/DD/YYYY` as requested [here](https://github.com/dimik/km-test-case/blob/main/README.md).
3. Use the name search bar to search campaigns by name. Use the HTML date input fields to search by date time period.
4. The data is not cached and does not persist, meaning any added campaigns (added by the `addCampaigns()` method) will be removed on app refresh.

### About the app
The app was built using:
- Vite (bundler)
- React
- Recoil JS (store/state management)
- Tailwind CSS (styling)
- ESLint (linting)