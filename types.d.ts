// declare global  {
  // namespace MyApp {
    
    interface KeyVal {
      key:string;
      value:string;
    }
    interface AppInfo {
      appname:string;
      username:string;
    }
    interface forminput{
        id: string;
        name: string;
        label: string;
        value: string;
    }
    interface MyDyna extends HTMLDivElement { DispData: Function; }
    
    interface iOrg {
      org_id:string;
      name?:string;
      parent?:string;
    }
    interface iUser {
      username:string;
      password?:string;
      first_name?:string;
      last_name?:string;
      email?:string;
      email_verified?:string;
      scope?:string;
    }
    interface iClient{
      client_id:string;
      client_secret?:string;
      redirect_uri?:string;
      grant_types?:string;
      scope?:string;
      hash?:string; // valid value: 'RSASK' (using cert) or 'HS256', 'HS384', 'HS512'
      hmac_key?:string; // description: sharing key be use if hash is HS***
      // user_id?:string; // this column may not be needed since client is not user-specific

    }
    interface iScope {
      scope:string;
      is_default?:string;
    }

    interface iAccess {
      access_token?:string;
      client_id?:string;
      user_id?:string;
      expires?:string;
      scope?:string;
    }
    interface iRefresh {
      refresh_token:string;
      client_id?:string;
      user_id?:string;
      expires?:string;
      scope?:string;
    }
    interface iAcode {
      authorization_code:string;
      client_id?:string;
      user_id?:string;
      redirect_uri?:string;
      expires?:string;
      scope?:string;
      id_token?:string;
      challenge_method?:string; // description: for use in PKCE
      challenge?:string;
    }
// }
// export {};