import findAccount from "@salesforce/apex/AccountService.searchAccount";
import fetchAccounts from "@salesforce/apex/AccountService.getAccounts";

const searchAccount = async accountName => {
   const response = await findAccount({ accountName: accountName });
   return response;
};

const getAccounts = () => {
   return new Promise(resolve => {
    fetchAccounts()
         .then(data => {
            resolve(data);
         })
         .catch(error => {
            resolve(error);
         });
   });
};

export { searchAccount, getAccounts };
