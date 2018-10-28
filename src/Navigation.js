import { createDrawerNavigator } from "react-navigation";
import { AccountList, ContactUs, AccountDetails } from "./screens";

export default createDrawerNavigator({
  Accounts: AccountList,
  AccountDetails,
  "Contact Us": ContactUs
});
