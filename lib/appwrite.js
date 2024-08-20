import { Client, Account, ID, Avatars, Databases, Query } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.shiv.aora",
  projectId: "66c1bfbe0025c6fdca74",
  databaseId: "66c1c1d20032660f4072",
  userCollectionId: "66c1c1df00050a07607f",
  videoCollectionId: "66c1c22b002386286ef8",
  storageId: "66c1c57500369db24c54",
};
// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async ({ email, username, password }) => {
  // Register User
  try {
    const newAccount = await account.create(ID.unique(), email, password, username)
    if (!newAccount) {
      throw Error;
    }

    const avatar = avatars.getInitials(username);
    await SignIn(email, password);
    const newUser = databases
      .createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        ID.unique(),
        {
          email: email,
          avatar: avatar,
          username: username,
          accountId: newAccount.$id,
        }
      )
    return newUser;
  } catch (error) {
    throw new Error(error);
  }
};

export const SignIn = async (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error);
  }
};

const getAccount = async ()=>{
  try{
    const ac  = await account.get()
    return ac
  }catch(error){
    console.log(error)
  }
}

export const GetCurrentUser = async ()=>{
  try{
    const currentAccount = await getAccount()
    if(!currentAccount){
      throw Error
    }

    const user = await databases.listDocuments(appwriteConfig.databaseId,appwriteConfig.userCollectionId,[Query.equal("accountId",currentAccount.$id)])
    if(!user){
      throw Error
    }
    return user.documents[0]
  }catch(error){
    console.log(error)
  } 
}