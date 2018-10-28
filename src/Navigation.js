import { createDrawerNavigator } from "react-navigation";
import { AccountList, ContactUs, AccountDetails } from "./screens";

export default createDrawerNavigator({
  Accounts: {
    screen: AccountList
  },
  ContactUs: {
    screen: ContactUs
  },
  AccountDetails: {
    screen: AccountDetails
  }
});
