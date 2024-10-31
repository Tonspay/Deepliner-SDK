
const deeplinkUrl = 
{
  phantom:{
    browser:(url:string,ref:string) =>{
      return `https://phantom.app/ul/browse/${encodeURIComponent(url)}?ref=${encodeURIComponent(ref)}`
    }
  },
  solflare:{
    browser:(url:string,ref:string) =>{
      return `https://solflare.com/ul/v1/browse/${encodeURIComponent(url)}?ref=${encodeURIComponent(ref)}`
    }
  },
  backpack:{
    browser:(url:string,ref:string) =>{
      return `https://backpack.app/ul/v1/browse/${encodeURIComponent(url)}?ref=${encodeURIComponent(ref)}`
    }
  },
  okx:{
    browser:(url:string,ref:string) =>{
      return "https://www.okx.com/download?deeplink=" + encodeURIComponent("okx://wallet/dapp/url?dappUrl=" + encodeURIComponent(url))
    }
  },
}

/**
 * Deeplinker :: Deeplink generator
 */

export class Deeplinker {
  baseUrl = "";
  public constructor(baseUrl:string) {
      this.baseUrl = baseUrl
      return this;
  }

  public actionSelect(type:string)
  {
    switch(type)
    {
      case "phantom":
        return deeplinkUrl.phantom;
      case "solflare":
        return deeplinkUrl.solflare;
      case "backpack":
        return deeplinkUrl.backpack;
      case "okx":
        return deeplinkUrl.okx;
      default :
        return deeplinkUrl.phantom;
    }
  }

  public static browser(_this:Deeplinker , type:string ,  target:string)
  {
    const bw = _this.actionSelect(type);
    return bw.browser(target,_this.baseUrl)
  }
  
}
