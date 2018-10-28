import { createDrawerNavigator } from "react-navigation";
import { AccountList, ContactUs } from "./screens";

export default createDrawerNavigator({
  Accounts: {
    screen: AccountList
  },
  "Contact Us": {
    screen: ContactUs
  }
});
