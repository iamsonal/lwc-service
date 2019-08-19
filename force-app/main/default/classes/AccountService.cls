public with sharing class AccountService {

    @AuraEnabled
    public static List<Account> searchAccount(String accountName) {
        List<Account> accounts = [SELECT Id, Name FROM Account WHERE Name=:accountName];
        if (accounts.size() > 0) {
            return accounts;
        }
        return null;
    }

    @AuraEnabled
    public static List<Account> getAccounts() {
        return [SELECT Id, Name FROM Account LIMIT 5];
    }
}